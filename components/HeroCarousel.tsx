
import React, { useState } from 'react';

interface Props {
  images: string[];
}

const HeroCarousel: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full relative group">
            <img 
              src={img} 
              alt={`Slide ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Overlay controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button 
          onClick={prev}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md pointer-events-auto active:scale-90 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={next}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md pointer-events-auto active:scale-90 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
