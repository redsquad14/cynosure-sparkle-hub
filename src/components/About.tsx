import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Users, Lightbulb } from 'lucide-react';
const About = () => {
  return <section id="about" className="pt-6 sm:pt-8 lg:pt-10 pb-4 px-2 sm:px-4 lg:px-6 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto font-times">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6 mx-0 py-2 sm:py-[9px]">About Cynosure</h2>
          
        </div>

        {/* Origin Story */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient py-1 sm:py-[8px] text-center sm:text-left">Our Origin Story</h3>
              </div>
              <p className="leading-relaxed mb-4 sm:mb-6 text-slate-50 text-sm sm:text-base lg:text-lg xl:text-xl">Cynosure is a inter-school fest that offers a diverse range of activities and competitions, spanning Literary Arts, Performing Arts, Fine Arts and Sports. Whether you're a wordsmith, a performer, a creator or an athlete - there's something here for everyone. The event is designed to promote learning, inclusivity, teamwork and camaraderie, allowing participants to explore their talents in a spirited and supportive environment. All event descriptions, along with their rules and regulations, can be found in the Cynosure e-Brochure, accessible via our Instagram, @cynosure.stghs.</p>
              
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-4 sm:p-6 text-center">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-gradient mb-2 sm:mb-3">Unity Across Schools</h3>
              <p className="text-slate-50 text-sm sm:text-base">Bridging gaps between institutions, we foster a vibrant hub of talent where connections spark and collaborations thrive.</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
            <CardContent className="p-4 sm:p-6 text-center">
              <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-gradient mb-2 sm:mb-3">Innovation Hub</h3>
              <p className="text-slate-50 text-center text-sm sm:text-base">A platform where imagination blends with innovation, inspiring students to push boundaries and share their unique vision.</p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <CardContent className="p-4 sm:p-6 text-center">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-secondary mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-gradient mb-2 sm:mb-3">Star-Making Platform</h3>
              <p className="text-slate-50 text-sm sm:text-base">Every participant is a star waiting to shine,we provide the stage, the audience and the recognition that dreams deserve.</p>
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