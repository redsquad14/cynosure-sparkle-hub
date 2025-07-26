import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Users, Lightbulb } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 mx-0 py-0">About Cynosure</h2>
          
        </div>

        {/* Origin Story */}
        <div className="mb-16">
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent animate-pulse" />
                <h3 className="text-3xl font-bold text-gradient">Our Origin Story</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                🌟 Once upon a time, in the bustling heart of Mumbai, a group of passionate students had a dream. 
                They envisioned a celebration that would transcend school boundaries, bringing together the brightest 
                young minds from across the city. This dream blossomed into <span className="text-primary font-semibold">CYNOSURE</span> 
                – a festival where creativity knows no limits and every participant becomes a shining star.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">✨CYNOSURE serves as the guiding star for Mumbai's youth, illuminating paths of friendship, creativity, and excellence. Here, every student finds their moment to shine, every talent gets its stage, and every dream finds its wings.</p>
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
          <p className="text-xl text-accent font-semibold mb-4">
            🌟 Ready to be part of something magical? 🌟
          </p>
          <p className="text-lg text-muted-foreground">
            Join us as we celebrate the boundless potential of Mumbai's incredible youth!
          </p>
        </div>
      </div>
    </section>;
};
export default About;