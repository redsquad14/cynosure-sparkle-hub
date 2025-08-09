import React from 'react';
const HeroSlideshow = () => {
  return <section className="relative bg-background py-2 sm:py-4 md:py-6 lg:py-8 border-b border-primary/20 px-0 mx-0 my-0 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          {/* School Emblem Image */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <img 
              src="/lovable-uploads/0aacfb32-340e-4008-90e2-a2ae3adffbc9.png" 
              alt="St. Gregorios High School Emblem" 
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain max-w-[90vw] max-h-[20vh]" 
            />
          </div>
          
          {/* Responsive Text */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 mt-2 sm:mt-4">
            <div className="flex-shrink-0 w-full max-w-5xl px-2">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-times text-center leading-tight break-words">
                <span className="text-green-400 block sm:inline">St. Gregorios High School</span>
                <br className="hidden sm:block" />
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-accent block mt-1 sm:mt-0">Presents</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSlideshow;