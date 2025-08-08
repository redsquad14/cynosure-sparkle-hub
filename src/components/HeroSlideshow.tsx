import React from 'react';

const HeroSlideshow = () => {
  const slide = {
    // CYNOSURE logo
    image: "/lovable-uploads/d30f1652-95af-4d94-b8de-2942477b7fbf.png",
    hasText: false
  };

  return (
    <section className="relative bg-background py-8 border-b border-primary/20 px-0 mx-0 my-0 md:py-[129px] overflow-hidden">
      <div className="relative w-full h-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Image - Centered */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="flex-shrink-0">
              <img 
                src={slide.image} 
                alt="CYNOSURE 2025 Logo" 
                className="w-80 h-80 md:w-96 md:h-96 object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;