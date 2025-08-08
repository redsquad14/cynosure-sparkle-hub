import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EditableText } from '@/components/ui/editable-text';
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
            <p className="text-xl text-primary font-semibold">Where Potential Meets Opportunity and Greatness Emerges</p>
            <Sparkles className="text-accent animate-pulse" />
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">
            🏆where creativity meets competition and every student gets a chance to steal the spotlight and leave their mark!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch px-[10px]">
          {/* Literary Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Literary</h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-50 flex-1 mb-4">📚 Unleash the power of words! Poetry recitations, storytelling competitions, creative writing and literary debates that inspire!</p>
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1bC_wsa3UufO_LtRDwIe2NBDfPIOTqKm-/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>

          {/* Cynoshow Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0.1s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Cynoshow</h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-50 flex-1 mb-4">
                🏆Where creativity meets competition and every student gets a chance to steal the spotlight and leave their mark!
              </p>
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1P2eoUvkAh1zyRJlnRXA-NqLBRV4UCthl/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>

          {/* Fine Arts Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0.2s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Fine Arts</h3>
                </div>
              </div>
              <EditableText 
                initialText="🎨An interactive fine arts event where participants engage in hands-on creative activities exploring fashion, design, and art."
                className="leading-relaxed text-slate-50 flex-1 mb-4"
              />
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1pW7xzPkGgmV-SB0zcW5Mtr8NJSxpTYfJ/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>

          {/* Commerce Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0.3s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Commerce</h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-50 flex-1 mb-4">
                💼Step into the world of business mastery with thrilling entrepreneurship challenges, dynamic marketing battles, and groundbreaking business plan competitions!
              </p>
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1CD6i1IyHCV_EYOigrRfl8x7yqtxzWCvs/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>

          {/* Performing Arts Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0.4s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Performing Arts</h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-50 flex-1 mb-4">
                💃 Move to the rhythm! Classical, contemporary, hip-hop, or freestyle - show us your moves
              </p>
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1B1i99Z1YtzheQBzcyjUbrSTCcvP160QG/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>

          {/* Sports Event */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group h-full flex flex-col" style={{
          animationDelay: '0.5s'
        }}>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-times">Sports</h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-50 flex-1 mb-4">
                ⚽Football, basketball, relays, and more — show your sporting spirit and unstoppable drive to win!
              </p>
              <Button variant="outline" onClick={() => window.open('https://drive.google.com/file/d/1vtXJitVC6L5TroVKosUHNpFfpT3uNvrj/view?usp=drive_link', '_blank')} className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary text-center text-lg">
                Learn More ✨
              </Button>
            </CardContent>
          </Card>
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