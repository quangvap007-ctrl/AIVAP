import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { HistoryItem } from '../types';
import { Trash2, Clock, ChevronRight } from 'lucide-react';

interface HistoryPanelProps {
  history: HistoryItem[];
  onRestore: (item: HistoryItem) => void;
  onClear: () => void;
}

export const HistoryPanel = ({ history, onRestore, onClear }: HistoryPanelProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  if (history.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-stone-400" />
          <h2 className={`text-xl font-bold ${theme.textMain}`}>{t('history')}</h2>
        </div>
        <button 
          onClick={onClear}
          className="text-xs font-bold text-stone-400 hover:text-red-500 transition-colors flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          {t('clearAll')}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {history.map((item) => (
          <button
            key={item.id}
            onClick={() => onRestore(item)}
            className={`group relative aspect-square rounded-2xl overflow-hidden border ${theme.border} ${theme.cardBg} hover:border-orange-500/50 transition-all text-left`}
          >
            {item.generatedImages?.[0] ? (
              <img src={item.generatedImages[0]} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-stone-100 dark:bg-stone-900">
                <Clock className="w-8 h-8 text-stone-300" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-[10px] text-white/70 font-medium mb-1 truncate">{item.prompt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">{item.tab}</span>
                <ChevronRight className="w-3 h-3 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
