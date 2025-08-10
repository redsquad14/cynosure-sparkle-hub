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
      <div className="relative z-20 text-center px-2 sm:px-4 lg:px-6 max-w-6xl mx-auto">
        {/* Mascot Eye */}
        

        {/* Countdown Timer */}
          <div className="mb-3 sm:mb-4 lg:mb-6">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <Calendar className="text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <h3 className="font-semibold text-gradient text-lg sm:text-2xl lg:text-3xl">September 26, 2025
          </h3>
            <Calendar className="text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <CountdownTimer />
        </div>

        {/* Welcome Message */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4">
            
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-2">
            <Sparkles className="text-accent animate-pulse w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-accent font-semibold text-center leading-tight">St. Gregorios High School's Student Powered Interschool Fest</p>
            <Sparkles className="text-accent animate-pulse w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-8">
          
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed text-slate-50 md:text-2xl">We, the students of St. Gregorios High School, are thrilled to invite you to the fourth edition of our flagship inter-school extravaganza - CYNOSURE 4.0 - taking place on the 26th and 27th of September, 2025. This dynamic, student-led celebration brings together Mumbai’s brightest young minds to compete, collaborate and create unforgettable memories.</p>
        </div>

        {/* Call to Action */}
        <div className="space-y-3 sm:space-y-4">
          
          
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base lg:text-xl px-2">Contact us on Instagram: <a href="https://www.instagram.com/cynosure.stghs?utm_source=ig_web_button_share_sheet&igsh=MWhtY2luN3BrY3k2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors break-all">@cynosure.stghs</a></p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-2 sm:left-4 lg:left-10 opacity-30">
        <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent float" />
      </div>
      <div className="absolute top-16 sm:top-20 right-4 sm:right-8 lg:right-20 opacity-30">
        <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-primary float" style={{
        animationDelay: '2s'
      }} />
      </div>
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-20 right-2 sm:right-4 lg:right-10 opacity-30">
        <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-secondary float" style={{
        animationDelay: '4s'
      }} />
      </div>
    </section>;
};
export default Hero;