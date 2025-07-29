import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Video {
  src: string;
  title: string;
  category: string;
  thumbnail?: string;
}

interface VideoSlideshowProps {
  videos: Video[];
  autoPlayInterval?: number;
}

const VideoSlideshow = ({ videos, autoPlayInterval = 8000 }: VideoSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, autoPlayInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, videos.length]);

  // Reset video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentIndex, isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black rounded-2xl">
      {/* Main Video Display */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              autoPlay={isPlaying}
              loop={false}
              onEnded={() => nextSlide()}
            >
              <source src={currentVideo.src} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none backdrop-blur-sm transition-all duration-300 w-14 h-14"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none backdrop-blur-sm transition-all duration-300 w-14 h-14"
          onClick={nextSlide}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Video Controls */}
        <div className="absolute bottom-6 left-6 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white border-none backdrop-blur-sm w-12 h-12"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white border-none backdrop-blur-sm w-12 h-12"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </Button>
        </div>

        {/* Video Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-6 right-6 text-right"
        >
          <h3 className="text-2xl font-playfair font-bold text-white mb-2 drop-shadow-lg">
            {currentVideo.title}
          </h3>
          <p className="text-accent font-inter font-medium tracking-wide">
            {currentVideo.category}
          </p>
        </motion.div>
      </div>

      {/* Elegant Dot Navigation */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary shadow-lg shadow-primary/50 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Preview Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-primary scale-110 shadow-lg'
                  : 'opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <video className="w-full h-full object-cover" muted>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Auto-play Indicator */}
      {isAutoPlaying && (
        <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-inter">Auto-play On</span>
        </div>
      )}
    </div>
  );
};

export default VideoSlideshow;