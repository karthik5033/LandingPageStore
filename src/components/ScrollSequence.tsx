'use client';

import React, { useRef, useEffect } from 'react';

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

  // Preload images gracefully in the background
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    imagesRef.current = imgArray;

    // We load in smaller staggered batches to avoid clogging the network queue
    // which causes all images to finish at the exact same time at the end.
    let loadedCount = 0;
    
    const loadFrame = (i: number) => {
        if (i > frameCount) return;
        const img = new Image();
        img.src = getFramePath(i);
        imgArray[i-1] = img;
        
        img.onload = () => {
            loadedCount++;
            // Re-render the canvas if the scroll position is currently waiting for this frame
            requestAnimationFrame(() => render(targetFrameRef.current));
            
            // Trigger the next frame in the sequence to load
            loadFrame(i + 4); 
        };
        img.onerror = () => {
            loadFrame(i + 4);
        };
    };

    // Kick off 4 parallel loading streams
    loadFrame(1);
    loadFrame(2);
    loadFrame(3);
    loadFrame(4);

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
    <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover block"
        style={blur && blur !== '0px' ? { 
            filter: `blur(${blur})`, 
            transform: 'scale(1.05)' // Scale slightly to hide blurred edges
        } : undefined}
    />
  );
}
