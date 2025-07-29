import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import StarField from '@/components/StarField';
import FullWidthSlideshow from '@/components/FullWidthSlideshow';
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StarField />
      <Navbar />
      <div id="top"></div>
      <FullWidthSlideshow />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-muted-foreground mb-2"> Made with love by the CYNOSURE team </p>
          <p className="text-sm text-muted-foreground">© 2025 CYNOSURE - St. Gregorios High Schools Student Powered Interschool Fest</p>
        </div>
      </footer>
    </div>;
};
export default Index;