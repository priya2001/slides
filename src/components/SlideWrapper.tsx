import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  exportMode: boolean;
  allowDynamicHeight?: boolean;
  onScaleChange?: (scale: number) => void;
  frameClassName?: string;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({
  children,
  exportMode,
  allowDynamicHeight = false,
  onScaleChange,
  frameClassName = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const [scale, setScale] = useState<number>(1);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Calculate scale based on container size
  const calculateScale = useCallback(() => {
    if (exportMode) {
      // When in export mode, disable scaling completely
      setScale(1);
      onScaleChange?.(1);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    // Update container size state
    setContainerSize({ width, height });

    let newScale: number;

    if (allowDynamicHeight) {
      // Scale only based on width
      newScale = Math.min(width / 1280, 1);
    } else {
      // Scale based on both width and height to fit inside container
      newScale = Math.min(width / 1280, height / 720, 1);
    }

    // Ensure scale never exceeds 1 (no upscaling)
    newScale = Math.min(newScale, 1);

    setScale(newScale);
    onScaleChange?.(newScale);
  }, [exportMode, allowDynamicHeight, onScaleChange]);

  // Set up ResizeObserver to watch for container size changes
  useEffect(() => {
    if (exportMode) return;

    const container = containerRef.current;
    if (!container) return;

    resizeObserverRef.current = new ResizeObserver(() => {
      calculateScale();
    });
    resizeObserverRef.current.observe(container);

    // Initial calculation
    calculateScale();

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [exportMode, calculateScale]);

  // Handle initial scale calculation when component mounts
  useEffect(() => {
    if (exportMode) {
      setScale(1);
      onScaleChange?.(1);
    } else {
      calculateScale();
    }
  }, [exportMode, calculateScale]);

  // Calculate dimensions based on scale
  const width = 1280 * scale;
  const height = allowDynamicHeight ? 'auto' : 720 * scale;
  const minHeight = allowDynamicHeight ? 720 * scale : undefined;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${frameClassName}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* Container that determines the size */}
      <div
        style={{
          width: `${width}px`,
          height: height,
          minHeight: minHeight,
          maxWidth: '100%',
          maxHeight: '100%',
          margin: '0 auto', // Center the slide horizontally
        }}
      >
        {/* Actual slide content - using CSS zoom instead of transform to avoid Recharts issues */}
        <div
          style={{
            width: '1280px',
            height: allowDynamicHeight ? 'auto' : '720px',
            position: 'relative',
            zoom: scale, // Using zoom instead of transform to avoid issues with Recharts
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideWrapper;