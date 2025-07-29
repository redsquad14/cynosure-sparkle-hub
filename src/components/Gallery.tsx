import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Camera, Users } from 'lucide-react';
const Gallery = () => {
  // Video gallery items
  const galleryItems = [
    { type: 'video', src: '/vid 1.mp4', title: 'Performance Video 1' },
    { type: 'video', src: '/vid 2.mp4', title: 'Performance Video 2' },
    { type: 'video', src: '/vid 3.mp4', title: 'Performance Video 3' },
    { type: 'video', src: '/vid 4.mp4', title: 'Performance Video 4' },
    { type: 'video', src: '/vid 5.mp4', title: 'Performance Video 5' },
    { type: 'video', src: '/vid 6.mp4', title: 'Performance Video 6' },
    { type: 'video', src: '/vid 7.mp4', title: 'Performance Video 7' },
    { type: 'video', src: '/vid 8.mp4', title: 'Performance Video 8' },
    { type: 'video', src: '/vid 9.mp4', title: 'Performance Video 9' },
    { type: 'video', src: '/vid 10.mp4', title: 'Performance Video 10' },
    { type: 'video', src: '/vid 11.mp4', title: 'Performance Video 11' },
    { type: 'video', src: '/vid 12.mp4', title: 'Performance Video 12' },
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
                    className="w-full h-64 object-cover rounded-t-lg"
                    poster=""
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gradient mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Play className="w-4 h-4" />
                    <span>CYNOSURE Memories</span>
                  </div>
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