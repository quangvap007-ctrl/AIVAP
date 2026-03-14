import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { Moon, Sun, Languages, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onBack: () => void;
  isProMode: boolean;
}

export const Header = ({ onBack, isProMode }: HeaderProps) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className={`p-2 rounded-xl border ${theme.border} hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white dark:bg-stone-900 rounded-xl flex items-center justify-center shadow-md border border-stone-100 dark:border-stone-800">
            <Logo size={24} />
          </div>
          <div>
            <h1 className={`text-xl font-bold leading-none ${theme.textMain}`}>{t('appTitle')}</h1>
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Studio {isProMode ? 'PRO' : 'FREE'}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          className={`px-3 py-2 rounded-xl border ${theme.border} flex items-center gap-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-sm font-medium`}
        >
          <Languages className="w-4 h-4" />
          {language.toUpperCase()}
        </button>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-xl border ${theme.border} hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};
