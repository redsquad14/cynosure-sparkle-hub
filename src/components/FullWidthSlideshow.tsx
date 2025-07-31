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
      src: '/lovable-uploads/c5cb4526-c92f-42d1-9510-4e9110178647.png',
      alt: 'CYNOSURE 2024 Rangoli Art',
      title: 'CYNOSURE 2024',
      description: 'Beautiful rangoli art celebrating CYNOSURE 2024'
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
      src: '/lovable-uploads/f2fc02fd-6407-422d-83fb-6323b1a7205c.png',
      alt: 'CYNOSURE Foundation Stone Ceremony',
      title: 'Foundation Ceremony',
      description: 'Special foundation stone ceremony at St. Gregorios High School'
    },
    {
      type: 'image',
      src: '/lovable-uploads/54c7f825-d9b8-4844-a1cd-e6b83fed8ea0.png',
      alt: 'CYNOSURE Lamp Lighting Ceremony',
      title: 'Traditional Ceremony',
      description: 'Students participating in the traditional lamp lighting ceremony'
    },
    {
      type: 'image',
      src: '/lovable-uploads/80f2adc1-62a1-4ec0-a814-f8afea5d94a6.png',
      alt: 'CYNOSURE Inauguration Ceremony',
      title: 'Grand Inauguration',
      description: 'Official inauguration ceremony with traditional lamp lighting at CYNOSURE'
    },
    {
      type: 'image',
      src: '/lovable-uploads/61dc2ffe-05bb-4e08-a663-805c44914b82.png',
      alt: 'CYNOSURE Event Highlights',
      title: 'Event Moments',
      description: 'Memorable moments from CYNOSURE events including performances and competitions'
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
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group bg-black mt-16 z-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 transform translate-x-0' : index < currentSlide ? 'opacity-0 transform -translate-x-full' : 'opacity-0 transform translate-x-full'}`}>
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className={`w-full h-full ${index === 0 || index === 2 || index === 4 || index === 6 ? 'object-contain' : 'object-cover'}`} />
            ) : (
              <video src={slide.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12" onClick={goToPrevious}>
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12" onClick={goToNext}>
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        
      </div>
    </div>
  );
};

export default FullWidthSlideshow;