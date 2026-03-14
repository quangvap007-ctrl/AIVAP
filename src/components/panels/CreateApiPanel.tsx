import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { ImageDropzone } from '../ImageDropzone';
import { sourceImageToDataUrl } from '../../utils';
import { AspectRatio, ImageSize } from '../../types';
import { translations } from '../../locales/translations';
import { Icon } from '../icons';
import { PromptTips } from '../PromptTips';

export const CreateApiPanel: React.FC<any> = (props) => {
    const {
        sourceImage,
        setSourceImage,
        prompt,
        setPrompt,
        aspectRatio,
        setAspectRatio,
        imageSize,
        setImageSize,
        imageCount,
        setImageCount,
        referenceImage,
        setReferenceImage,
        negativePrompt,
        setNegativePrompt,
        isLoading
    } = props;
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    const { ASPECT_RATIO_LABELS } = (translations[language] as any).constants;

    const handleSelectTip = (tip: string) => {
        if (prompt.includes(tip)) return;
        setPrompt(prev => prev ? `${prev}, ${tip}` : tip);
    };

    const handleApplyDefaultNegative = () => {
        setNegativePrompt(t('negativePromptDefault'));
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className={`block text-xs font-bold mb-2 ${theme.textMain}`}>{t('sourceImage')}</label>
                    <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-square border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-[10px] cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                        {sourceImage ? (
                            <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                        ) : (
                            <p>{t('clickToUpload')}</p>
                        )}
                    </ImageDropzone>
                </div>
                <div>
                    <label className={`block text-xs font-bold mb-2 ${theme.textMain}`}>{t('referenceImage') || 'Reference'}</label>
                    <ImageDropzone onImageUpload={setReferenceImage} className={`w-full aspect-square border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-[10px] cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                        {referenceImage ? (
                            <img src={sourceImageToDataUrl(referenceImage)} alt="Reference" className="w-full h-full object-cover" />
                        ) : (
                            <p>{t('clickToUpload')}</p>
                        )}
                    </ImageDropzone>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-3">
                    <label className={`block text-sm font-bold ${theme.textMain}`}>{t('prompt')}</label>
                    <div className="flex gap-2">
                        <button 
                            onClick={props.handleGeneratePromptFromImage}
                            disabled={!sourceImage || isLoading}
                            className={`p-1.5 rounded-lg border ${theme.border} hover:border-orange-500 transition-colors disabled:opacity-50`}
                            title={t('generateFromImage')}
                        >
                            <Icon name="camera" className="w-4 h-4 text-orange-500" />
                        </button>
                        <button 
                            onClick={props.handleGeneratePromptFromKeywords}
                            disabled={!prompt || isLoading}
                            className={`p-1.5 rounded-lg border ${theme.border} hover:border-orange-500 transition-colors disabled:opacity-50`}
                            title={t('generateFromPromptText')}
                        >
                            <Icon name="sparkles" className="w-4 h-4 text-orange-500" />
                        </button>
                    </div>
                </div>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('promptPlaceholder')}
                    className={`w-full h-32 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
                
                <PromptTips onSelect={handleSelectTip} />
            </div>

            <div>
                <div className="flex items-center justify-between mb-3">
                    <label className={`block text-sm font-bold ${theme.textMain}`}>{t('negativePrompt')}</label>
                    <button 
                        onClick={handleApplyDefaultNegative}
                        className={`text-[10px] px-2 py-1 rounded-md border ${theme.border} hover:border-orange-500 transition-colors text-orange-500 font-bold`}
                    >
                        {t('applyDefault') || 'Áp dụng mặc định'}
                    </button>
                </div>
                <textarea 
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    placeholder={t('negativePromptHelp')}
                    className={`w-full h-24 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">{t('aspectRatio')}</label>
                    <select 
                        value={aspectRatio}
                        onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                        className={`w-full p-2.5 rounded-xl border ${theme.border} ${theme.cardBg} text-xs font-medium outline-none ${theme.textMain}`}
                    >
                        {Object.entries(ASPECT_RATIO_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>{label as string}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">{t('imageCount')}</label>
                    <select 
                        value={imageCount}
                        onChange={(e) => setImageCount(Number(e.target.value))}
                        className={`w-full p-2.5 rounded-xl border ${theme.border} ${theme.cardBg} text-xs font-medium outline-none ${theme.textMain}`}
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} {t('images')}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">{t('imageSize')}</label>
                    <select 
                        value={imageSize}
                        onChange={(e) => setImageSize(e.target.value as ImageSize)}
                        className={`w-full p-2.5 rounded-xl border ${theme.border} ${theme.cardBg} text-xs font-medium outline-none ${theme.textMain}`}
                    >
                        <option value="1K">1K Standard</option>
                        <option value="2K">2K High</option>
                        <option value="4K">4K Ultra</option>
                        <option value="512px">512px Draft</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
