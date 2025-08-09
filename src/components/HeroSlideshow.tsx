import React from 'react';
const HeroSlideshow = () => {
  return <section className="relative bg-background py-4 border-b border-primary/20 px-0 mx-0 my-0 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 h-full flex flex-col justify-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
          {/* School Emblem Image */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <img 
              src="/lovable-uploads/0aacfb32-340e-4008-90e2-a2ae3adffbc9.png" 
              alt="St. Gregorios High School Emblem" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain max-w-full h-auto" 
            />
          </div>
          
          {/* Responsive Text Header */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-3 md:mt-4">
            <div className="w-full max-w-6xl text-center">
              <h1 className="font-bold font-times leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
                <span className="block text-green-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl break-words">
                  St. Gregorios High School
                </span>
                <br className="hidden sm:block" />
                <span className="block text-accent text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-1 sm:mt-2 break-words">
                  Presents
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSlideshow;