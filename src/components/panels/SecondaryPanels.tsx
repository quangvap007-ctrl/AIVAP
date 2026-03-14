import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { ImageDropzone } from '../ImageDropzone';
import { sourceImageToDataUrl } from '../../utils';
import { AspectRatio, ImageSize, EditSubMode } from '../../types';
import { Icon } from '../icons';
import { PromptTips } from '../PromptTips';

export const CameraAnglePanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    prompt,
    setPrompt,
    aspectRatio,
    setAspectRatio,
    imageCount,
    setImageCount
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('sourceImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('prompt')}</label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('promptPlaceholder.cameraAngle')}
                    className={`w-full h-32 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
                <PromptTips onSelect={(tip) => {
                    if (prompt.includes(tip)) return;
                    setPrompt((prev: string) => prev ? `${prev}, ${tip}` : tip);
                }} />
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
        </div>
    );
};

export const EditPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    sourceImage2,
    setSourceImage2,
    prompt,
    setPrompt,
    editSubMode,
    setEditSubMode,
    editTool,
    setEditTool,
    brushSize,
    setBrushSize,
    editReferenceImage,
    setEditReferenceImage,
    canvaObjects,
    setCanvaObjects,
    setSelectedCanvaObjectIndex,
    handleDeleteSelectedCanvaObject,
    imageCount,
    setImageCount
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleAddCanvaObject = (image: any) => {
        setCanvaObjects((prev: any) => [...prev, image]);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-700/50 overflow-x-auto no-scrollbar">
                {(['inpaint', 'smartEdit', 'mergeHouse', 'mergeMaterial', 'mergeFurniture', 'canva'] as EditSubMode[]).map(mode => (
                    <button 
                        key={mode}
                        onClick={() => setEditSubMode(mode)}
                        className={`flex-shrink-0 px-3 py-1.5 text-[10px] font-bold rounded-md transition-all ${editSubMode === mode ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                    >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                ))}
            </div>

            {['inpaint', 'smartEdit'].includes(editSubMode) ? (
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className={`block text-xs font-bold mb-2 ${theme.textMain}`}>{t('sourceImage')}</label>
                        <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-square border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-[10px] cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                            {sourceImage ? (
                                <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                            ) : (
                                <div className="p-2">
                                    <p>{t('dropzoneHint')}</p>
                                </div>
                            )}
                        </ImageDropzone>
                    </div>
                    <div>
                        <label className={`block text-xs font-bold mb-2 ${theme.textMain}`}>{t('referenceImage')}</label>
                        <ImageDropzone onImageUpload={setEditReferenceImage} className={`w-full aspect-square border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-[10px] cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                            {editReferenceImage ? (
                                <div className="relative w-full h-full group">
                                    <img src={sourceImageToDataUrl(editReferenceImage)} alt="Reference" className="w-full h-full object-cover" />
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setEditReferenceImage(null); }}
                                        className="absolute top-1 right-1 p-1 bg-black/50 hover:bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Icon name="x-mark" className="w-3 h-3" />
                                    </button>
                                </div>
                            ) : (
                                <div className="p-2">
                                    <p>{t('uploadReferenceOptional')}</p>
                                </div>
                            )}
                        </ImageDropzone>
                    </div>
                </div>
            ) : (
                <div>
                    <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('sourceImage')}</label>
                    <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                        {sourceImage ? (
                            <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                        ) : (
                            <div>
                                <p>{t('dropzoneHint')}</p>
                                <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                            </div>
                        )}
                    </ImageDropzone>
                </div>
            )}

            {editSubMode === 'inpaint' && (
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setEditTool('brush')}
                            className={`flex-1 py-2 rounded-lg border flex items-center justify-center gap-2 text-xs font-bold transition-all ${editTool === 'brush' ? 'bg-orange-600 border-orange-500 text-white' : 'border-slate-700 text-slate-400'}`}
                            title={t('brushSelectionHelp')}
                        >
                            <Icon name="pencil" className="w-4 h-4" />
                            {t('brushSelection')}
                        </button>
                        <button 
                            onClick={() => setEditTool('lasso')}
                            className={`flex-1 py-2 rounded-lg border flex items-center justify-center gap-2 text-xs font-bold transition-all ${editTool === 'lasso' ? 'bg-orange-600 border-orange-500 text-white' : 'border-slate-700 text-slate-400'}`}
                        >
                            <Icon name="scissors" className="w-4 h-4" />
                            Lasso
                        </button>
                    </div>
                    {editTool === 'brush' && (
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">{t('brushSize')}: {brushSize}px</label>
                            <input 
                                type="range" 
                                min="5" 
                                max="100" 
                                value={brushSize} 
                                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                                className="w-full accent-orange-600"
                            />
                        </div>
                    )}
                </div>
            )}

            {['mergeHouse', 'mergeMaterial', 'mergeFurniture'].includes(editSubMode) && (
                <div>
                    <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('secondImage')}</label>
                    <ImageDropzone onImageUpload={setSourceImage2} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                        {sourceImage2 ? (
                            <img src={sourceImageToDataUrl(sourceImage2)} alt="Source 2" className="w-full h-full object-cover" />
                        ) : (
                            <div>
                                <p>{t('dropzoneHint')}</p>
                                <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                            </div>
                        )}
                    </ImageDropzone>
                </div>
            )}

            {editSubMode === 'canva' && (
                <div className="space-y-4">
                    <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('addObjects')}</label>
                    <ImageDropzone onImageUpload={handleAddCanvaObject} className={`w-full py-4 border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-xs cursor-pointer hover:border-orange-500/50 transition-colors`}>
                        <div className="flex items-center gap-2">
                            <Icon name="plus" className="w-4 h-4" />
                            <span>{t('addObject')}</span>
                        </div>
                    </ImageDropzone>
                    {canvaObjects.length > 0 && (
                        <div className="grid grid-cols-4 gap-2">
                            {canvaObjects.map((obj: any, idx: number) => (
                                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-700 group cursor-pointer" onClick={() => setSelectedCanvaObjectIndex(idx)}>
                                    <img src={sourceImageToDataUrl(obj)} className="w-full h-full object-cover" />
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleDeleteSelectedCanvaObject(idx); }}
                                        className="absolute top-0.5 right-0.5 bg-red-500 text-white p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Icon name="x-mark" className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('prompt')}</label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t(`promptPlaceholder.${editSubMode}`)}
                    className={`w-full h-32 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
                <PromptTips onSelect={(tip) => {
                    if (prompt.includes(tip)) return;
                    setPrompt((prev: string) => prev ? `${prev}, ${tip}` : tip);
                }} />
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
        </div>
    );
};

export const PlanTo3dPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    referenceImage,
    setReferenceImage,
    prompt,
    setPrompt,
    planTo3dMode,
    setPlanTo3dMode,
    imageCount,
    setImageCount
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-700/50">
                <button 
                    onClick={() => setPlanTo3dMode('render')}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${planTo3dMode === 'render' ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                >
                    Render 3D
                </button>
                <button 
                    onClick={() => setPlanTo3dMode('colorize')}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${planTo3dMode === 'colorize' ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                >
                    Colorize
                </button>
            </div>

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('planImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Plan" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>

            {planTo3dMode === 'render' && (
                <div>
                    <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('styleReference')}</label>
                    <ImageDropzone onImageUpload={setReferenceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                        {referenceImage ? (
                            <img src={sourceImageToDataUrl(referenceImage)} alt="Reference" className="w-full h-full object-cover" />
                        ) : (
                            <div>
                                <p>{t('dropzoneHint')}</p>
                                <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                            </div>
                        )}
                    </ImageDropzone>
                </div>
            )}

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('prompt')}</label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t(`promptPlaceholder.planTo3d${planTo3dMode.charAt(0).toUpperCase() + planTo3dMode.slice(1)}`)}
                    className={`w-full h-32 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
                <PromptTips onSelect={(tip) => {
                    if (prompt.includes(tip)) return;
                    setPrompt((prev: string) => prev ? `${prev}, ${tip}` : tip);
                }} />
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
        </div>
    );
};

export const VideoPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    prompt,
    setPrompt
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('sourceImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('motionDescription')}</label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('promptPlaceholder.video')}
                    className={`w-full h-32 p-4 rounded-2xl border ${theme.border} ${theme.cardBg} focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm ${theme.textMain}`}
                />
                <PromptTips onSelect={(tip) => {
                    if (prompt.includes(tip)) return;
                    setPrompt((prev: string) => prev ? `${prev}, ${tip}` : tip);
                }} />
            </div>
        </div>
    );
};

export const CanvaPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    canvaObjects,
    setCanvaObjects,
    setSelectedCanvaObjectIndex,
    handleDeleteSelectedCanvaObject
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const handleAddCanvaObject = (image: any) => {
        setCanvaObjects((prev: any) => [...prev, image]);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('sourceImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>

            <div className="space-y-4">
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>Add Objects</label>
                <ImageDropzone onImageUpload={handleAddCanvaObject} className={`w-full py-4 border-2 border-dashed ${theme.border} rounded-xl flex items-center justify-center text-center ${theme.textSub} text-xs cursor-pointer hover:border-orange-500/50 transition-colors`}>
                    <div className="flex items-center gap-2">
                        <Icon name="plus" className="w-4 h-4" />
                        <span>Add Object</span>
                    </div>
                </ImageDropzone>
                {canvaObjects.length > 0 && (
                    <div className="grid grid-cols-4 gap-2">
                        {canvaObjects.map((obj: any, idx: number) => (
                            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-700 group cursor-pointer" onClick={() => setSelectedCanvaObjectIndex(idx)}>
                                <img src={sourceImageToDataUrl(obj)} className="w-full h-full object-cover" />
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleDeleteSelectedCanvaObject(idx); }}
                                    className="absolute top-0.5 right-0.5 bg-red-500 text-white p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Icon name="x-mark" className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const PromptGenPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    characterImage,
    setCharacterImage,
    isAnalyzingCharacter
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('architecturalImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('characterOptional')}</label>
                <ImageDropzone onImageUpload={setCharacterImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {characterImage ? (
                        <div className="relative w-full h-full">
                            <img src={sourceImageToDataUrl(characterImage)} alt="Character" className="w-full h-full object-cover" />
                            {isAnalyzingCharacter && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <Icon name="sparkles" className="w-8 h-8 text-orange-500 animate-spin" />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>{t('uploadCharacterImage')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('toIncludeInPrompts')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>
        </div>
    );
};

export const TrendPanel: React.FC<any> = ({
    sourceImage,
    setSourceImage,
    trendSubMode,
    setTrendSubMode
}) => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const modes = [
        { id: 'layout', icon: 'layout', label: t('trendLayoutTitle') },
        { id: 'model', icon: 'cube', label: t('trendModelTitle') },
        { id: 'diagram', icon: 'map', label: t('trendDiagramTitle') },
        { id: 'analyze', icon: 'sparkles', label: t('trendAnalyzeTitle') },
        { id: 'trendMoodboard', icon: 'layers', label: t('trendMoodboardTitle') }
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 gap-3">
                {modes.map(mode => (
                    <button 
                        key={mode.id}
                        onClick={() => setTrendSubMode(mode.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${trendSubMode === mode.id ? 'bg-orange-600 border-orange-500 text-white shadow-lg' : `${theme.cardBg} ${theme.border} ${theme.textMain} hover:bg-white/5`}`}
                    >
                        <div className={`p-2 rounded-lg ${trendSubMode === mode.id ? 'bg-white/20' : 'bg-slate-800'}`}>
                            <Icon name={mode.icon} className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold">{mode.label}</span>
                    </button>
                ))}
            </div>

            <div>
                <label className={`block text-sm font-bold mb-3 ${theme.textMain}`}>{t('sourceImage')}</label>
                <ImageDropzone onImageUpload={setSourceImage} className={`w-full aspect-video border-2 border-dashed ${theme.border} rounded-2xl flex items-center justify-center text-center ${theme.textSub} text-sm cursor-pointer hover:border-orange-500/50 transition-colors overflow-hidden`}>
                    {sourceImage ? (
                        <img src={sourceImageToDataUrl(sourceImage)} alt="Source" className="w-full h-full object-cover" />
                    ) : (
                        <div>
                            <p>{t('dropzoneHint')}</p>
                            <p className="text-xs mt-1 opacity-70">{t('dropzoneFormats')}</p>
                        </div>
                    )}
                </ImageDropzone>
            </div>
        </div>
    );
};
