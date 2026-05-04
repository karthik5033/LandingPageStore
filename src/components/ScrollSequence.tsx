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
  fileExtension = 'jpg',
  blur = '0px',
  padLength = 3
}: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const targetFrameRef = useRef(0);

  const getFramePath = (index: number) => 
    `${folderPath}/${fileNamePrefix}${index.toString().padStart(padLength, '0')}.${fileExtension}`;

  // Core Render Function
  const render = (index: number) => {
    if (imagesRef.current.length === 0) return;
    
    let img = imagesRef.current[index];
    
    // Fallback to the nearest previously loaded frame if current one isn't ready
    if (!img || !img.complete) {
        for (let i = index - 1; i >= 0; i--) {
            if (imagesRef.current[i] && imagesRef.current[i].complete) {
                img = imagesRef.current[i];
                break;
            }
        }
    }
    
    if (!img || !img.complete) return; // If even frame 0 isn't loaded, skip

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

  const [progress, setProgress] = useState(0);

  // Preload images gracefully in the background
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    imagesRef.current = imgArray;

    let loadedCount = 0;
    
    // We fire all requests simultaneously. Modern browsers using HTTP/2 or HTTP/3
    // will multiplex these requests and download them much faster than sequential loading.
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        imgArray[i-1] = img;
        
        img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
            // Re-render the canvas if the scroll position is currently waiting for this frame
            requestAnimationFrame(() => render(targetFrameRef.current));
        };
        
        img.onerror = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
        };

        // Assigning src starts the download immediately
        img.src = getFramePath(i);
        
        // Render the very first frame the moment it is ready
        if (i === 1) {
            img.onload = () => {
                loadedCount++;
                requestAnimationFrame(() => render(0));
            };
        }
    }

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
        
        // Re-render after resize
        requestAnimationFrame(() => render(targetFrameRef.current));
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      // Protect against division by zero
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      targetFrameRef.current = frameIndex;
      requestAnimationFrame(() => render(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateCanvasSize);
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
