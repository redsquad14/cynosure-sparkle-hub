import React, { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const slides = [
    {
      image: "/lovable-uploads/d30f1652-95af-4d94-b8de-2942477b7fbf.png",
      alt: "CYNOSURE 2025 Logo"
    },
    {
      image: "/lovable-uploads/3c5cf7f6-74bf-44bf-93b8-e68f3e22578a.png",
      alt: "St. Gregorios High School Presents"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-background py-8 border-b border-primary/20 px-0 mx-0 my-0 md:py-[129px] overflow-hidden">
      <div className="relative w-full h-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Image - Centered */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="flex-shrink-0">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].alt} 
                className="w-80 h-80 md:w-96 md:h-96 object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;