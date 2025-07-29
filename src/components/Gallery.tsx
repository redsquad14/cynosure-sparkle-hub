import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Camera, Users } from 'lucide-react';
const Gallery = () => {
  // Gallery items - new uploaded images first, then existing images and videos
  const galleryItems = [
    {
      type: 'image',
      src: '/lovable-uploads/07445e39-ebb7-494e-9c11-f159d34531eb.png',
      alt: 'CYNOSURE 2024 stage performance with band'
    },
    {
      type: 'image',
      src: '/lovable-uploads/1e82be09-fbb7-43af-a3ba-a7ed614e427f.png',
      alt: 'St. Gregorios High School CYNOSURE award ceremony'
    },
    {
      type: 'image',
      src: '/lovable-uploads/2f3164f6-8cf3-4467-972d-205e303ec046.png',
      alt: 'CYNOSURE group photo with all participants'
    },
    {
      type: 'image',
      src: '/lovable-uploads/32d389f1-0682-4410-9df8-5469354b7f56.png',
      alt: 'CYNOSURE team members with event t-shirts'
    },
    {
      type: 'image',
      src: '/lovable-uploads/18f2d4f6-be6c-43ce-9ae3-e8be35bc8544.png',
      alt: 'CYNOSURE award ceremony with participants on stage'
    },
    {
      type: 'image',
      src: '/lovable-uploads/8080baa4-7fd2-40d6-98e9-35ee811c368c.png',
      alt: 'CYNOSURE team group photo'
    },
    {
      type: 'image', 
      src: '/lovable-uploads/084914d0-7df6-46f0-ab88-c9c4715e0841.png',
      alt: 'CYNOSURE team members with event t-shirts'
    },
    {
      type: 'image',
      src: '/lovable-uploads/92782be3-62c6-4201-9b8b-f806c5773cf7.png', 
      alt: 'CYNOSURE stage event with students'
    },
    {
      type: 'image',
      src: '/lovable-uploads/d0c3b3f7-9992-49d3-a652-4001df107730.png',
      alt: 'CYNOSURE stage performance with band'
    },
    {
      type: 'video',
      src: '/vid1.mp4'
    },
    {
      type: 'video',
      src: '/vid2.mp4'
    },
    {
      type: 'video',
      src: '/vid3.mp4'
    },
    {
      type: 'video',
      src: '/vid4.mp4'
    },
    {
      type: 'video',
      src: '/vid5.mp4'
    },
    {
      type: 'video',
      src: '/vid6.mp4'
    },
    {
      type: 'video',
      src: '/vid7.mp4'
    },
    {
      type: 'video',
      src: '/vid8.mp4'
    },
    {
      type: 'video',
      src: '/vid9.mp4'
    },
    {
      type: 'video',
      src: '/vid10.mp4'
    },
    {
      type: 'video',
      src: '/vid11.mp4'
    },
    {
      type: 'video',
      src: '/vid12.mp4'
    }
  ];
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => <Card key={index} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative group">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt || 'CYNOSURE gallery image'} 
                      className="w-full h-64 object-cover rounded-lg"
                      onError={e => {
                        console.error('Image loading error:', item.src, e);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <video controls preload="metadata" className="w-full h-64 object-cover rounded-lg" controlsList="nodownload" onError={e => {
                      console.error('Video loading error:', item.src, e);
                      e.currentTarget.style.display = 'none';
                    }} onLoadStart={() => console.log('Video loading started:', item.src)} onCanPlay={() => console.log('Video can play:', item.src)} onLoadedData={() => console.log('Video data loaded:', item.src)} style={{
                      backgroundColor: '#000'
                    }}>
                      <source src={item.src} type="video/mp4" />
                      <p className="p-4 text-center text-muted-foreground">
                        Your browser doesn't support video playback. 
                        <a href={item.src} download className="text-primary underline ml-1">
                          Download video
                        </a>
                      </p>
                    </video>
                  )}
                  
                  {/* Custom Play Button Overlay - only for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-primary/80 rounded-full p-4 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>)}
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