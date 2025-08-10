import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideContent {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const FullWidthSlideshow = () => {
  const slides: SlideContent[] = [
    {
      type: 'image',
      src: '/lovable-uploads/5277d382-76a1-4a24-9174-04eb4b5bd417.png',
      alt: 'CYNOSURE 2025 Logo',
      title: 'CYNOSURE 2025',
      description: 'Welcome to CYNOSURE 2025'
    },
    {
      type: 'image',
      src: '/lovable-uploads/6c6a2963-5747-4aea-8a22-c4b83fcd598a.png',
      alt: 'St. Gregorios High School CYNOSURE Team',
      title: 'CYNOSURE Community',
      description: 'St. Gregorios High School presents CYNOSURE - Our amazing team and participants'
    },
    {
      type: 'image',
      src: '/lovable-uploads/98f06016-c362-40a1-8f95-875bc4e1e3bd.png',
      alt: 'CYNOSURE 2024 Floor Art',
      title: 'CYNOSURE 2024',
      description: 'Beautiful floor art showcasing CYNOSURE 2024'
    },
    {
      type: 'image',
      src: '/lovable-uploads/21d555ba-ddd1-4d42-9241-56e6d4ebd87e.png',
      alt: 'CYNOSURE Championship Trophies',
      title: 'Victory & Achievement',
      description: 'CYNOSURE championship trophies and awards showcase'
    },
    {
      type: 'image',
      src: '/lovable-uploads/47676aaf-4c3d-4b9a-86c6-8707cd756b21.png',
      alt: 'CYNOSURE Event Gathering',
      title: 'Community & Excellence',
      description: 'Students and faculty gathered for CYNOSURE event'
    },
    {
      type: 'image',
      src: '/lovable-uploads/bb9a3f45-9176-4ff8-8acb-b47e5ba3f84d.png',
      alt: 'CYNOSURE Lamp Lighting Ceremony',
      title: 'Tradition & Beginning',
      description: 'Students participating in the ceremonial lamp lighting'
    },
    {
      type: 'image',
      src: '/lovable-uploads/247edd78-d089-4ebd-8fff-b233e7a1dfb8.png',
      alt: 'CYNOSURE Event Collage',
      title: 'CYNOSURE Highlights',
      description: 'A collection of memorable moments from CYNOSURE events including performances, competitions and celebrations'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides with different timing for first slide
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    
    const timeout = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, currentSlide === 0 ? 3000 : 2000); // First slide: 3s, others: 2s
    
    return () => clearTimeout(timeout);
  }, [slides.length, isAutoPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden group bg-black mt-12 sm:mt-14 md:mt-16 z-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 transform translate-x-0' : index < currentSlide ? 'opacity-0 transform -translate-x-full' : 'opacity-0 transform translate-x-full'}`}>
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className={`w-full h-full ${index === 4 || index === 5 || index === 6 ? 'object-contain max-h-full' : index === 0 || index === 1 || index === 2 || index === 3 ? 'object-contain' : 'object-cover'}`} />
            ) : (
              <video src={slide.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button variant="ghost" size="icon" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" onClick={goToPrevious}>
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </Button>

      <Button variant="ghost" size="icon" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" onClick={goToNext}>
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </Button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        
      </div>
    </div>
  );
};

export default FullWidthSlideshow;