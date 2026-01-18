import React from 'react';

export const GlyphorBadge = () => {
  return (
    <a 
      href="https://glyphor.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors group"
    >
      <div className="w-2 h-2 rounded-full bg-acid group-hover:animate-pulse" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
        Made with Glyphor Fuse
      </span>
    </a>
  );
};