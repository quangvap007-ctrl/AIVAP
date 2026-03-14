import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { LibraryItem } from '../types';
import { Trash2, Image as ImageIcon, Download, ExternalLink } from 'lucide-react';

interface LibraryViewProps {
  images: LibraryItem[];
  onDelete: (id: string) => void;
  onUseAsSource: (imageData: string) => void;
  onFullscreen: (index: number) => void;
  justSavedId: string | null;
}

export const LibraryView = ({ images, onDelete, onUseAsSource, onFullscreen, justSavedId }: LibraryViewProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  if (images.length === 0) {
    return (
      <div className="lg:col-span-12 flex flex-col items-center justify-center py-40 text-stone-400">
        <ImageIcon className="w-20 h-20 mb-6 opacity-20" />
        <h3 className="text-xl font-bold mb-2">{t('libraryEmpty')}</h3>
        <p className="text-sm">{t('libraryEmptyDesc')}</p>
      </div>
    );
  }

  return (
    <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {images.map((item, index) => (
        <div 
          key={item.id}
          className={`
            group relative aspect-square rounded-3xl overflow-hidden border ${theme.border} ${theme.cardBg} shadow-sm hover:shadow-xl transition-all
            ${justSavedId === item.id ? 'ring-4 ring-orange-500 ring-offset-4 dark:ring-offset-stone-950' : ''}
          `}
        >
          <img src={item.imageData} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => onDelete(item.id)}
                className="p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] text-white/70 line-clamp-2 font-medium">{item.prompt}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => onUseAsSource(item.imageData)}
                  className="flex-1 py-2 bg-white text-black rounded-xl text-[10px] font-bold hover:bg-orange-500 hover:text-white transition-all"
                >
                  {t('useAsSource')}
                </button>
                <button 
                  onClick={() => onFullscreen(index)}
                  className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-xl transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
