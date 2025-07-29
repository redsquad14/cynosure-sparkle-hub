import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Camera, Users } from 'lucide-react';
const Gallery = () => {
  // Video gallery items
  const galleryItems = [
    { type: 'video', src: '/vid%201.mp4' },
    { type: 'video', src: '/vid%202.mp4' },
    { type: 'video', src: '/vid%203.mp4' },
    { type: 'video', src: '/vid%204.mp4' },
    { type: 'video', src: '/vid%205.mp4' },
    { type: 'video', src: '/vid%206.mp4' },
    { type: 'video', src: '/vid%207.mp4' },
    { type: 'video', src: '/vid%208.mp4' },
    { type: 'video', src: '/vid%209.mp4' },
    { type: 'video', src: '/vid%2010.mp4' },
    { type: 'video', src: '/vid%2011.mp4' },
    { type: 'video', src: '/vid%2012.mp4' },
  ];
  return <section id="gallery" className="py-20 px-4 relative">
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
          {galleryItems.map((item, index) => (
            <Card key={index} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative group">
                  <video 
                    controls 
                    className="w-full h-64 object-cover rounded-lg"
                    poster=""
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        

        {/* What to Expect */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-transparent border-primary/30 text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-gradient mb-2">Team Photos</h3>
              <p className="text-sm text-muted-foreground">Group shots that capture the spirit of unity</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-accent/10 to-transparent border-accent/30 text-center">
            <CardContent className="p-6">
              <Play className="w-8 h-8 text-accent mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-gradient mb-2">Performance Videos</h3>
              <p className="text-sm text-muted-foreground">Highlights of amazing performances</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30 text-center">
            <CardContent className="p-6">
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-gradient mb-2">Candid Moments</h3>
              <p className="text-sm text-muted-foreground">Spontaneous joy and laughter</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-primary/10 to-transparent border-primary/30 text-center">
            <CardContent className="p-6">
              <Camera className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-gradient mb-2">Behind Scenes</h3>
              <p className="text-sm text-muted-foreground">The magic that happens backstage</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Create Your Own Memories! 📸</h3>
          <p className="text-lg text-muted-foreground mb-6">Join CYNOSURE 2025 and become part of our family!</p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950">🌟 REGISTER NOW!</Button>
        </div>
      </div>
    </section>;
};
export default Gallery;