import React, { useState, useEffect } from 'react';

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

const TopSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      src: "/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png",
      alt: "St. Gregorios High School Logo",
      caption: "St. Gregorios High School Presents"
    },
    {
      src: "/lovable-uploads/91005844-b2a4-4275-972d-0c502cb74f15.png",
      alt: "CYNOSURE Logo"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-background border-b border-primary/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Image slideshow"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[600ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={slide.src}
              alt={slide.alt}
              className="max-w-full max-h-full object-contain"
            />
            {slide.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
                <p 
                  className="text-white text-lg md:text-xl font-semibold p-4 text-center"
                  role="img"
                  aria-label={slide.caption}
                >
                  {slide.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-primary/40 hover:bg-primary/60'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSlideshow;