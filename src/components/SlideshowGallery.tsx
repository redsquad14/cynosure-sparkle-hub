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
  // Combined media items - videos and images
  const galleryItems: MediaItem[] = [
    // Images
    { type: 'image', src: '/lovable-uploads/07445e39-ebb7-494e-9c11-f159d34531eb.png', alt: 'CYNOSURE Gallery Image 1' },
    { type: 'image', src: '/lovable-uploads/0b490266-247f-4e90-9ea3-24f6e4952bc1.png', alt: 'CYNOSURE Gallery Image 2' },
    { type: 'image', src: '/lovable-uploads/18f2d4f6-be6c-43ce-9ae3-e8be35bc8544.png', alt: 'CYNOSURE Gallery Image 3' },
    { type: 'image', src: '/lovable-uploads/26f725f9-45bf-4897-b1fe-acf6296d096d.png', alt: 'CYNOSURE Gallery Image 4' },
    { type: 'image', src: '/lovable-uploads/2f3164f6-8cf3-4467-972d-205e303ec046.png', alt: 'CYNOSURE Gallery Image 5' },
    { type: 'image', src: '/lovable-uploads/32d389f1-0682-4410-9df8-5469354b7f56.png', alt: 'CYNOSURE Gallery Image 6' },
    // Videos
    { type: 'video', src: '/vid1.mp4', alt: 'CYNOSURE Video 1' },
    { type: 'video', src: '/vid2.mp4', alt: 'CYNOSURE Video 2' },
    { type: 'video', src: '/vid3.mp4', alt: 'CYNOSURE Video 3' },
    { type: 'video', src: '/vid4.mp4', alt: 'CYNOSURE Video 4' },
    { type: 'video', src: '/vid5.mp4', alt: 'CYNOSURE Video 5' },
    { type: 'video', src: '/vid6.mp4', alt: 'CYNOSURE Video 6' },
    // More images
    { type: 'image', src: '/lovable-uploads/51ec13ca-f7de-46bb-af72-bfda6cc35214.png', alt: 'CYNOSURE Gallery Image 7' },
    { type: 'image', src: '/lovable-uploads/627530d8-e51f-404f-a8fb-e79c0b106a8f.png', alt: 'CYNOSURE Gallery Image 8' },
    { type: 'image', src: '/lovable-uploads/81ed6ffc-8147-4db8-86a3-b64b0248f4f8.png', alt: 'CYNOSURE Gallery Image 9' },
    // More videos
    { type: 'video', src: '/vid7.mp4', alt: 'CYNOSURE Video 7' },
    { type: 'video', src: '/vid8.mp4', alt: 'CYNOSURE Video 8' },
    { type: 'video', src: '/vid9.mp4', alt: 'CYNOSURE Video 9' },
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
    }, 3000);

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
    <section id="gallery" className="pt-4 pb-20 px-4 relative scroll-mt-20">
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

        {/* Main Slideshow */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-card to-muted/10 border-primary/20">
            <CardContent className="p-0">
              <div className="relative h-[60vh] group cursor-pointer" onClick={() => openLightbox(currentIndex)}>
                {currentItem.type === 'image' ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <video
                    src={currentItem.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    onClick={handleVideoClick}
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/80 rounded-full p-4 backdrop-blur-sm">
                    <Camera className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Navigation arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Auto-play indicator */}
                <div className="absolute bottom-4 left-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-black/50 hover:bg-black/70 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                  >
                    {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                {/* Progress indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary scale-125' : 'bg-white/50'
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

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                    />
                  )}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-2">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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