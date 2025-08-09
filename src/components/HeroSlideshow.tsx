import React from 'react';
const HeroSlideshow = () => {
  return <section className="relative bg-background py-4 border-b border-primary/20 px-0 mx-0 my-0 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center py-[105px]">
          {/* School Emblem Image */}
          <div className="flex justify-center mb-4 md:mb-6">
            <img src="/lovable-uploads/0aacfb32-340e-4008-90e2-a2ae3adffbc9.png" alt="St. Gregorios High School Emblem" className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain" />
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
    </section>;
};
export default HeroSlideshow;