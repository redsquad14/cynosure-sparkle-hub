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
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    alt: 'Creative Arts',
    title: 'Unleash Your Creativity',
    description: 'Art, Music, and Performance'
  }, {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    alt: 'Technology Innovation',
    title: 'Code the Future',
    description: 'Technology Competitions Await'
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
  return <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group bg-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 transform translate-x-0' : index < currentSlide ? 'opacity-0 transform -translate-x-full' : 'opacity-0 transform translate-x-full'}`}>
            {slide.type === 'image' ? <img src={slide.src} alt={slide.alt} className={`w-full h-full ${index === 0 ? 'object-contain' : 'object-cover'}`} /> : <video src={slide.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />}
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              
            </div>
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
        {slides.map((_, index) => {})}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        
      </div>
    </div>;
};
export default FullWidthSlideshow;