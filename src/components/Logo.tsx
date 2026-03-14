import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path 
          d="M50 5L95 50L50 95L5 50L50 5Z" 
          fill="white" 
          className="dark:fill-stone-900"
        />
        <path 
          d="M35 25H65V45H55V35H45V65H35V25Z" 
          fill="url(#logoGradient)" 
          transform="rotate(-45 50 50)"
        />
        <path 
          d="M65 75H35V55H45V65H55V35H65V75Z" 
          fill="url(#logoGradient)" 
          transform="rotate(-45 50 50)"
        />
      </svg>
    </div>
  );
};
