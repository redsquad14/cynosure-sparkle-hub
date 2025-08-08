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
      // First slide with current logo and text
      image: "/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png",
      hasText: true,
      title: "St. Gregorios High School",
      subtitle: "Presents"
    },
    {
      // Second slide - placeholder for new image, no text
      image: "/lovable-uploads/placeholder-slide2.png", // User will replace this
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
                    alt={slide.hasText ? "St. Gregorios High School Logo" : "Slideshow Image"} 
                    className="w-48 h-48 md:w-56 md:h-56 object-contain transition-transform duration-300 hover:scale-105" 
                  />
                </div>
              </div>
              
              {/* Text - Only for first slide */}
              {slide.hasText && (
                <div className="text-center space-y-4 md:space-y-6">
                  <h1 className="font-times text-3xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight md:text-6xl">
                    {slide.title}
                  </h1>
                  <h2 className="font-times text-lg sm:text-xl font-semibold text-accent lg:text-6xl text-center md:text-5xl">
                    {slide.subtitle}
                  </h2>
                </div>
              )}
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