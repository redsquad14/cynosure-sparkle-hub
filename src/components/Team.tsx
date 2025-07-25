import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Coffee, Palette, Users, Heart, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Arya Sharma",
      role: "Festival Director",
      school: "St. Xavier's College",
      favoriteSong: "Bohemian Rhapsody - Queen 🎵",
      snack: "Masala Chai & Parle-G 🍪",
      talent: "Can solve a Rubik's cube blindfolded! 🧩",
      icon: Star
    },
    {
      name: "Dev Patel",
      role: "Events Coordinator",
      school: "Mithibai College",
      favoriteSong: "Vande Mataram - A.R. Rahman 🎼",
      snack: "Samosas from the college canteen 🥟",
      talent: "Beatboxing champion! 🎤",
      icon: Music
    },
    {
      name: "Ananya Iyer",
      role: "Creative Head",
      school: "Sophia College",
      favoriteSong: "Imagine - John Lennon ✨",
      snack: "Dark chocolate and green tea 🍫",
      talent: "Creates art from coffee stains! ☕",
      icon: Palette
    },
    {
      name: "Rohan Gupta",
      role: "Tech Lead",
      school: "K.J. Somaiya",
      favoriteSong: "Daft Punk - Get Lucky 🤖",
      snack: "Energy drinks and protein bars ⚡",
      talent: "Can code in 7 programming languages! 💻",
      icon: Coffee
    },
    {
      name: "Priya Krishnan",
      role: "Marketing Head",
      school: "Jai Hind College",
      favoriteSong: "Counting Stars - OneRepublic ⭐",
      snack: "Homemade ladoos 🍯",
      talent: "Remembers everyone's birthday! 🎂",
      icon: Heart
    },
    {
      name: "Vikram Singh",
      role: "Logistics Manager",
      school: "H.R. College",
      favoriteSong: "We Are The Champions - Queen 👑",
      snack: "Street food adventures 🌮",
      talent: "Can organize chaos into perfection! 📋",
      icon: Users
    }
  ];

  return (
    <section id="team" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Meet the Team</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="text-accent animate-pulse" />
            <p className="text-xl text-primary font-semibold">The Dream Makers Behind CYNOSURE</p>
            <Users className="text-accent animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            🌟 Meet the incredible students who turned a simple dream into Mumbai's most loved interschool fest! 
            Each one brings their unique spark to make CYNOSURE magical! ✨
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-1">{member.name}</h3>
                  <Badge variant="outline" className="border-accent text-accent mb-2">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.school}</p>
                </div>

                {/* Fun Facts */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm font-semibold text-primary mb-1">🎵 Favorite Song:</p>
                    <p className="text-xs text-muted-foreground">{member.favoriteSong}</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm font-semibold text-accent mb-1">🍫 Go-to Snack:</p>
                    <p className="text-xs text-muted-foreground">{member.snack}</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-sm font-semibold text-secondary mb-1">🎨 Hidden Talent:</p>
                    <p className="text-xs text-muted-foreground">{member.talent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="text-center mb-12">
          <Card className="card-hover bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-gradient mb-6">What Drives Us ✨</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-3 animate-pulse" />
                  <h4 className="font-bold text-gradient mb-2">Passion</h4>
                  <p className="text-sm text-muted-foreground">We live and breathe CYNOSURE!</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
                  <h4 className="font-bold text-gradient mb-2">Unity</h4>
                  <p className="text-sm text-muted-foreground">Together we achieve the impossible!</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-secondary mx-auto mb-3 animate-pulse" />
                  <h4 className="font-bold text-gradient mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Every detail matters to us!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join the Team */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Want to Join Our Family? 🌟</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            CYNOSURE is always looking for passionate students who want to make a difference! 
            Whether you're a creative genius, tech wizard, or people person - we have a place for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              📧 team@cynosure.com
            </Badge>
            <Badge variant="outline" className="border-accent text-accent px-4 py-2">
              💬 DM us on Instagram
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;