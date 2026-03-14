import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ArchitectureViewCreator } from './ArchitectureViewCreator';
import { ArchToInteriorCreator } from './ArchToInteriorCreator';
import { ExtendViewCreator } from './ExtendViewCreator';
import { ChangeStyleCreator } from './ChangeStyleCreator';
import { LightingCreator } from './LightingCreator';
import { LightingSimulationCreator } from './LightingSimulationCreator';
import { MoodboardCreator } from './MoodboardCreator';
import { InteriorViewCreator } from './InteriorViewCreator';
import { ConstructionProcessCreator } from './ConstructionProcessCreator';
import { 
  Wand2, 
  Lightbulb, 
  Video, 
  Maximize, 
  Palette, 
  Layout,
  ChevronRight,
  Upload,
  Sparkles,
  Home
} from 'lucide-react';

interface UtilitiesViewProps {
  [key: string]: any; // Simplified for brevity in this step
}

export const UtilitiesView = (props: UtilitiesViewProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeUtil, setActiveUtil] = useState(props.externalActiveUtility || '');
  const [showCreator, setShowCreator] = useState(false);

  const handleBack = () => {
    setActiveUtil('');
    if (props.setExternalActiveUtility) {
      props.setExternalActiveUtility(null);
    }
  };

  const utils = [
    { id: 'architectureView', icon: Sparkles, labelKey: 'architectureViewTitle', descKey: 'architectureViewDesc' },
    { id: 'archToInterior', icon: Home, labelKey: 'archToInteriorTitle', descKey: 'archToInteriorDesc' },
    { id: 'interiorView', icon: Sparkles, labelKey: 'interiorViewTitle', descKey: 'interiorViewDesc' },
    { id: 'moodboard', icon: Palette, labelKey: 'utilMoodboard', descKey: 'utilMoodboardDesc' },
    { id: 'lighting', icon: Lightbulb, labelKey: 'utilLighting', descKey: 'utilLightingDesc' },
    { id: 'lightingSimulation', icon: Sparkles, labelKey: 'lightingSimulationTitle', descKey: 'lightingSimulationDesc' },
    { id: 'videoPrompt', icon: Video, labelKey: 'utilVideoScript', descKey: 'utilVideoScriptDesc' },
    { id: 'extendView', icon: Maximize, labelKey: 'utilExtendView', descKey: 'utilExtendViewDesc' },
    { id: 'changeStyle', icon: Layout, labelKey: 'utilStyleTransfer', descKey: 'utilStyleTransferDesc' },
    { id: 'constructionProcess', icon: Sparkles, labelKey: 'constructionProcessTitle', descKey: 'constructionProcessDesc' },
  ];

  if (showCreator || activeUtil === 'architectureView') {
    return (
      <div className="lg:col-span-12">
        <ArchitectureViewCreator 
          onBack={handleBack}
          addImageToLibrary={props.addImageToLibrary}
          addHistoryItem={props.addHistoryItem}
          aiModel={props.aiModel}
          setFullscreenData={props.setFullscreenData}
        />
      </div>
    );
  }

  if (activeUtil === 'archToInterior') {
    return (
      <div className="lg:col-span-12">
        <ArchToInteriorCreator 
          onBack={handleBack}
          addImageToLibrary={props.addImageToLibrary}
          addHistoryItem={props.addHistoryItem}
          aiModel={props.aiModel}
          setFullscreenData={props.setFullscreenData}
        />
      </div>
    );
  }

  if (activeUtil === 'interiorView') {
    return (
      <div className="lg:col-span-12">
        <InteriorViewCreator 
          onBack={handleBack}
          addImageToLibrary={props.addImageToLibrary}
          addHistoryItem={props.addHistoryItem}
          aiModel={props.aiModel}
          setFullscreenData={props.setFullscreenData}
        />
      </div>
    );
  }

  if (activeUtil === 'extendView') {
    return (
      <div className="lg:col-span-12">
        <ExtendViewCreator 
          onBack={handleBack}
          extendViewSourceImage={props.extendViewSourceImage}
          setExtendViewSourceImage={props.setExtendViewSourceImage}
          extendViewAspectRatio={props.extendViewAspectRatio}
          setExtendViewAspectRatio={props.setExtendViewAspectRatio}
          extendViewImageCount={props.extendViewImageCount}
          setExtendViewImageCount={props.setExtendViewImageCount}
          extendViewGeneratedImages={props.extendViewGeneratedImages}
          extendViewSelectedImage={props.extendViewSelectedImage}
          setExtendViewSelectedImage={props.setExtendViewSelectedImage}
          handleExtendViewGeneration={props.handleExtendViewGeneration}
          isLoading={props.isLoading}
          setFullscreenImage={props.setFullscreenImage}
        />
      </div>
    );
  }

  if (activeUtil === 'changeStyle') {
    return (
      <div className="lg:col-span-12">
        <ChangeStyleCreator 
          onBack={handleBack}
          changeStyleSourceImage={props.changeStyleSourceImage}
          setChangeStyleSourceImage={props.setChangeStyleSourceImage}
          changeStyleUserPrompt={props.changeStyleUserPrompt}
          setChangeStyleUserPrompt={props.setChangeStyleUserPrompt}
          changeStyleGeneratedPrompt={props.changeStyleGeneratedPrompt}
          setChangeStyleGeneratedPrompt={props.setChangeStyleGeneratedPrompt}
          changeStyleImageCount={props.changeStyleImageCount}
          setChangeStyleImageCount={props.setChangeStyleImageCount}
          changeStyleGeneratedImages={props.changeStyleGeneratedImages}
          changeStyleSelectedImage={props.changeStyleSelectedImage}
          setChangeStyleSelectedImage={props.setChangeStyleSelectedImage}
          handleStylePromptGeneration={props.handleStylePromptGeneration}
          handleStyleImageGeneration={props.handleStyleImageGeneration}
          isLoading={props.isLoading}
          loadingMessage={props.loadingMessage}
          setFullscreenImage={props.setFullscreenImage}
        />
      </div>
    );
  }

  if (activeUtil === 'constructionProcess') {
    return (
      <div className="lg:col-span-12">
        <ConstructionProcessCreator 
          onBack={handleBack}
          addImageToLibrary={props.addImageToLibrary}
          addHistoryItem={props.addHistoryItem}
          aiModel={props.aiModel}
          setFullscreenData={props.setFullscreenData}
        />
      </div>
    );
  }

  if (activeUtil === 'lighting') {
    return (
      <div className="lg:col-span-12">
        <LightingCreator 
          onBack={handleBack}
          lightingSourceImage={props.lightingSourceImage}
          setLightingSourceImage={props.setLightingSourceImage}
          lightingSelectedPrompts={props.lightingSelectedPrompts}
          setLightingSelectedPrompts={props.setLightingSelectedPrompts}
          lightingImageCount={props.lightingImageCount}
          setLightingImageCount={props.setLightingImageCount}
          lightingGeneratedImages={props.lightingGeneratedImages}
          lightingSelectedImage={props.lightingSelectedImage}
          setLightingSelectedImage={props.setLightingSelectedImage}
          handleLightingGeneration={props.handleLightingGeneration}
          isLoading={props.isLoading}
        />
      </div>
    );
  }

  if (activeUtil === 'lightingSimulation') {
    return (
      <div className="lg:col-span-12">
        <LightingSimulationCreator 
          onBack={handleBack}
          addImageToLibrary={props.addImageToLibrary}
          addHistoryItem={props.addHistoryItem}
          aiModel={props.aiModel}
          setFullscreenData={props.setFullscreenData}
        />
      </div>
    );
  }

  if (activeUtil === 'moodboard') {
    return (
      <div className="lg:col-span-12">
        <MoodboardCreator 
          onBack={handleBack}
          moodboardSourceImage={props.moodboardSourceImage}
          setMoodboardSourceImage={props.setMoodboardSourceImage}
          moodboardReferenceImage={props.moodboardReferenceImage}
          setMoodboardReferenceImage={props.setMoodboardReferenceImage}
          moodboardPrompt={props.moodboardPrompt}
          setMoodboardPrompt={props.setMoodboardPrompt}
          moodboardImageCount={props.moodboardImageCount}
          setMoodboardImageCount={props.setMoodboardImageCount}
          moodboardGeneratedImages={props.moodboardGeneratedImages}
          moodboardSelectedImage={props.moodboardSelectedImage}
          setMoodboardSelectedImage={props.setMoodboardSelectedImage}
          handleMoodboardGeneration={props.handleMoodboardGeneration}
          isLoading={props.isLoading}
        />
      </div>
    );
  }

  return (
    <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3 space-y-2">
        {utils.map((util) => {
          const Icon = util.icon;
          const isActive = activeUtil === util.id;
          return (
            <button
              key={util.id}
              onClick={() => setActiveUtil(util.id)}
              className={`
                w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left
                ${isActive 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : `${theme.cardBg} ${theme.border} hover:border-orange-500/50`}
              `}
            >
              <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-stone-100 dark:bg-stone-800'}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-stone-500'}`} />
              </div>
              <div>
                <div className="text-sm font-bold">{t(util.labelKey)}</div>
                <div className={`text-[10px] ${isActive ? 'text-white/70' : 'text-stone-400'}`}>{t(util.descKey)}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-9">
        <div className={`${theme.cardBg} rounded-3xl border ${theme.border} p-8 shadow-sm min-h-[500px]`}>
          <h2 className={`text-2xl font-bold mb-6 ${theme.textMain}`}>
            {t(utils.find(u => u.id === activeUtil)?.labelKey || '')}
          </h2>
          
          <div className="flex flex-col items-center justify-center py-20 text-stone-400">
            <Wand2 className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-sm font-medium">{t('utilPlaceholder')}</p>
            <p className="text-xs mt-2">{t('utilPlaceholderDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
