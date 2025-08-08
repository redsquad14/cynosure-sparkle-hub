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
      {slides.map((slide, index) => {})}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => {})}
      </div>
    </div>;
};
export default TopSlideshow;