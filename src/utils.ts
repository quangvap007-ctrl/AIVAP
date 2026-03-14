import { SourceImage, BoundingBox } from './types';

export const sourceImageToDataUrl = (image: SourceImage): string => image.dataUrl;

export const dataUrlToSourceImageSync = (dataUrl: string): SourceImage | null => {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return null;
  return {
    dataUrl,
    mimeType: match[1],
    base64: match[2],
    width: 0,
    height: 0,
  };
};

export const dataUrlToSourceImage = (dataUrl: string): Promise<SourceImage | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (!match) {
        resolve(null);
        return;
      }
      resolve({
        dataUrl,
        mimeType: match[1],
        base64: match[2],
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};

export const cropImage = async (image: SourceImage, box: BoundingBox): Promise<SourceImage> => {
  const canvas = document.createElement('canvas');
  canvas.width = box.width;
  canvas.height = box.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  const img = new Image();
  await new Promise((resolve) => {
    img.onload = resolve;
    img.src = image.dataUrl;
  });

  ctx.drawImage(img, box.x, box.y, box.width, box.height, 0, 0, box.width, box.height);
  const dataUrl = canvas.toDataURL('image/png');
  return {
    dataUrl,
    mimeType: 'image/png',
    base64: dataUrl.split(',')[1],
    width: box.width,
    height: box.height,
  };
};

export const compositeImage = async (
  base: SourceImage,
  overlay: SourceImage,
  box: BoundingBox,
  mask?: SourceImage,
  options: { expansion?: number; edgeBlend?: number } = {}
): Promise<SourceImage> => {
  const canvas = document.createElement('canvas');
  canvas.width = base.width;
  canvas.height = base.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  const baseImg = new Image();
  await new Promise((resolve) => {
    baseImg.onload = resolve;
    baseImg.src = base.dataUrl;
  });
  ctx.drawImage(baseImg, 0, 0);

  const overlayImg = new Image();
  await new Promise((resolve) => {
    overlayImg.onload = resolve;
    overlayImg.src = overlay.dataUrl;
  });

  // Simple composite for now
  ctx.drawImage(overlayImg, box.x, box.y, box.width, box.height);

  return {
    dataUrl: canvas.toDataURL('image/png'),
    mimeType: 'image/png',
    base64: canvas.toDataURL('image/png').split(',')[1],
    width: base.width,
    height: base.height,
  };
};

export const padImageToAspectRatioWithColor = async (
  image: SourceImage,
  targetRatio: number,
  color: string = '#000000'
): Promise<SourceImage> => {
  const img = new Image();
  await new Promise((resolve) => {
    img.onload = resolve;
    img.src = image.dataUrl;
  });

  const currentRatio = img.width / img.height;
  let targetWidth = img.width;
  let targetHeight = img.height;

  if (currentRatio > targetRatio) {
    targetHeight = img.width / targetRatio;
  } else {
    targetWidth = img.height * targetRatio;
  }

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, targetWidth, targetHeight);

  const x = (targetWidth - img.width) / 2;
  const y = (targetHeight - img.height) / 2;
  ctx.drawImage(img, x, y);

  const dataUrl = canvas.toDataURL('image/png');
  return {
    dataUrl,
    mimeType: 'image/png',
    base64: dataUrl.split(',')[1],
    width: targetWidth,
    height: targetHeight,
  };
};
