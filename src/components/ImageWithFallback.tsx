import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'Yangiliklar',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full min-h-[160px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center p-4 text-center ${className}`}
        role="img"
        aria-label={alt || 'Yangilik surati'}
      >
        <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-700/80 shadow-xs flex items-center justify-center text-[#0B3C5D] dark:text-sky-300 mb-2">
          <Newspaper className="w-5 h-5" />
        </div>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 max-w-[80%] line-clamp-1">
          {alt || fallbackCategory}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-slate-800">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || 'Yangilik surati'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};
