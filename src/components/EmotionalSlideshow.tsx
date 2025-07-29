import { useState, useEffect } from 'react';

const EmotionalSlideshow = () => {
  const slides = [
    {
      type: 'image',
      src: '/lovable-uploads/9764bcf2-2c38-40e6-b902-7ae1cee2aa87.png',
      alt: 'CYNOSURE 2024 Memory'
    }
    // Add more slides here as user uploads more content
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide for gentle pacing

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentSlide ? 'opacity-30' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{
                filter: 'sepia(10%) saturate(80%) brightness(60%)'
              }}
            />
          ) : (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              style={{
                filter: 'sepia(10%) saturate(80%) brightness(60%)'
              }}
            />
          )}
        </div>
      ))}
      
      {/* Enhanced Star Field Background */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Twinkling stars with different animation */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              left: '-100px',
              top: `${Math.random() * 60 + 20}%`,
              width: '200px',
              animation: `shooting-star ${Math.random() * 8 + 6}s ease-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EmotionalSlideshow;