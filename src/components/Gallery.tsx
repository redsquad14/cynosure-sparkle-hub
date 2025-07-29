import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Heart, Camera, Users, Maximize2, Star, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import VideoSlideshow from './VideoSlideshow';
const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());

  // Enhanced video gallery items with metadata
  const galleryItems = [{
    type: 'video',
    src: '/vid1.mp4',
    title: 'Dance Performance',
    category: 'Cultural',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid2.mp4',
    title: 'Tech Competition',
    category: 'Technical',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid3.mp4',
    title: 'Music Concert',
    category: 'Cultural',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid4.mp4',
    title: 'Drama Show',
    category: 'Literary',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid5.mp4',
    title: 'Sports Event',
    category: 'Sports',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid6.mp4',
    title: 'Art Exhibition',
    category: 'Fine Arts',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid7.mp4',
    title: 'Coding Marathon',
    category: 'Technical',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid8.mp4',
    title: 'Fashion Show',
    category: 'Cultural',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid9.mp4',
    title: 'Debate Competition',
    category: 'Literary',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid10.mp4',
    title: 'Band Performance',
    category: 'Cultural',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid11.mp4',
    title: 'Innovation Fair',
    category: 'Technical',
    year: '2024'
  }, {
    type: 'video',
    src: '/vid12.mp4',
    title: 'Grand Finale',
    category: 'All Events',
    year: '2024'
  }];

  const toggleLike = (index: number) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  return (
    <section id="gallery" className="pt-4 pb-20 px-4 relative scroll-mt-20 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header with Modern Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-playfair font-bold text-gradient mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Gallery
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Camera className="text-primary animate-pulse w-6 h-6" />
            <p className="text-2xl font-inter font-medium text-accent tracking-wide">
              Moments That Sparkle Forever
            </p>
            <Camera className="text-primary animate-pulse w-6 h-6" />
          </motion.div>
          
          <motion.p 
            className="text-lg font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            📸 Relive the magic of past CYNOSURE festivals! Every photo tells a story, 
            every video captures a dream, and every moment here is pure gold! ✨
          </motion.p>
        </motion.div>

        {/* Full-Width Video Slideshow */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-playfair font-semibold text-center text-gradient mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Moments
          </motion.h3>
          <VideoSlideshow videos={galleryItems} autoPlayInterval={10000} />
        </motion.div>

        {/* Enhanced Video Gallery Grid with Creative Animations */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-playfair font-semibold text-center text-gradient mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Collection
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card 
                className={`group relative overflow-hidden border-primary/20 transition-all duration-700 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-primary/40 bg-gradient-to-br from-card via-card to-muted/20 ${
                  hoveredIndex === index ? 'animate-pulse' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none z-10">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                )}

              {/* Category Badge */}
              <div className="absolute top-2 left-2 z-20">
                <Badge 
                  variant="secondary" 
                  className="bg-primary/90 text-primary-foreground text-xs animate-fade-in"
                >
                  {item.category}
                </Badge>
              </div>

              {/* Like Button */}
              <div className="absolute top-2 right-2 z-20">
                <Button
                  size="sm"
                  variant="ghost"
                  className={`w-8 h-8 p-0 rounded-full ${
                    likedVideos.has(index) 
                      ? 'text-red-500 animate-bounce' 
                      : 'text-white/70 hover:text-red-500'
                  } transition-all duration-300`}
                  onClick={() => toggleLike(index)}
                >
                  <Heart 
                    className={`w-4 h-4 ${likedVideos.has(index) ? 'fill-current' : ''}`}
                  />
                </Button>
              </div>

              <CardContent className="p-0">
                <div className="relative">
                  {/* Video with enhanced styling */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer group/video">
                        <video 
                          preload="metadata" 
                          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110" 
                          controlsList="nodownload"
                          onError={(e) => {
                            console.error('Video loading error:', item.src, e);
                            e.currentTarget.style.display = 'none';
                          }}
                          style={{ backgroundColor: '#000' }}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        
                        {/* Enhanced Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/video:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-primary/90 rounded-full p-6 backdrop-blur-sm transform scale-75 group-hover/video:scale-100 transition-transform duration-300 shadow-lg">
                            <Play className="w-10 h-10 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Magical sparkle effects */}
                        <div className="absolute inset-0 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500">
                          {[...Array(6)].map((_, i) => (
                            <Sparkles
                              key={i}
                              className="absolute text-accent animate-ping"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${20 + (i % 2) * 60}%`,
                                animationDelay: `${i * 300}ms`,
                                animationDuration: '2s'
                              }}
                              size={12}
                            />
                          ))}
                        </div>

                        {/* Fullscreen Icon */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 rounded p-1">
                            <Maximize2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    {/* Full-screen Video Popup */}
                    <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0 bg-black border-primary/50">
                      <div className="relative w-full h-full">
                        <video 
                          controls 
                          autoPlay
                          className="w-full h-full object-contain"
                          controlsList="nodownload"
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        
                        {/* Video Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className="border-primary text-primary">
                              {item.category}
                            </Badge>
                            <span className="text-white/70">{item.year}</span>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Video Info Section */}
                  <div className="p-4 bg-gradient-to-r from-card to-muted/20">
                    <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-semibold">
                          {likedVideos.has(index) ? 'Liked!' : 'Click ♥'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </Card>
            </motion.div>
          ))}
          </div>
        </motion.div>
        

        {/* What to Expect */}
        

        {/* Enhanced Call to Action with Modern Design */}
        <motion.div 
          className="text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Create Your Own Memories! 📸
          </motion.h3>
          
          <motion.p 
            className="text-xl font-inter text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join CYNOSURE 2025 and become part of our creative family!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVkqOoCR4GWiywuN870QYaA53-2Gq8rjDFJJIpS4s9htyNOA/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="default" 
                size="lg" 
                className="text-xl font-semibold px-12 py-8 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground shadow-2xl shadow-primary/50 transition-all duration-500 rounded-2xl border-2 border-primary/50 hover:border-accent/50"
              >
                🌟 REGISTER NOW! ✨
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Gallery;