import React from 'react';

const HeroSlideshow = () => {
  return (
    <section className="relative bg-background py-4 border-b border-primary/20 px-0 mx-0 my-0 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Text instead of image - matching the gold/accent color */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4 my-0">
            <div className="flex-shrink-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent text-center leading-tight">
                St. Gregorios High School
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">Presents</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;