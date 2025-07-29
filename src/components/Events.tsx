import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Palette, Music, ShoppingCart, Gamepad2, Trophy, Sparkles, Users } from 'lucide-react';
const Events = () => {
  const events = [{
    icon: BookOpen,
    title: "Literary Events",
    description: "📚 Unleash the power of words! Poetry recitations, storytelling competitions, creative writing, and literary debates that inspire!",
    category: "Music",
    link: "https://drive.google.com/file/d/1z66w6wAwbEeWexAXnAwIRvGh6u_drvN8/view?usp=sharing"
  }, {
    icon: Palette,
    title: "Cynoshow",
    description: "🎨 Unleash your creativity! From traditional painting to digital art - express your soul on canvas!",
    category: "Creative",
    link: "https://drive.google.com/file/d/12vqRc9_gj3M36pZ_uB3GuRUwa8O69-PH/view?usp=sharing"
  }, {
    icon: Music,
    title: "Fine arts",
    description: "💃 Move to the rhythm! Classical, contemporary, hip-hop, or freestyle - show us your moves!",
    category: "Performance",
    link: "https://drive.google.com/file/d/1FFouJFCH7j07i8NA50tMnOctiZbBVO2B/view?usp=sharing"
  }, {
    icon: ShoppingCart,
    title: "Commerce",
    description: "💼 Master the art of business! Entrepreneurship challenges, marketing competitions, and innovative business plan contests!",
    category: "Business",
    link: null // Will be updated when you provide the link
  }, {
    icon: Gamepad2,
    title: "Tech Warriors",
    description: "💻 Code, create, innovate! Programming challenges, app development, and tech innovation contests!",
    category: "Technology",
    link: null // Will be updated when you provide the link
  }, {
    icon: Trophy,
    title: "Quiz Galaxy",
    description: "🧠 Test your knowledge! From pop culture to science - prove you're the ultimate quiz champion!",
    category: "Academic",
    link: null // Will be updated when you provide the link
  }];
  return <section id="events" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Events & Competitions</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-accent animate-pulse" />
            <p className="text-xl text-primary font-semibold">Where Talents Collide and Stars Are Born</p>
            <Sparkles className="text-accent animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            🌟 Get ready for an explosion of creativity, talent, and pure fun! 
            Our events are designed to make you say "I WANT TO BE PART OF THAT!" 
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => <Card key={event.title} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                    <event.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-gradient">{event.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary"
                  onClick={() => event.link ? window.open(event.link, '_blank') : alert('Link coming soon!')}
                  disabled={!event.link}
                >
                  Learn More ✨
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-accent animate-pulse" />
                <h3 className="text-2xl font-bold text-gradient">Team Events</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                🤝 Some competitions allow inter-school collaborations! 
                Make new friends while competing together. Because the best victories are shared ones!
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Group Dance Battles</li>
                <li>✨ Band Competitions</li>
                <li>✨ Tech Hackathons</li>
                <li>✨ Drama Productions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-gradient">Amazing Rewards</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                🏆 It's not just about winning - it's about celebrating every effort! 
                Everyone goes home with memories, but winners get extra sparkle!
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🥇 Trophies & Certificates</li>
                <li>🎁 Amazing Prizes</li>
                <li>🌟 Recognition & Fame</li>
                <li>📸 Media Coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Ready to Shine? ✨</h3>
          
          
        </div>
      </div>
    </section>;
};
export default Events;