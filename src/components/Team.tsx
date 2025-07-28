import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Coffee, Palette, Users, Heart, Star } from 'lucide-react';
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
  return (
    <section id="team" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind CYNOSURE who make magic happen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <member.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {member.school}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <Music className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{member.favoriteSong}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Coffee className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{member.snack}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Star className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{member.talent}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;