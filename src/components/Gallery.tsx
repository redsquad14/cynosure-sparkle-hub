import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Camera, Users } from 'lucide-react';
const Gallery = () => {
  // Video gallery items
  const galleryItems = [{
    type: 'video',
    src: '/vid1.mp4'
  }, {
    type: 'video',
    src: '/vid2.mp4'
  }, {
    type: 'video',
    src: '/vid3.mp4'
  }, {
    type: 'video',
    src: '/vid4.mp4'
  }, {
    type: 'video',
    src: '/vid5.mp4'
  }, {
    type: 'video',
    src: '/vid6.mp4'
  }, {
    type: 'video',
    src: '/vid7.mp4'
  }, {
    type: 'video',
    src: '/vid8.mp4'
  }, {
    type: 'video',
    src: '/vid9.mp4'
  }, {
    type: 'video',
    src: '/vid10.mp4'
  }, {
    type: 'video',
    src: '/vid11.mp4'
  }, {
    type: 'video',
    src: '/vid12.mp4'
  }];
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

        {/* Video Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => <Card key={index} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative group">
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
                  
                  {/* Custom Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-primary/80 rounded-full p-4 backdrop-blur-sm">
                      <Play className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
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
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950">🌟 REGISTER NOW!</Button>
          </a>
        </div>
      </div>
    </section>;
};
export default Gallery;