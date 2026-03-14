import React from 'react';
import { Icon } from './icons';

export const SocialLinks: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-700/50 mt-auto">
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Icon name="globe-alt" className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Icon name="chat-bubble-left-right" className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Icon name="video-camera" className="w-5 h-5" />
            </a>
        </div>
    );
};
