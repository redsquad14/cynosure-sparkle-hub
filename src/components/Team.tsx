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
  return <section id="brochures" className="py-12 sm:py-16 lg:py-20 bg-card/30 relative font-times">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Brochures</h2>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* 2022 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 group h-full">
            <CardContent className="p-6 text-center h-full flex flex-col">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">2022 Brochure</h3>
                  
                </div>
              </div>
              <p className="mb-4 text-base leading-relaxed flex-grow text-slate-50">✨ Relive the magic of CYNOSURE 2022! </p>
              <Button variant="gradient" size="sm" className="w-full group-hover:scale-105 transition-transform duration-300 mt-auto" onClick={() => window.open('https://drive.google.com/file/d/1h0Pyevr5EYn3T2ZmTJDkNEebAWTPGVWQ/view?usp=drive_link', '_blank')}>
                <Download className="w-4 h-4 mr-2" />
                Download 2022
              </Button>
            </CardContent>
          </Card>

          {/* 2023 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 group h-full">
            <CardContent className="p-6 text-center h-full flex flex-col">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">2023 Brochure</h3>
                  
                </div>
              </div>
              <p className="mb-4 text-base leading-relaxed flex-grow text-slate-50">🌟 Experience CYNOSURE 2023! </p>
              <Button variant="gradient" size="sm" className="w-full group-hover:scale-105 transition-transform duration-300 mt-auto" onClick={() => window.open('https://drive.google.com/file/d/1lT-CeYK7lU7_5Rggg9aW2eyxZ4TZShEU/view?usp=drive_link', '_blank')}>
                <Download className="w-4 h-4 mr-2" />
                Download 2023
              </Button>
            </CardContent>
          </Card>

          {/* 2024 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 group h-full">
            <CardContent className="p-6 text-center h-full flex flex-col">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-secondary to-primary group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">2024 Brochure</h3>
                  
                </div>
              </div>
              <p className="mb-4 text-base leading-relaxed flex-grow text-slate-50">🚀 The grandest CYNOSURE yet!</p>
              <Button variant="gradient" size="sm" className="w-full group-hover:scale-105 transition-transform duration-300 mt-auto" onClick={() => window.open('https://drive.google.com/file/d/13Crioz9ve_ZVrwBgu0SYl__XeSa80qlm/view?usp=drive_link', '_blank')}>
                <Download className="w-4 h-4 mr-2" />
                Download 2024
              </Button>
            </CardContent>
          </Card>

          {/* 2025 Brochures */}
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 group h-full">
            <CardContent className="p-6 text-center h-full flex flex-col">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">2025 Brochure</h3>
                  
                </div>
              </div>
              <p className="mb-4 leading-relaxed flex-grow text-base text-slate-50">💥 Get ready for CYNOSURE 2025! </p>
              <Button variant="gradient" size="sm" className="w-full group-hover:scale-105 transition-transform duration-300 mt-auto" onClick={() => window.open('https://drive.google.com/file/d/1CoLYzTc0sOr52wNg-aIh7RtVeWY6tdQU/view?usp=drive_link', '_blank')}>
                <Download className="w-4 h-4 mr-2" />
                Download 2025
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div id="contact"></div>
    </section>;
};
export default Team;