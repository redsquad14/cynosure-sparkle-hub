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
    <section id="team" className="py-20 bg-card/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind CYNOSURE's success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-medium text-primary">School:</span> {member.school}</p>
                    <p><span className="font-medium text-primary">Favorite Song:</span> {member.favoriteSong}</p>
                    <p><span className="font-medium text-primary">Go-to Snack:</span> {member.snack}</p>
                    <p><span className="font-medium text-primary">Hidden Talent:</span> {member.talent}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;