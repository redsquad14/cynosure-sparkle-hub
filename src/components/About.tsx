import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Users, Lightbulb } from 'lucide-react';
const About = () => {
  return <section id="about" className="pt-10 pb-4 px-4 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 mx-0 py-[9px]">About Cynosure</h2>
          
        </div>

        {/* Origin Story */}
        <div className="mb-16">
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent animate-pulse" />
                <h3 className="text-3xl font-bold text-gradient py-[8px]">Our Origin Story</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">Cynosure is a inter-school fest that offers a diverse range of activities and competitions, spanning Literary Arts, Performing Arts, Visual Arts, and Sports. Whether you're a wordsmith, a performer, a creator, or an athlete — there's something here for everyone. The event is designed to promote learning, inclusivity, teamwork, and camaraderie, allowing participants to explore their talents in a spirited and supportive environment. All event descriptions, along with their rules and regulations, can be found in the Cynosure e-Brochure, accessible via our Instagram</p>
              
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-gradient mb-3">Unity Across Schools</h3>
              <p className="text-muted-foreground">
                Breaking barriers between institutions, we create a melting pot of talent 
                where friendships bloom and collaborations flourish.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-gradient mb-3">Innovation Hub</h3>
              <p className="text-muted-foreground">
                A platform where creativity meets innovation, encouraging students to think 
                outside the box and showcase their unique perspectives.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-gradient mb-3">Star-Making Platform</h3>
              <p className="text-muted-foreground">
                Every participant is a star waiting to shine. We provide the stage, 
                the audience, and the recognition that dreams deserve.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          
          
        </div>
      </div>
    </section>;
};
export default About;