import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Download, RotateCcw, Split } from 'lucide-react';
import { useImageZoom } from '../hooks/useImageZoom';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { useLanguage } from '../contexts/LanguageContext';

interface FullscreenViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  sourceImage?: any;
}

export const FullscreenViewer = ({ images, initialIndex, onClose, sourceImage }: FullscreenViewerProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [isComparing, setIsComparing] = useState(false);
  const { t } = useLanguage();
  const { zoomState, handleWheel, handleMouseDown, handleMouseMove, handleMouseUp, resetZoom } = useImageZoom();

  const next = () => {
    setIndex((index + 1) % images.length);
    resetZoom();
  };
  
  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
    resetZoom();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col select-none">
      <div className="flex items-center justify-between p-6 z-10">
        <div className="text-white/50 text-sm font-medium">
          {index + 1} / {images.length}
        </div>
        <div className="flex items-center gap-4">
          {sourceImage && (
            <button 
              onClick={() => setIsComparing(!isComparing)}
              className={`p-2 flex items-center gap-2 text-xs transition-colors ${isComparing ? 'text-orange-500' : 'text-white/70 hover:text-white'}`}
              title={t('compareWithOriginal')}
            >
              <Split className="w-5 h-5" />
              <span>{t('compare')}</span>
            </button>
          )}
          {zoomState.scale > 1 && (
            <button 
              onClick={resetZoom}
              className="p-2 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-xs"
              title="Reset Zoom"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset</span>
            </button>
          )}
          <a 
            href={images[index]} 
            download="ai-architect-full.png"
            className="p-2 text-white/70 hover:text-white transition-colors"
          >
            <Download className="w-6 h-6" />
          </a>
          <button 
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {isComparing && sourceImage ? (
            <motion.div
              key="comparison"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full p-10"
            >
              <BeforeAfterSlider 
                before={sourceImage.dataUrl} 
                after={images[index]} 
              />
            </motion.div>
          ) : (
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: zoomState.scale,
                x: zoomState.x,
                y: zoomState.y
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`max-w-full max-h-full object-contain shadow-2xl transition-cursor duration-200 ${zoomState.scale > 1 ? 'cursor-grab' : 'cursor-default'}`}
              draggable={false}
            />
          )}
        </AnimatePresence>

        {images.length > 1 && zoomState.scale === 1 && !isComparing && (
          <>
            <button 
              onClick={prev}
              className="absolute left-6 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button 
              onClick={next}
              className="absolute right-6 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </>
        )}
      </div>
      
      {zoomState.scale === 1 && !isComparing && (
        <div className="p-4 text-center text-white/30 text-xs">
          Use mouse wheel to zoom • Drag to pan
        </div>
      )}
    </div>
  );
};
