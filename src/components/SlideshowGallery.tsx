import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Play, Pause, Camera } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const SlideshowGallery = () => {
  // Only videos for now - user will add images later
  const galleryItems: MediaItem[] = [
    { type: 'video', src: '/vid1.mp4', alt: 'CYNOSURE Video 1' },
    { type: 'video', src: '/vid2.mp4', alt: 'CYNOSURE Video 2' },
    { type: 'video', src: '/vid3.mp4', alt: 'CYNOSURE Video 3' },
    { type: 'video', src: '/vid4.mp4', alt: 'CYNOSURE Video 4' },
    { type: 'video', src: '/vid5.mp4', alt: 'CYNOSURE Video 5' },
    { type: 'video', src: '/vid6.mp4', alt: 'CYNOSURE Video 6' },
    { type: 'video', src: '/vid7.mp4', alt: 'CYNOSURE Video 7' },
    { type: 'video', src: '/vid8.mp4', alt: 'CYNOSURE Video 8' },
    { type: 'video', src: '/vid9.mp4', alt: 'CYNOSURE Video 9' },
    { type: 'video', src: '/vid10.mp4', alt: 'CYNOSURE Video 10' },
    { type: 'video', src: '/vid11.mp4', alt: 'CYNOSURE Video 11' },
    { type: 'video', src: '/vid12.mp4', alt: 'CYNOSURE Video 12' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000); // Increased to 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, userInteracted, galleryItems.length]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
          break;
        case 'ArrowRight':
          setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
          break;
        case 'Escape':
          setIsLightboxOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, galleryItems.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextSlide = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleVideoClick = () => {
    setUserInteracted(true);
    setTimeout(() => setUserInteracted(false), 10000); // Reset after 10 seconds
  };

  const currentItem = galleryItems[currentIndex];
  const lightboxItem = galleryItems[lightboxIndex];

  return (
    <section id="gallery" className="pt-4 pb-20 px-4 relative scroll-mt-20 font-times">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 my-0 py-[12px]">Gallery</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Camera className="text-primary animate-pulse" />
            <p className="text-xl text-accent font-semibold">Moments That Sparkle Forever</p>
            <Camera className="text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            📸 Relive the magic of past CYNOSURE festivals! Every photo tells a story, 
            every video captures a dream, and every moment here is pure gold! ✨
          </p>
        </div>

        {/* Main Slideshow - Even Larger and More Cinematic */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-card via-card/95 to-muted/20 border-primary/30 shadow-2xl shadow-primary/10">
            <CardContent className="p-0">
              <div className="relative h-[85vh] group cursor-pointer" onClick={() => openLightbox(currentIndex)}>
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02] filter brightness-110"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]"
                  />
                )}
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-6 backdrop-blur-md shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Camera className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Enhanced Navigation arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Enhanced Auto-play indicator */}
                <div className="absolute bottom-6 left-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                  >
                    {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>

                {/* Enhanced Progress indicators */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
                        index === currentIndex 
                          ? 'bg-primary scale-125 shadow-primary/50' 
                          : 'bg-white/60 hover:bg-white/80 backdrop-blur-sm'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Create Your Own Memories! 📸</h3>
          <p className="text-lg text-muted-foreground mb-6">Join CYNOSURE 2025 and become part of our family!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVkqOoCR4GWiywuN870QYaA53-2Gq8rjDFJJIpS4s9htyNOA/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950 animate-pulse" style={{ animationDuration: '0.8s' }}>
              🌟 REGISTER NOW!
            </Button>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Media content */}
            <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
              {lightboxItem.type === 'image' ? (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                />
              )}
            </div>

            {/* Media counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SlideshowGallery;