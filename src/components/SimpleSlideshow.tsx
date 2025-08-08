import { useState, useEffect } from 'react';

const SimpleSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the slideshow
  const images = [
    "/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png",
    "/lovable-uploads/91005844-b2a4-4275-972d-0c502cb74f15.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-lg mx-auto relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 md:h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slideshow image ${index + 1}`}
              className="w-full h-full object-contain bg-background/50"
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-primary/40 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleSlideshow;