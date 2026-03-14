import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type ThemeType = 'dark' | 'light' | 'warm' | 'cold';

export interface ThemeClasses {
    id: ThemeType;
    appBg: string;
    panelBg: string;
    cardBg: string; // Compatibility
    navBg: string;
    textMain: string;
    textSub: string;
    textMuted: string; // Compatibility
    border: string;
    accent: string;
    buttonSecondary: string;
    inputBg: string;
}

const themes: Record<ThemeType, ThemeClasses> = {
    dark: {
        id: 'dark',
        appBg: 'bg-[#0f172a]',
        panelBg: 'bg-[#1e293b]',
        cardBg: 'bg-[#1e293b]',
        navBg: 'bg-[#1e293b]/90',
        textMain: 'text-slate-200',
        textSub: 'text-slate-400',
        textMuted: 'text-slate-400',
        border: 'border-slate-700',
        accent: 'text-orange-500',
        buttonSecondary: 'bg-slate-700 hover:bg-slate-600 text-slate-200',
        inputBg: 'bg-slate-900/70',
    },
    light: {
        id: 'light',
        appBg: 'bg-[#f1f5f9]', // Slate 100
        panelBg: 'bg-[#ffffff]', // White
        cardBg: 'bg-[#ffffff]',
        navBg: 'bg-white/90',
        textMain: 'text-slate-800',
        textSub: 'text-slate-500',
        textMuted: 'text-slate-500',
        border: 'border-slate-200',
        accent: 'text-orange-600',
        buttonSecondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200',
        inputBg: 'bg-slate-50 border border-slate-200',
    },
    warm: {
        id: 'warm',
        appBg: 'bg-[#1c1917]', // Stone 900
        panelBg: 'bg-[#292524]', // Stone 800
        cardBg: 'bg-[#292524]',
        navBg: 'bg-[#292524]/90',
        textMain: 'text-stone-200',
        textSub: 'text-stone-400',
        textMuted: 'text-stone-400',
        border: 'border-stone-700',
        accent: 'text-amber-500',
        buttonSecondary: 'bg-stone-700 hover:bg-stone-600 text-stone-200',
        inputBg: 'bg-stone-900/70',
    },
    cold: {
        id: 'cold',
        appBg: 'bg-[#020617]', // Slate 950
        panelBg: 'bg-[#0f172a]', // Slate 900
        cardBg: 'bg-[#0f172a]',
        navBg: 'bg-[#0f172a]/90',
        textMain: 'text-blue-100',
        textSub: 'text-blue-300',
        textMuted: 'text-blue-300',
        border: 'border-blue-900',
        accent: 'text-cyan-400',
        buttonSecondary: 'bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-800',
        inputBg: 'bg-[#172033]/70',
    }
};

interface ThemeContextType {
    theme: ThemeClasses;
    setThemeType: (type: ThemeType) => void;
    isDark: boolean; // Compatibility
    toggleTheme: () => void; // Compatibility
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeType, setThemeType] = useState<ThemeType>('dark');

    // Persist theme choice
    useEffect(() => {
        const savedTheme = localStorage.getItem('app_theme') as ThemeType;
        if (savedTheme && themes[savedTheme]) {
            setThemeType(savedTheme);
        }
    }, []);

    const handleSetTheme = (type: ThemeType) => {
        setThemeType(type);
        localStorage.setItem('app_theme', type);
    };

    const isDark = themeType === 'dark' || themeType === 'cold' || themeType === 'warm';
    const toggleTheme = () => {
        handleSetTheme(themeType === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ 
            theme: themes[themeType], 
            setThemeType: handleSetTheme,
            isDark,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
