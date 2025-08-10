import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import SlideshowGallery from '@/components/SlideshowGallery';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import StarField from '@/components/StarField';
import FullWidthSlideshow from '@/components/FullWidthSlideshow';
import LogoWithBackgroundRemoval from '@/components/LogoWithBackgroundRemoval';
import HeroSlideshow from '@/components/HeroSlideshow';

const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StarField />
      <Navbar />
      <div id="top" className="pt-12 sm:pt-14 md:pt-16"></div>
      
      
      <HeroSlideshow />
      
      <FullWidthSlideshow />
      <main>
        <Hero />
        <About />
        <Events />
        <SlideshowGallery />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2 text-slate-50"> Made with love by the CYNOSURE Team </p>
          <p className="text-sm text-muted-foreground">© 2025 CYNOSURE - St. Gregorios High Schools Student Powered Interschool Fest</p>
        </div>
      </footer>
    </div>;
};
export default Index;