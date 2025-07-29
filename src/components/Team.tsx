import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Music, Coffee, Palette, Users, Heart, Star, Download, FileText, Sparkles } from 'lucide-react';
const Team = () => {
  const teamMembers = [{
    name: "Arya Sharma",
    role: "Festival Director",
    school: "St. Xavier's College",
    favoriteSong: "Bohemian Rhapsody - Queen 🎵",
    snack: "Masala Chai & Parle-G 🍪",
    talent: "Can solve a Rubik's cube blindfolded! 🧩",
    icon: Star
  }, {
    name: "Dev Patel",
    role: "Events Coordinator",
    school: "Mithibai College",
    favoriteSong: "Vande Mataram - A.R. Rahman 🎼",
    snack: "Samosas from the college canteen 🥟",
    talent: "Beatboxing champion! 🎤",
    icon: Music
  }, {
    name: "Ananya Iyer",
    role: "Creative Head",
    school: "Sophia College",
    favoriteSong: "Imagine - John Lennon ✨",
    snack: "Dark chocolate and green tea 🍫",
    talent: "Creates art from coffee stains! ☕",
    icon: Palette
  }, {
    name: "Rohan Gupta",
    role: "Tech Lead",
    school: "K.J. Somaiya",
    favoriteSong: "Daft Punk - Get Lucky 🤖",
    snack: "Energy drinks and protein bars ⚡",
    talent: "Can code in 7 programming languages! 💻",
    icon: Coffee
  }, {
    name: "Priya Krishnan",
    role: "Marketing Head",
    school: "Jai Hind College",
    favoriteSong: "Counting Stars - OneRepublic ⭐",
    snack: "Homemade ladoos 🍯",
    talent: "Remembers everyone's birthday! 🎂",
    icon: Heart
  }, {
    name: "Vikram Singh",
    role: "Logistics Manager",
    school: "H.R. College",
    favoriteSong: "We Are The Champions - Queen 👑",
    snack: "Street food adventures 🌮",
    talent: "Can organize chaos into perfection! 📋",
    icon: Users
  }];
  return <section id="brochures" className="py-20 bg-card/30 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Brochures</h2>
          <p className="text-muted-foreground text-lg">Download the CYNOSURE brochures</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 2022 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 group">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">2022 Brochures</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                    <span className="text-sm text-muted-foreground">Archive Collection</span>
                    <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ✨ Relive the magic of CYNOSURE 2022! Download our complete collection of event brochures, 
                memories, and highlights from our spectacular festival.
              </p>
              <Button 
                variant="gradient" 
                size="lg"
                className="w-full group-hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('https://drive.google.com/file/d/1h0Pyevr5EYn3T2ZmTJDkNEebAWTPGVWQ/view?usp=drive_link', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download 2022 Brochures
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
            </CardContent>
          </Card>

          {/* 2023 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 group">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">2023 Brochures</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                    <span className="text-sm text-muted-foreground">Latest Collection</span>
                    <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                🌟 Experience the grandeur of CYNOSURE 2023! Explore our latest collection of event brochures, 
                stunning moments, and unforgettable highlights.
              </p>
              <Button 
                variant="gradient" 
                size="lg"
                className="w-full group-hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('https://drive.google.com/file/d/1lT-CeYK7lU7_5Rggg9aW2eyxZ4TZShEU/view?usp=drive_link', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download 2023 Brochures
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Team;