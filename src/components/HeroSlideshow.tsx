import React, { useState, useEffect } from 'react';
const HeroSlideshow = () => {
  const slides = [{
    image: "/lovable-uploads/d30f1652-95af-4d94-b8de-2942477b7fbf.png",
    alt: "CYNOSURE 2025 Logo"
  }, {
    image: "/lovable-uploads/0d58e97a-ffd9-417e-a2ce-78dc27f28ab5.png",
    alt: "St. Gregorios High School Presents"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return <section className="relative bg-background py-8 border-b border-primary/20 px-0 mx-0 my-0 md:py-[129px] overflow-hidden">
      <div className="relative w-full h-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Image - Centered */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="flex-shrink-0">
              <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} className={`object-contain transition-transform duration-300 hover:scale-105 ${currentSlide === 1 ? 'w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem]' : 'w-80 h-80 md:w-96 md:h-96'}`} />
            </div>
          </div>
          
          {/* Slide indicators */}
          
        </div>
      </div>
    </section>;
};
export default HeroSlideshow;