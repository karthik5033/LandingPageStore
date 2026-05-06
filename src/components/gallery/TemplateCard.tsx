'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  href: string;
  accentHex: string;
  heroHeadline: string;
  icon: LucideIcon;
  folder: string;
  ext: string;
  prefix: string;
  frameCount: number;
}

// Sample ~10 evenly spaced frame indices
function getSampledFrames(total: number, sampleCount = 10): number[] {
  const frames: number[] = [];
  const step = Math.max(1, Math.floor(total / sampleCount));
  for (let i = 1; i <= total && frames.length < sampleCount; i += step) {
    frames.push(i);
  }
  return frames;
}

export default function TemplateCard({
  id, name, description, href, accentHex, heroHeadline,
  icon: Icon, folder, ext, prefix, frameCount
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [preloaded, setPreloaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sampledFrames = useRef(getSampledFrames(frameCount));
  const numId = parseInt(id, 10);
  const preloadStarted = useRef(false);
  
  // Build frame path
  const getFramePath = useCallback((frameIdx: number) => {
    const padded = String(frameIdx).padStart(3, '0');
    return `/${folder}/${prefix}${padded}${ext}`;
  }, [folder, prefix, ext]);

  // Use the first frame as the static preview
  const staticSrc = getFramePath(1);

  // Only preload animation frames on HOVER, not on viewport entry
  const startPreload = useCallback(() => {
    if (preloadStarted.current || preloaded) return;
    preloadStarted.current = true;

    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    const total = sampledFrames.current.length;

    sampledFrames.current.forEach((frameNum) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded >= total) setPreloaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded >= total) setPreloaded(true);
      };
      img.src = getFramePath(frameNum);
      imgs.push(img);
    });

    imagesRef.current = imgs;
  }, [getFramePath, preloaded]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    // Start preloading on first hover
    startPreload();

    if (!preloaded || imagesRef.current.length === 0) return;

    let idx = 0;
    intervalRef.current = setInterval(() => {
      idx = (idx + 1) % imagesRef.current.length;
      setCurrentFrameIdx(idx);
    }, 120);
  }, [preloaded, startPreload]);

  // If preload finishes while we're still hovering, start animation
  useEffect(() => {
    if (preloaded && isHovered && !intervalRef.current) {
      let idx = 0;
      intervalRef.current = setInterval(() => {
        idx = (idx + 1) % imagesRef.current.length;
        setCurrentFrameIdx(idx);
      }, 120);
    }
  }, [preloaded, isHovered]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentFrameIdx(0);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Generate a deterministic price under $5
  const price = (numId % 3 === 0 ? 4.99 : numId % 2 === 0 ? 3.99 : 2.99).toFixed(2);
  const currentAnimSrc = imagesRef.current[currentFrameIdx]?.src || staticSrc;

  return (
    <div
      id={`card-${id}`}
      className="group relative flex flex-col bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Preview Container - Links to the Live Preview */}
      <Link href={href} className="w-full aspect-[16/9] relative overflow-hidden bg-black block cursor-pointer">
        {/* Static Preview Image — native lazy loading, no JS preload */}
        <img
          src={staticSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered && preloaded ? 'opacity-0' : 'opacity-80'}`}
        />

        {/* Animated frame (visible on hover) */}
        {isHovered && preloaded && (
          <img
            src={currentAnimSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Text Overlay — Hero content simulation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          {/* Dark vignette for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

          {/* Brand Name */}
          <span
            className="relative text-[10px] font-bold tracking-[0.5em] uppercase mb-3 opacity-80"
            style={{ color: accentHex, fontFamily: "'Inter', sans-serif" }}
          >
            {name}
          </span>

          {/* Hero Headline */}
          <h3
            className="relative text-2xl md:text-3xl font-light text-white text-center leading-tight tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {heroHeadline.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="italic font-light" style={{ color: accentHex }}>{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h3>

          {/* Tagline */}
          <p className="relative text-[10px] text-white/50 tracking-[0.3em] uppercase mt-3 font-medium">
            {description}
          </p>
        </div>

        {/* Playing indicator */}
        <div className={`absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-500 ${isHovered ? 'bg-black/60 border-white/20 opacity-100' : 'bg-black/40 border-white/5 opacity-0'}`}>
          <div className="flex gap-0.5">
            <span className={`w-[3px] h-3 bg-white/80 rounded-full ${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '0ms' }} />
            <span className={`w-[3px] h-4 bg-white/80 rounded-full ${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '150ms' }} />
            <span className={`w-[3px] h-2.5 bg-white/80 rounded-full ${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '300ms' }} />
          </div>
          <span className="text-[9px] text-white/70 font-bold tracking-widest uppercase">Preview</span>
        </div>

        {/* Bottom ID badge */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
            <Icon size={12} />
          </div>
          <span className="font-mono text-[9px] tracking-widest text-white/80 font-bold bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm border border-white/10">
            NO. {id}
          </span>
        </div>
      </Link>

      {/* Footer bar */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-white/5">
        <div>
          <h4
            className="text-base font-light tracking-[0.15em] uppercase text-white/90 group-hover:text-white transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h4>
          <p className="text-[11px] text-white/40 font-light tracking-wider mt-0.5">{description}</p>
        </div>

        {/* Buy Now Button routes to checkout */}
        <Link
          href={`/checkout?id=${id}`}
          className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full border transition-all duration-300 group-hover:scale-105"
          style={{
            borderColor: isHovered ? accentHex : 'rgba(255,255,255,0.2)',
            color: isHovered ? '#000' : 'rgba(255,255,255,0.8)',
            backgroundColor: isHovered ? accentHex : 'transparent',
          }}
        >
          Buy - {`$${price}`}
        </Link>
      </div>
    </div>
  );
}
