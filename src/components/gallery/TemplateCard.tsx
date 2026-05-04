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

export default function TemplateCard({
  id, name, description, href, accentHex, heroHeadline,
  icon: Icon, folder, ext, prefix, frameCount
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(10);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const numId = parseInt(id, 10);
  const previewExt = (numId === 1 || numId === 2) ? 'jpg' : 'png';
  const staticSrc = `/previews/template${numId}.${previewExt}`;

  // Build frame path — frames are 001-indexed with 3-digit zero-padding
  const getFramePath = useCallback((frameIdx: number) => {
    const padded = String(frameIdx).padStart(3, '0');
    return `/${folder}/${prefix}${padded}${ext}`;
  }, [folder, prefix, ext]);

  // Preload a batch of frames ahead of current position
  const preloadFrames = useCallback((startFrame: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const idx = ((startFrame + i - 1) % frameCount) + 1;
      if (!imgCacheRef.current.has(idx)) {
        const img = new Image();
        img.src = getFramePath(idx);
        imgCacheRef.current.set(idx, img);
      }
    }
  }, [frameCount, getFramePath]);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cached = imgCacheRef.current.get(frameIdx);
    if (cached && cached.complete && cached.naturalWidth > 0) {
      // Scale to fill canvas (cover)
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = cached.naturalWidth;
      const ih = cached.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;
      ctx.drawImage(cached, sx, sy, sw, sh);
    } else {
      // Load and draw
      const img = new Image();
      img.onload = () => {
        imgCacheRef.current.set(frameIdx, img);
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (cw - sw) / 2;
        const sy = (ch - sh) / 2;
        ctx.drawImage(img, sx, sy, sw, sh);
      };
      img.src = getFramePath(frameIdx);
      imgCacheRef.current.set(frameIdx, img);
    }
  }, [getFramePath]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    // Start preloading from frame 10
    preloadFrames(10, 30);

    let frame = 10;
    intervalRef.current = setInterval(() => {
      frame = ((frame) % frameCount) + 1;
      setCurrentFrame(frame);
      drawFrame(frame);
      // Preload ahead
      preloadFrames(frame, 10);
    }, 80); // ~12.5fps for smooth-ish playback without hammering
  }, [frameCount, preloadFrames, drawFrame]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentFrame(10);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Set canvas dimensions when it mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 640;
      canvas.height = 360;
    }
  }, []);

  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Preview Container */}
      <div className="w-full aspect-[16/9] relative overflow-hidden bg-black">
        {/* Static Preview Image (visible when not hovered) */}
        <img
          src={staticSrc}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-80'}`}
        />

        {/* Canvas for hover animation */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

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
      </div>

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

        <span
          className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase rounded-full border transition-all duration-300 group-hover:scale-105"
          style={{
            borderColor: isHovered ? accentHex : 'rgba(255,255,255,0.1)',
            color: isHovered ? '#000' : 'rgba(255,255,255,0.4)',
            backgroundColor: isHovered ? accentHex : 'transparent',
          }}
        >
          Live Preview
        </span>
      </div>
    </Link>
  );
}
