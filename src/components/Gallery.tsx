import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Camera, Users } from 'lucide-react';
const Gallery = () => {
  // Placeholder for gallery items
  const galleryItems = [{
    type: 'image',
    title: 'Dance Revolution 2023',
    description: 'Students from 12 schools came together for an epic dance battle!',
    highlight: '500+ participants'
  }, {
    type: 'video',
    title: 'Musical Moments',
    description: 'The most melodious voices of Mumbai in one magical evening.',
    highlight: '25 performances'
  }, {
    type: 'image',
    title: 'Art Exhibition',
    description: 'Creativity knows no bounds when young artists unite!',
    highlight: '100+ artworks'
  }, {
    type: 'video',
    title: 'Tech Innovations',
    description: 'Young programmers showcasing the future of technology.',
    highlight: '50 projects'
  }, {
    type: 'image',
    title: 'Team Spirit',
    description: 'Friendships formed, memories created, dreams shared.',
    highlight: '∞ Smiles'
  }, {
    type: 'image',
    title: 'Victory Moments',
    description: 'Every participant is a winner in the CYNOSURE family!',
    highlight: 'Pure Joy'
  }];
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

        {/* Coming Soon Notice */}
        <div className="text-center mb-12">
          <Card className="card-hover bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-accent animate-pulse" />
                <h3 className="text-2xl font-bold text-gradient">Memories Loading...</h3>
                <Heart className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <p className="text-lg text-muted-foreground mb-4">🌟 We're currently curating the most beautiful moments from our previous editions! Get ready for a visual treat that'll make you want to be part of CYNOSURE 2025!</p>
              <p className="text-accent font-semibold">
                ✨ Gallery will be updated soon with stunning photos and videos! ✨
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Preview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => <Card key={item.title} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group relative overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Placeholder Background */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                {item.type === 'video' ? <Play className="w-12 h-12 text-primary opacity-60 group-hover:scale-110 transition-transform" /> : <Camera className="w-12 h-12 text-primary opacity-60 group-hover:scale-110 transition-transform" />}
                <div className="absolute top-2 right-2 bg-accent/80 text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
                  {item.highlight}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gradient mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>)}
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
          <p className="text-lg text-muted-foreground mb-6">
            Join CYNOSURE 2024 and become part of our next beautiful gallery!
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-6 text-slate-950">🌟 Register Now!
        </Button>
        </div>
      </div>
    </section>;
};
export default Gallery;