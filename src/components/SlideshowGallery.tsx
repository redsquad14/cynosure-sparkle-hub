import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronLeft, ChevronRight, X, Play, Pause, Camera, Sparkles, Star } from 'lucide-react';
interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}
const SlideshowGallery = () => {
  // Mixed photos and videos from CYNOSURE events
  const galleryItems: MediaItem[] = [{
    type: 'image',
    src: '/lovable-uploads/b9ef8db0-f4b4-4624-ad0f-d5fdd79eda45.png',
    alt: 'CYNOSURE Team Winners'
  }, {
    type: 'video',
    src: '/vid1.mp4',
    alt: 'CYNOSURE Video 1'
  }, {
    type: 'image',
    src: '/lovable-uploads/246a69d5-d8c9-40f1-808a-41253a4026e5.png',
    alt: 'CYNOSURE Award Ceremony'
  }, {
    type: 'video',
    src: '/vid3.mp4',
    alt: 'CYNOSURE Video 3'
  }, {
    type: 'image',
    src: '/lovable-uploads/9018d806-b458-4e0c-96ce-0cd3ae56faf6.png',
    alt: 'CYNOSURE Chess Competition'
  }, {
    type: 'video',
    src: '/vid5.mp4',
    alt: 'CYNOSURE Video 5'
  }, {
    type: 'image',
    src: '/lovable-uploads/5979e1fb-c140-4bd2-8507-a4161a2372d7.png',
    alt: 'CYNOSURE Championship Celebration'
  }, {
    type: 'video',
    src: '/vid2.mp4',
    alt: 'CYNOSURE Video 2'
  }, {
    type: 'image',
    src: '/lovable-uploads/352ce547-eba9-41a2-aac0-02181af7e509.png',
    alt: 'CYNOSURE Group Photo'
  }, {
    type: 'video',
    src: '/vid7.mp4',
    alt: 'CYNOSURE Video 7'
  }, {
    type: 'image',
    src: '/lovable-uploads/0251827a-6db1-47a2-b652-8739777b6816.png',
    alt: 'CYNOSURE Event Presentation'
  }, {
    type: 'video',
    src: '/vid4.mp4',
    alt: 'CYNOSURE Video 4'
  }, {
    type: 'image',
    src: '/lovable-uploads/5ab125d3-9205-463c-922f-a6ef36700814.png',
    alt: 'CYNOSURE Audience'
  }, {
    type: 'video',
    src: '/vid8.mp4',
    alt: 'CYNOSURE Video 8'
  }, {
    type: 'video',
    src: '/vid6.mp4',
    alt: 'CYNOSURE Video 6'
  }, {
    type: 'video',
    src: '/vid11.mp4',
    alt: 'CYNOSURE Video 11'
  }, {
    type: 'video',
    src: '/vid9.mp4',
    alt: 'CYNOSURE Video 9'
  }, {
    type: 'video',
    src: '/vid12.mp4',
    alt: 'CYNOSURE Video 12'
  }, {
    type: 'video',
    src: '/vid10.mp4',
    alt: 'CYNOSURE Video 10'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % galleryItems.length);
    }, 8000); // Increased to 8 seconds for longer viewing

    return () => clearInterval(interval);
  }, [isAutoPlaying, userInteracted, galleryItems.length]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      switch (e.key) {
        case 'ArrowLeft':
          setLightboxIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
          break;
        case 'ArrowRight':
          setLightboxIndex(prev => (prev + 1) % galleryItems.length);
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
    setLightboxIndex(prev => (prev + 1) % galleryItems.length);
  };
  const prevSlide = () => {
    setLightboxIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
  const handleVideoClick = () => {
    setUserInteracted(true);
    setTimeout(() => setUserInteracted(false), 10000); // Reset after 10 seconds
  };
  const currentItem = galleryItems[currentIndex];
  const lightboxItem = galleryItems[lightboxIndex];
  return <section id="gallery" className="pt-4 pb-20 px-4 relative scroll-mt-20 font-times">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 my-0 py-[12px]">Gallery</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Camera className="text-primary animate-pulse" />
            <p className="text-xl text-accent font-semibold">Moments That Sparkle Forever</p>
            <Camera className="text-primary animate-pulse" />
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">
            📸 Relive the magic of past CYNOSURE festivals! Every photo tells a story, 
            every video captures a dream, and every moment here is pure gold! ✨
          </p>
        </div>

        {/* Main Slideshow - Even Larger and More Cinematic */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-card via-card/95 to-muted/20 border-primary/30 shadow-2xl shadow-primary/10">
            <CardContent className="p-0">
              <div className="relative h-[85vh] group cursor-pointer" onClick={() => openLightbox(currentIndex)}>
                {currentItem.type === 'video' ? <video src={currentItem.src} autoPlay muted loop preload="auto" playsInline className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02] filter brightness-110" style={{
                objectFit: 'cover'
              }} /> : <img src={currentItem.src} alt={currentItem.alt} className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]" />}
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  
                </div>

                {/* Enhanced Navigation arrows */}
                <Button variant="ghost" size="icon" className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20" onClick={e => {
                e.stopPropagation();
                setCurrentIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
              }}>
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button variant="ghost" size="icon" className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20" onClick={e => {
                e.stopPropagation();
                setCurrentIndex(prev => (prev + 1) % galleryItems.length);
              }}>
                  
                </Button>


              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Create Your Own Memories! </h3>
          <p className="mb-6 text-xl text-slate-50">Join CYNOSURE 2025 and become part of our family!</p>
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950 animate-pulse flex items-center justify-center" style={{
                animationDuration: '0.8s'
              }}>
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  REGISTER NOW!
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4 bg-background/95 backdrop-blur-md border border-primary/20 shadow-xl">
                <div className="space-y-4">
                  <DropdownMenuItem asChild className="p-0">
                    <div className="w-full">
                      <Button variant="gradient" size="lg" className="w-full text-lg px-8 py-6 text-slate-950 mb-2" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd02ZrBYPIG8Wqn6YSlxyJpvWM8zaSzbMr2yAP-rUig-MMW9Q/viewform?vc=0&c=0&w=1&flr=0', '_blank')}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        FORM 1
                      </Button>
                      <p className="text-sm text-muted-foreground px-2">
                        Primary registration form for general participants and students
                      </p>
                    </div>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild className="p-0">
                    <div className="w-full relative">
                      <Button variant="gradient" size="lg" className="w-full text-lg px-8 py-6 text-slate-950 mb-2" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdU3kb0c3vh8phsOdut22YUwtAkYgpGMLTZddLS6EizaY-VLA/viewform?usp=sf_link', '_blank')}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        IR Form
                      </Button>
                      <div className="absolute top-2 right-2 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium px-2 py-1 rounded-full border border-accent/30">
                        Coming Soon
                      </div>
                      <p className="text-sm text-muted-foreground px-2">
                        Individual Registration form for individuals and teams
                      </p>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white" onClick={closeLightbox}>
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" onClick={prevSlide}>
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" onClick={nextSlide}>
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Media content */}
            <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
              {lightboxItem.type === 'image' ? <img src={lightboxItem.src} alt={lightboxItem.alt} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" /> : <video src={lightboxItem.src} controls autoPlay className="max-w-full max-h-full rounded-lg shadow-2xl" />}
            </div>

            {/* Media counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>}
    </section>;
};
export default SlideshowGallery;