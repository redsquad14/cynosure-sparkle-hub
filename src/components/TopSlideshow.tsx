import React, { useState, useEffect } from 'react';
interface Slide {
  src: string;
  alt: string;
  caption?: string;
}
const TopSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides: Slide[] = [{
    src: "/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png",
    alt: "St. Gregorios High School Logo",
    caption: "St. Gregorios High School Presents"
  }, {
    src: "/lovable-uploads/91005844-b2a4-4275-972d-0c502cb74f15.png",
    alt: "CYNOSURE Logo"
  }];
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  return <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-background border-b border-primary/20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="region" aria-label="Image slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-600 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-contain bg-background"
          />
          {slide.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <p className="text-center font-medium">{slide.caption}</p>
            </div>
          )}
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>;
};
export default TopSlideshow;