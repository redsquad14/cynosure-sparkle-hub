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
          <div className="flex justify-center mb-4 md:mb-6 lg:mb-8 mt-2 md:mt-4 px-4">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <img 
                src={fixedImage.image} 
                alt={fixedImage.alt} 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;