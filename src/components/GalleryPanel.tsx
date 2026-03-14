import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { AreaSelector } from './AreaSelector';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { BrushEditor } from './BrushEditor';
import { ImageEditor } from './ImageEditor';
import { InteractiveCanvas } from './InteractiveCanvas';
import { 
  Download, 
  Copy, 
  Maximize2, 
  Edit, 
  Image as ImageIcon,
  Loader2,
  ZoomIn,
  Check,
  X,
  Split
} from 'lucide-react';

interface GalleryPanelProps {
  isLoading: boolean;
  loadingMessage: string;
  imageCount: number;
  activeTab: string;
  generatedVideoUrl: string | null;
  generatedImages: string[];
  generatedPrompts: string | null;
  selectedImage: string | null;
  lastUsedPrompt: string;
  sourceImage: any;
  sourceImage2: any;
  isSelectingArea: boolean;
  isEditingMask: boolean;
  editTool: string;
  brushSize: number;
  setSelectedImage: (img: string | null) => void;
  setMaskImage: (img: any) => void;
  onAreaSelected: (img: any, box?: any) => void;
  setFullscreenImage: (url: string | null) => void;
  handleStartEditing: () => void;
  handleSetAsSourceImage: () => void;
  copyToClipboard: (text: string) => void;
  onGenerateFromPrompt: (p: string) => void;
  onGenerateBatch: (ps: string[]) => void;
  areaSelectorRef: any;
  lassoEditorRef: any;
  brushEditorRef: any;
  canvaObjects: any[];
  canvaObjectTransforms: any[];
  setCanvaObjectTransforms: (ts: any[]) => void;
  selectedCanvaObjectIndex: number | null;
  setSelectedCanvaObjectIndex: (i: number | null) => void;
  isCanvaLayoutLocked: boolean;
  editSubMode: string;
  editBox: any;
  setEditBox: (box: any) => void;
  isConfirmingAreaPrompt: boolean;
  areaPrompt: string;
  setAreaPrompt: (p: string) => void;
  pendingAreaImage: any;
  handleConfirmAreaPrompt: () => void;
  handleCancelAreaPrompt: () => void;
}

export const GalleryPanel = (props: GalleryPanelProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isComparing, setIsComparing] = useState(false);

  return (
    <div className="lg:col-span-8 space-y-6">
      <div className={`${theme.cardBg} rounded-3xl border ${theme.border} p-6 shadow-sm min-h-[600px] flex flex-col`}>
        {/* Main Display Area */}
        <div className="relative flex-1 rounded-2xl bg-stone-100 dark:bg-stone-950 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            {props.isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <Loader2 className="w-12 h-12 text-orange-600 animate-spin" />
                <p className="text-sm font-medium text-stone-500">{props.loadingMessage || t('processing')}</p>
              </motion.div>
            ) : (props.selectedImage || props.sourceImage) ? (
              <motion.div 
                key="image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full h-full group"
              >
                {isComparing && props.sourceImage && props.selectedImage ? (
                  <BeforeAfterSlider 
                    before={props.sourceImage.dataUrl} 
                    after={props.selectedImage} 
                  />
                ) : (
                  <img src={props.selectedImage || props.sourceImage?.dataUrl} className="w-full h-full object-contain" />
                )}
                
                {!isComparing && props.isSelectingArea && props.sourceImage && (
                  <AreaSelector 
                    ref={props.areaSelectorRef}
                    sourceImage={props.sourceImage}
                    onAreaSelected={props.onAreaSelected}
                  />
                )}

                {!isComparing && props.isEditingMask && props.sourceImage && (
                  <div className="absolute inset-0 z-10">
                    {props.editSubMode === 'canva' ? (
                      <InteractiveCanvas 
                        bgImage={props.sourceImage}
                        canvaObjects={props.canvaObjects}
                        canvaObjectTransforms={props.canvaObjectTransforms}
                        setCanvaObjectTransforms={props.setCanvaObjectTransforms}
                        selectedCanvaObjectIndex={props.selectedCanvaObjectIndex}
                        setSelectedCanvaObjectIndex={props.setSelectedCanvaObjectIndex}
                        isCanvaLayoutLocked={props.isCanvaLayoutLocked}
                      />
                    ) : props.editTool === 'brush' ? (
                      <BrushEditor 
                        ref={props.brushEditorRef}
                        sourceImage={props.sourceImage}
                        onMaskReady={props.setMaskImage}
                        brushSize={props.brushSize}
                        clipBox={props.editBox}
                      />
                    ) : (
                      <ImageEditor 
                        ref={props.lassoEditorRef}
                        sourceImage={props.sourceImage}
                        onMaskReady={props.setMaskImage}
                        strokeWidth={2}
                        clipBox={props.editBox}
                      />
                    )}
                  </div>
                )}

                {/* Image Actions Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-black/50 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => props.setFullscreenImage(props.selectedImage)}
                    className="p-2.5 text-white hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  {props.sourceImage && (
                    <button 
                      onClick={() => setIsComparing(!isComparing)}
                      className={`px-3 py-2 rounded-xl transition-all flex items-center gap-2 ${isComparing ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' : 'text-white hover:bg-white/20'}`}
                      title={t('compareWithOriginal')}
                    >
                      <Split className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{t('compare')}</span>
                    </button>
                  )}
                  <button 
                    onClick={props.handleStartEditing}
                    className="p-2.5 text-white hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={props.handleSetAsSourceImage}
                    className="p-2.5 text-white hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <div className="w-px h-6 bg-white/20 mx-1" />
                  <a 
                    href={props.selectedImage} 
                    download="ai-architect.png"
                    className="p-2.5 text-white hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center text-stone-400">
                <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-sm font-medium">{t('creationsAppearHere')}</p>
              </div>
            )}
          </AnimatePresence>

          {/* Area Confirmation Overlay */}
          {props.isConfirmingAreaPrompt && props.pendingAreaImage && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
              <div className={`${theme.cardBg} max-w-md w-full rounded-3xl p-6 shadow-2xl`}>
                <h3 className="text-lg font-bold mb-4">{t('confirmSelection')}</h3>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <img src={props.pendingAreaImage.dataUrl} className="w-full h-full object-cover" />
                </div>
                <textarea 
                  value={props.areaPrompt}
                  onChange={(e) => props.setAreaPrompt(e.target.value)}
                  className={`w-full p-3 rounded-xl border ${theme.border} ${theme.cardBg} text-sm mb-4 outline-none focus:ring-2 focus:ring-orange-500`}
                />
                <div className="flex gap-3">
                  <button 
                    onClick={props.handleCancelAreaPrompt}
                    className="flex-1 py-3 rounded-xl border border-stone-200 font-bold text-sm"
                  >
                    {t('cancel')}
                  </button>
                  <button 
                    onClick={props.handleConfirmAreaPrompt}
                    className="flex-1 py-3 bg-orange-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-orange-600/20"
                  >
                    {t('generateDetails')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails Strip */}
        {props.generatedImages.length > 0 && (
          <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {props.generatedImages.map((img, i) => (
              <button
                key={i}
                onClick={() => props.setSelectedImage(img)}
                className={`
                  relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all
                  ${props.selectedImage === img ? 'border-orange-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}
                `}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
