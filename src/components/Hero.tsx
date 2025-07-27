import { Button } from '@/components/ui/button';
import { Sparkles, Star, Calendar } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import StarField from './StarField';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Mascot Eye */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <img 
                src="/lovable-uploads/627530d8-e51f-404f-a8fb-e79c0b106a8f.png" 
                alt="CYNOSURE Logo" 
                className="w-16 h-16 object-contain animate-spin" 
                style={{animationDuration: '8s'}}
              />
            </div>
            {/* Blinking eye effect */}
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-background animate-pulse" style={{
            animationDelay: '3s',
            animationDuration: '4s'
          }} />
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient">CYNOSURE</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent animate-pulse" />
            <p className="text-xl md:text-2xl text-accent font-semibold">Pan Mumbai Interschool Fest</p>
            <Sparkles className="text-accent animate-pulse" />
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-8">
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            🌟 Get ready for Mumbai's most heartfully curated interschool celebration! 
            Where young stars shine brightest and dreams take flight. 
            Join us as we bring together the most brilliant minds from across the city! ✨
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-primary" />
            <h3 className="text-2xl font-semibold text-gradient">September 26, 2025
          </h3>
            <Calendar className="text-primary" />
          </div>
          <CountdownTimer />
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          
          
          <p className="text-sm text-muted-foreground mt-4">Contact us on Instagram: @cynosure.stghs</p>
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