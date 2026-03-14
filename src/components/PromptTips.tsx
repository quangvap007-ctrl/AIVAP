import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../locales/translations';
import { ChevronDown, Sparkles } from 'lucide-react';

interface PromptTipsProps {
    onSelect: (value: string) => void;
}

export const PromptTips: React.FC<PromptTipsProps> = ({ onSelect }) => {
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    const constants = (translations[language] as any).constants;
    const [openCategory, setOpenCategory] = useState<number | null>(null);

    const categories = [
        { label: t('style'), items: constants.stylePrompts, icon: '🎨' },
        { label: t('context'), items: constants.contextPrompts, icon: '🌍' },
        { label: t('lighting'), items: constants.lightingPrompts, icon: '💡' },
    ];

    return (
        <div className="space-y-3 mt-4 p-4 rounded-2xl bg-stone-100/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    {language === 'vi' ? 'Mẹo mô tả' : 'Prompt Tips'}
                </span>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
                {categories.map((cat, idx) => (
                    <div key={idx} className="relative">
                        <button
                            onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                                openCategory === idx 
                                ? 'border-orange-500 bg-orange-50/50 dark:bg-orange-900/20' 
                                : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{cat.icon}</span>
                                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{cat.label}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openCategory === idx ? 'rotate-180' : ''}`} />
                        </button>

                        {openCategory === idx && (
                            <div className="absolute z-50 left-0 right-0 mt-2 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl max-h-60 overflow-y-auto no-scrollbar">
                                <div className="grid grid-cols-1 gap-1">
                                    {cat.items.map((item: string, i: number) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                onSelect(item);
                                                setOpenCategory(null);
                                            }}
                                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-stone-600 dark:text-stone-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 transition-colors"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
