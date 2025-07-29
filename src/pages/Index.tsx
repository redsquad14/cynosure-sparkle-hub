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
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StarField />
      <Navbar />
      <div id="top"></div>
      
      {/* School Header Section */}
      <section className="relative bg-background py-8 md:py-12 border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Logo - Centered above heading */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/083a2770-8df3-4cbf-9df4-5ac57ae211b4.png" alt="St. Gregorios High School Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            </div>
          </div>
          
          {/* Headings - Aligned with Logo */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="font-times text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              St. Gregorios High School
            </h1>
            <h2 className="font-times text-lg sm:text-xl md:text-2xl font-semibold text-accent lg:text-6xl text-center">
              Presents
            </h2>
          </div>
        </div>
      </section>
      
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
          <p className="text-muted-foreground mb-2"> Made with love by the CYNOSURE team </p>
          <p className="text-sm text-muted-foreground">© 2025 CYNOSURE - St. Gregorios High Schools Student Powered Interschool Fest</p>
        </div>
      </footer>
    </div>;
};
export default Index;