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
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);

  const getFramePath = (index: number) => 
    `${folderPath}/${fileNamePrefix}${index.toString().padStart(padLength, '0')}.${fileExtension}`;

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];
    
    // Create new image objects
    for (let i = 1; i <= frameCount; i++) {
        imgArray[i-1] = new Image();
    }

    const onLoad = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / frameCount) * 100);
      setProgress(currentProgress);
      
      if (loadedCount === frameCount) {
        setImages(imgArray);
      }
    };

    // Start loading
    imgArray.forEach((img, i) => {
      img.src = getFramePath(i + 1);
      img.onload = onLoad;
      img.onerror = () => {
          console.error(`Failed to load frame at ${img.src}`);
          onLoad(); 
      };
    });
  }, [folderPath, frameCount]);

  // Handle Scroll & Draw
  useEffect(() => {
    if (images.length !== frameCount) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions to window size for high DPI
    const updateCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        context.scale(dpr, dpr);
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Render Function
    const render = (index: number) => {
        if (index < 0 || index >= frameCount) return;
        const img = images[index];
        if (!img) return;

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

    // Scroll Handler
    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => render(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial render
    render(0);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateCanvasSize);
    };
  }, [images]);

  // Loading Overlay
  if (images.length !== frameCount) {
     return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
           <div className="flex flex-col items-center gap-4">
              <div className="text-2xl font-bold tracking-widest uppercase">Loading Experience</div>
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-white transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                 />
              </div>
              <div className="text-xs text-gray-400">{progress}%</div>
           </div>
        </div>
     );
  }

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
