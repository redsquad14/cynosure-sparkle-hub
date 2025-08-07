import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Palette, Music, ShoppingCart, Mic, Activity, Trophy, Sparkles, Users } from 'lucide-react';
const Events = () => {
  const events = [{
    icon: BookOpen,
    title: "Literary",
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
    title: "Fine Arts",
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
    icon: Mic,
    title: "Performing Arts",
    description: "🎭 Express yourself through performance! Drama, theater, singing, and musical performances that captivate audiences!",
    category: "Performance",
    link: null // Will be updated when you provide the link
  }, {
    icon: Activity,
    title: "Sports",
    description: "⚽Football, basketball, relays, and more — show your sporting spirit and unstoppable drive to win!",
    category: "Sports",
    link: null // Will be updated when you provide the link
  }];
  return <section id="events" className="pt-20 pb-5 px-4 relative font-times">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 px-0 py-[20px] my-0">Events & Competitions</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-accent animate-pulse" />
            <p className="text-xl text-primary font-semibold">Where Talents Collide and Stars Are Born</p>
            <Sparkles className="text-accent animate-pulse" />
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">
            🌟 Prepare for an unforgettable experience filled with talent and pure excitement! Our events are designed to make you say, "Sign me up!"
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {events.map((event, index) => <Card key={event.title} className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                    <event.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    
                    <h3 className="text-xl font-bold text-gradient font-times">{event.title}</h3>
                  </div>
                </div>
                <p className="leading-relaxed text-slate-50 flex-1 mb-4">
                  {event.description}
                </p>
                <Button variant="outline" onClick={() => event.link ? window.open(event.link, '_blank') : alert('Link coming soon!')} disabled={!event.link} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
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
              <p className="mb-4 text-lg text-slate-50">
                🤝 Some competitions allow inter-school collaborations! 
                Make new friends while competing together. Because the best victories are shared ones!
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Group Dance Battles</li>
                <li>✨ Band Competitions</li>
                <li>✨ Debate Competitions</li>
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
              <p className="mb-4 text-slate-50 text-lg">
                🏆 It's not just about winning - it's about celebrating every effort! 
                Everyone goes home with memories, but winners get extra sparkle!
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🥇 Trophies & Certificates</li>
                <li>🎁 Amazing Prizes like AirPods!</li>
                <li>🌟 Recognition & Fame</li>
                <li>📸 Media Coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Brochures Section */}
        

        {/* Call to Action */}
        <div className="text-center">
          
          
          
        </div>
      </div>
    </section>;
};
export default Events;