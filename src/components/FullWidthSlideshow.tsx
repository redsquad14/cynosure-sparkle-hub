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
  const slides: SlideContent[] = [{
    type: 'image',
    src: '/lovable-uploads/b71f7da9-3a9f-48ff-9897-c4a9db216f9b.png',
    alt: 'CYNOSURE Logo',
    title: 'Welcome to CYNOSURE 2024',
    description: 'Where Innovation Meets Creativity'
  }, {
    type: 'image',
    src: '/lovable-uploads/26f725f9-45bf-4897-b1fe-acf6296d096d.png',
    alt: 'CYNOSURE 2024 Student Event',
    title: 'CYNOSURE 2024',
    description: 'Celebrating Student Excellence'
  }, {
    type: 'image',
    src: '/lovable-uploads/c7e01668-b132-40bf-9ee5-bec38ce8024f.png',
    alt: 'St. Gregorios High School Group Photo',
    title: 'United We Shine',
    description: 'Our Amazing CYNOSURE Participants'
  }, {
    type: 'image',
    src: '/lovable-uploads/e0f053e6-f363-4dbb-8838-1fd18fc0c80d.png',
    alt: 'Award Ceremony Moment',
    title: 'Celebrating Excellence',
    description: 'Recognizing Outstanding Achievements'
  }, {
    type: 'image',
    src: '/lovable-uploads/07445e39-ebb7-494e-9c11-f159d34531eb.png',
    alt: 'CYBERDUKE Champions',
    title: 'Victory Moments',
    description: 'Champions of CYNOSURE 2024'
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);
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
  return <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group bg-black pt-16" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 transform translate-x-0' : index < currentSlide ? 'opacity-0 transform -translate-x-full' : 'opacity-0 transform translate-x-full'}`}>
            {slide.type === 'image' ? <img src={slide.src} alt={slide.alt} className={`w-full h-full ${index === 0 ? 'object-contain' : 'object-cover'}`} /> : <video src={slide.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />}
            
          </div>)}
      </div>

      {/* Navigation Arrows */}
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12" onClick={goToPrevious}>
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12" onClick={goToNext}>
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>;
};
export default FullWidthSlideshow;