import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      // First slide with St. Gregorios logo and text
      image: "/lovable-uploads/ce8b7c6d-bdb2-4d71-bccb-6e3872318cef.png",
      hasText: false
    },
    {
      // Second slide with CYNOSURE logo
      image: "/lovable-uploads/d30f1652-95af-4d94-b8de-2942477b7fbf.png",
      hasText: false
    }
  ];

  return (
    <section className="relative bg-background py-8 border-b border-primary/20 px-0 mx-0 my-0 md:py-[129px] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
              {/* Image - Centered */}
              <div className="flex justify-center mb-6 md:mb-8 mt-4">
                <div className="flex-shrink-0">
                  <img 
                    src={slide.image} 
                    alt={index === 0 ? "St. Gregorios High School Logo" : "CYNOSURE 2025 Logo"} 
                    className="w-64 h-64 md:w-80 md:h-80 object-contain transition-transform duration-300 hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;