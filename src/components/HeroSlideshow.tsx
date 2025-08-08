import React from 'react';

const HeroSlideshow = () => {
  return (
    <section className="relative bg-background py-4 border-b border-primary/20 px-0 mx-0 my-0 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* School Emblem Image */}
          <div className="flex justify-center mb-4 md:mb-6">
            <img 
              src="/lovable-uploads/bf1d496b-e968-4330-8bbf-1a5ce34cccdc.png" 
              alt="St. Gregorios High School Emblem" 
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          
          {/* Text instead of image - Times New Roman font with greenish color for school name */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4 my-0">
            <div className="flex-shrink-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-times text-center leading-tight">
                <span className="text-green-400">St. Gregorios High School</span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl text-accent">Presents</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;