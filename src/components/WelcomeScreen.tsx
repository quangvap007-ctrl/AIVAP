import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Sparkles, Zap, History } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (mode: 'free' | 'pro') => void;
  history: any[];
}

export const WelcomeScreen = ({ onStart, history }: WelcomeScreenProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.appBg} flex flex-col items-center justify-center p-6 text-center`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white dark:bg-stone-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/10 rotate-12 overflow-hidden border border-stone-100 dark:border-stone-800">
            <Logo size={60} />
          </div>
        </div>
        <h1 className={`text-5xl font-bold mb-4 ${theme.textMain}`}>{t('welcomeTitle')}</h1>
        <p className={`text-xl mb-12 ${theme.textMuted}`}>
          {t('welcomeSubtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => onStart('free')}
            className="p-8 bg-white dark:bg-stone-900 rounded-3xl border-2 border-transparent hover:border-orange-500 transition-all group text-left shadow-lg"
          >
            <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
              <Zap className="w-6 h-6 text-stone-600 dark:text-stone-400 group-hover:text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('freeMode')}</h3>
            <p className="text-sm text-stone-500">{t('freeModeDesc')}</p>
          </button>

          <button 
            onClick={() => onStart('pro')}
            className="p-8 bg-white dark:bg-stone-900 rounded-3xl border-2 border-orange-500/30 hover:border-orange-500 transition-all group text-left shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Pro</div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('proMode')}</h3>
            <p className="text-sm text-stone-500">{t('proModeDesc')}</p>
          </button>
        </div>

        {history.length > 0 && (
          <div className="mt-12 pt-12 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-center gap-2 text-stone-500 mb-4">
              <History className="w-4 h-4" />
              <span className="text-sm font-medium">{t('recentActivity')}</span>
            </div>
            <div className="flex justify-center gap-2">
               {history.slice(0, 5).map((item, i) => (
                 <div key={i} className="w-12 h-12 rounded-lg bg-stone-200 dark:bg-stone-800 overflow-hidden opacity-50">
                    {item.generatedImages?.[0] && <img src={item.generatedImages[0]} className="w-full h-full object-cover" />}
                 </div>
               ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
