import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Heart, Camera, Users, Maximize2, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
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
  return <section id="gallery" className="pt-4 pb-20 px-4 relative scroll-mt-20">
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

        {/* Enhanced Video Gallery Grid with Creative Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-primary/20 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-primary/30 ${
                hoveredIndex === index ? 'animate-pulse' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--muted)/0.1))',
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '1s'
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
          ))}
        </div>
        

        {/* What to Expect */}
        

        {/* Call to Action */}
        <div className="text-center relative">
          {/* 2022 Brochures Button - Bottom Left */}
          <div className="absolute bottom-0 left-0">
            
          </div>
          
          <h3 className="text-3xl font-bold text-gradient mb-4">Create Your Own Memories! 📸</h3>
          <p className="text-lg text-muted-foreground mb-6">Join CYNOSURE 2025 and become part of our family!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVkqOoCR4GWiywuN870QYaA53-2Gq8rjDFJJIpS4s9htyNOA/viewform?embedded=true" target="_blank" rel="noopener noreferrer">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950 animate-pulse" style={{ animationDuration: '0.8s' }}>🌟 REGISTER NOW!</Button>
          </a>
        </div>
      </div>
    </section>;
};
export default Gallery;