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

  // Progressive Interlaced Preloader
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    imagesRef.current = imgArray;
    let loadedCount = 0;
    
    // Strategy: Load a low-framerate skeleton first, then fill in the gaps.
    // This prevents the "stuck" lagging effect on slow networks (Vercel deployment)
    const pass1: number[] = []; // Every 8th frame (approx 12 FPS)
    const pass2: number[] = []; // Every 4th frame (approx 24 FPS)
    const pass3: number[] = []; // Every 2th frame (approx 30 FPS)
    const pass4: number[] = []; // The rest (full 60 FPS)

    for (let i = 1; i <= frameCount; i++) {
        if (i === 1 || i === frameCount || i % 8 === 0) pass1.push(i);
        else if (i % 4 === 0) pass2.push(i);
        else if (i % 2 === 0) pass3.push(i);
        else pass4.push(i);
    }

    const loadBatch = (indices: number[], onComplete?: () => void) => {
        if (indices.length === 0) {
            if (onComplete) onComplete();
            return;
        }

        let batchLoaded = 0;
        indices.forEach(i => {
            const img = new Image();
            imgArray[i-1] = img;
            
            const handleLoad = () => {
                batchLoaded++;
                loadedCount++;
                setProgress(Math.round((loadedCount / frameCount) * 100));
                requestAnimationFrame(() => render(targetFrameRef.current));
                
                if (batchLoaded === indices.length && onComplete) {
                    onComplete();
                }
            };

            img.onload = handleLoad;
            img.onerror = handleLoad;
            img.src = getFramePath(i);
        });
    };

    // Execute interlaced loading sequentially
    loadBatch(pass1, () => {
        loadBatch(pass2, () => {
            loadBatch(pass3, () => {
                loadBatch(pass4);
            });
        });
    });

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
