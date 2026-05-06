'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollSequenceProps {
  folderPath?: string;
  frameCount?: number;
  fileNamePrefix?: string;
  fileExtension?: string;
  blur?: string;
  padLength?: number;
}

export default function ScrollSequence({
  folderPath = '/frames',
  frameCount = 240,
  fileNamePrefix = 'ezgif-frame-',
  fileExtension = 'png',
  blur = '0px',
  padLength = 3
}: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const [progress, setProgress] = useState(0);

  const getFramePath = (index: number) => 
    `${folderPath}/${fileNamePrefix}${index.toString().padStart(padLength, '0')}.${fileExtension}`;

  // Core Render Function
  const render = (index: number) => {
    if (imagesRef.current.length === 0) return;
    
    let img = imagesRef.current[index];
    
    // Intelligent Fallback: Find the absolute closest loaded frame
    if (!img || !img.complete) {
        let closestDist = Infinity;
        let closestImg = null;
        for (let i = 0; i < frameCount; i++) {
            if (imagesRef.current[i] && imagesRef.current[i].complete) {
                const dist = Math.abs(i - index);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestImg = imagesRef.current[i];
                }
            }
        }
        img = closestImg as unknown as HTMLImageElement;
    }
    
    if (!img || !img.complete) return; 

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    // "cover" logic for canvas
    const hRatio = logicalWidth / img.width;
    const vRatio = logicalHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (logicalWidth - img.width * ratio) / 2;
    const centerShift_y = (logicalHeight - img.height * ratio) / 2;
    
    context.clearRect(0, 0, logicalWidth, logicalHeight);
    context.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Progressive Interlaced Preloader — optimized for fast first paint
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    imagesRef.current = imgArray;
    let loadedCount = 0;
    
    // CRITICAL: Load frame 1 FIRST and render it immediately
    // This eliminates the blank screen on page load
    const firstImg = new Image();
    imgArray[0] = firstImg;
    firstImg.onload = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / frameCount) * 100));
      requestAnimationFrame(() => render(0));
      // After first frame renders, start loading the rest
      startInterlacedLoad();
    };
    firstImg.onerror = () => {
      loadedCount++;
      startInterlacedLoad();
    };
    firstImg.src = getFramePath(1);

    const startInterlacedLoad = () => {
      // Pass 1: Every 4th frame — dense enough for smooth scrolling (~60 frames)
      // Pass 2: Every 2nd frame — nearly full quality
      // Pass 3: Remaining odd frames — pixel-perfect
      const pass1: number[] = [];
      const pass2: number[] = [];
      const pass3: number[] = [];

      for (let i = 2; i <= frameCount; i++) { // Skip frame 1, already loaded
        if (i === frameCount || i % 4 === 0) pass1.push(i);
        else if (i % 2 === 0) pass2.push(i);
        else pass3.push(i);
      }

      // Load batches with concurrency limit to avoid saturating the connection
      const loadBatch = (indices: number[], concurrency: number, onComplete?: () => void) => {
        if (indices.length === 0) {
          if (onComplete) onComplete();
          return;
        }

        let started = 0;
        let finished = 0;

        const loadNext = () => {
          if (started >= indices.length) return;
          const i = indices[started++];
          const img = new Image();
          imgArray[i - 1] = img;

          const handleDone = () => {
            finished++;
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
            requestAnimationFrame(() => render(targetFrameRef.current));

            if (finished >= indices.length && onComplete) {
              onComplete();
            } else {
              loadNext(); // Load next in the queue
            }
          };

          img.onload = handleDone;
          img.onerror = handleDone;
          img.src = getFramePath(i);
        };

        // Start up to `concurrency` parallel loads
        const initialBatch = Math.min(concurrency, indices.length);
        for (let c = 0; c < initialBatch; c++) {
          loadNext();
        }
      };

      // Pass 1: 8 concurrent (fast dense skeleton), then pass 2: 8, then pass 3: 6
      loadBatch(pass1, 8, () => {
        loadBatch(pass2, 8, () => {
          loadBatch(pass3, 6);
        });
      });
    };

  }, [folderPath, frameCount]);

  // Handle Scroll & Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const updateCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        context.scale(dpr, dpr);
        
        requestAnimationFrame(() => render(targetFrameRef.current));
    };

    let lastWidth = window.innerWidth;
    const handleResize = () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            updateCanvasSize();
        }
    };

    updateCanvasSize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      targetFrameRef.current = frameIndex;
      requestAnimationFrame(() => render(frameIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
  }, [frameCount]);

  return (
    <>
        <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover block"
            style={blur && blur !== '0px' ? { 
                filter: `blur(${blur})`, 
                transform: 'scale(1.05)'
            } : undefined}
        />
        {/* Subtle, non-intrusive loading indicator */}
        {progress < 100 && (
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none opacity-50">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white drop-shadow-md">
                    Synching Experience {progress}%
                </span>
                <div className="w-24 h-[1px] bg-white/20">
                    <div 
                        className="h-full bg-white transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        )}
    </>
  );
}
