import React from 'react';

const HeroSlideshow = () => {
  const fixedImage = {
    image: "/lovable-uploads/0d58e97a-ffd9-417e-a2ce-78dc27f28ab5.png",
    alt: "St. Gregorios High School Presents"
  };

  return (
    <section className="relative bg-background py-4 border-b border-primary/20 px-0 mx-0 my-0 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Fixed Image - Centered */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="flex-shrink-0">
              <img 
                src={fixedImage.image} 
                alt={fixedImage.alt} 
                className="w-[50.4rem] h-[50.4rem] md:w-[57.6rem] md:h-[57.6rem] object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;