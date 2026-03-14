import React, { useRef } from 'react';
import { SourceImage } from '../types';
import { dataUrlToSourceImage } from '../utils';

interface ImageDropzoneProps {
  onImageUpload: (image: SourceImage | null) => void;
  className?: string;
  children: React.ReactNode;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onImageUpload, className, children }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target?.result as string;
        const sourceImage = await dataUrlToSourceImage(dataUrl);
        onImageUpload(sourceImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target?.result as string;
        const sourceImage = await dataUrlToSourceImage(dataUrl);
        onImageUpload(sourceImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className={className}
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      {children}
    </div>
  );
};
