import { useState, useEffect } from 'react';

const HeaderSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'logo-text',
      logo: '/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png',
      title: 'St. Gregorios High School',
      subtitle: 'Presents'
    },
    {
      type: 'image-only',
      image: '/lovable-uploads/b9ef8db0-f4b4-4624-ad0f-d5fdd79eda45.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'logo-text' ? (
            <div className="max-w-4xl mx-auto px-4">
              {/* Logo - Centered above heading */}
              <div className="flex justify-center mb-6 md:mb-8 mt-4">
                <div className="flex-shrink-0">
                  <img 
                    src={slide.logo} 
                    alt="St. Gregorios High School Logo" 
                    className="w-48 h-48 md:w-56 md:h-56 object-contain" 
                  />
                </div>
              </div>
              
              {/* Headings - Centered to align with Logo */}
              <div className="text-center space-y-4 md:space-y-6">
                <h1 className="font-times text-3xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight md:text-6xl">
                  {slide.title}
                </h1>
                <h2 className="font-times text-lg sm:text-xl font-semibold text-accent lg:text-6xl text-center md:text-5xl">
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <img 
                src={slide.image} 
                alt="CYNOSURE Event" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderSlideshow;