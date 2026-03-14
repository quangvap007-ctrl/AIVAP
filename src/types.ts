export type AspectRatio = '1:1' | '3:4' | '4:3' | '9:16' | '16:9' | '2:3' | '3:2' | 'auto';
export type ImageSize = '512px' | '1K' | '2K' | '4K';
export type ActiveTab = 'create' | 'interior' | 'planning' | 'edit' | 'cameraAngle' | 'planTo3d' | 'video' | 'prompt' | 'utilities' | 'library' | 'editor-beta' | 'trend';
export type EditSubMode = 'inpaint' | 'smartEdit' | 'mergeHouse' | 'mergeMaterial' | 'mergeFurniture' | 'canva';
export type TextureMapType = 'Diffuse' | 'Normal' | 'Displacement' | 'Roughness' | 'Metalness' | 'AmbientOcclusion' | 'Specular';

export interface SourceImage {
  dataUrl: string;
  base64: string;
  mimeType: string;
  width: number;
  height: number;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ObjectTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
}

export interface HistoryItem {
  id?: string;
  timestamp: number;
  tab: ActiveTab;
  sourceImage: SourceImage | null;
  sourceImage2?: SourceImage | null;
  referenceImage: SourceImage | null;
  prompt: string;
  negativePrompt?: string;
  imageCount: number;
  generatedImages: string[];
  generatedPrompts: string | null;
  videoModel?: string;
}

export interface LibraryItem {
  id: string;
  timestamp: number;
  imageData: string;
  prompt: string;
}
