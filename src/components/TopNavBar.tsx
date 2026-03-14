import React from 'react';
import { ActiveTab } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Plus, 
  Home, 
  Map, 
  Edit3, 
  Camera, 
  Layers, 
  Video, 
  MessageSquare, 
  Wrench, 
  Wand2,
  Image as ImageIcon 
} from 'lucide-react';

interface TopNavBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  isProMode: boolean;
}

export const TopNavBar = ({ activeTab, onTabChange, isProMode }: TopNavBarProps) => {
  const { theme } = useTheme();

  const tabs: { id: ActiveTab; icon: any; labelKey: string; pro?: boolean }[] = [
    { id: 'create', icon: Plus, labelKey: 'tabCreate' },
    { id: 'interior', icon: Home, labelKey: 'tabInterior' },
    { id: 'planning', icon: Map, labelKey: 'tabPlanning' },
    { id: 'edit', icon: Edit3, labelKey: 'tabEdit' },
    { id: 'cameraAngle', icon: Camera, labelKey: 'tabCameraAngle' },
    { id: 'planTo3d', icon: Layers, labelKey: 'tabPlanTo3D' },
    { id: 'video', icon: Video, labelKey: 'tabCreateVideo', pro: true },
    { id: 'prompt', icon: MessageSquare, labelKey: 'tabCreatePrompt' },
    { id: 'trend', icon: Wand2, labelKey: 'tabTrend' },
    { id: 'utilities', icon: Wrench, labelKey: 'tabUtilities' },
    { id: 'library', icon: ImageIcon, labelKey: 'tabLibrary' },
    { id: 'editor-beta', icon: Wand2, labelKey: 'tabEditorBeta' },
  ];

  return (
    <nav className={`flex items-center gap-1 p-1 rounded-2xl border ${theme.border} ${theme.cardBg} overflow-x-auto no-scrollbar`}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const { t } = useLanguage();
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap relative
              ${isActive 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                : `${theme.textMuted} hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100`}
            `}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
            {t(tab.labelKey)}
            {tab.pro && !isProMode && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white dark:border-stone-900" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
