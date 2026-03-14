import React from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  Download, 
  Maximize, 
  Cpu, 
  Camera,
  Trash2,
  Upload,
  ArrowLeftCircle,
  ArrowRightCircle
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case 'arrow-uturn-left':
      return <ChevronLeft className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'download':
      return <Download className={className} />;
    case 'arrows-pointing-out':
      return <Maximize className={className} />;
    case 'cpu-chip':
      return <Cpu className={className} />;
    case 'camera':
      return <Camera className={className} />;
    case 'trash':
      return <Trash2 className={className} />;
    case 'upload':
      return <Upload className={className} />;
    case 'arrow-left-circle':
      return <ArrowLeftCircle className={className} />;
    case 'arrow-right-circle':
      return <ArrowRightCircle className={className} />;
    default:
      return null;
  }
};
