import { Button } from '@/components/ui/button';
import { Sparkles, Star, Calendar } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import StarField from './StarField';
import EmotionalSlideshow from './EmotionalSlideshow';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-times">
      <EmotionalSlideshow />
      <StarField />
      
      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Mascot Eye */}
        

        {/* Countdown Timer */}
          <div className="mb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-primary" />
            <h3 className="font-semibold text-gradient text-3xl">September 26, 2025
          </h3>
            <Calendar className="text-primary" />
          </div>
          <CountdownTimer />
        </div>

        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent animate-pulse" />
            <p className="text-3xl text-accent font-semibold">St. Gregorios High School's Student Powered Interschool Fest</p>
            <Sparkles className="text-accent animate-pulse" />
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-8">
          
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed text-slate-50 md:text-2xl">We, the students of St. Gregorios High School, are thrilled to invite you to the fourth edition of our flagship inter-school extravaganza - CYNOSURE 4.0 - taking place on the 26th and 27th of September, 2025. This dynamic, student-led celebration brings together Mumbai’s brightest young minds to compete, collaborate, and create unforgettable memories.</p>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          
          
          <p className="text-muted-foreground mt-4 text-xl">Contact us on Instagram: <a href="https://www.instagram.com/cynosure.stghs?utm_source=ig_web_button_share_sheet&igsh=MWhtY2luN3BrY3k2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@cynosure.stghs</a></p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 opacity-30">
        <Sparkles className="w-8 h-8 text-accent float" />
      </div>
      <div className="absolute top-20 right-20 opacity-30">
        <Star className="w-6 h-6 text-primary float" style={{
        animationDelay: '2s'
      }} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <Sparkles className="w-10 h-10 text-secondary float" style={{
        animationDelay: '4s'
      }} />
      </div>
    </section>;
};
export default Hero;