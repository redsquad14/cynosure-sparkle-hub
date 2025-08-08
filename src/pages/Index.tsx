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
import SimpleSlideshow from '@/components/SimpleSlideshow';
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StarField />
      <Navbar />
      <div id="top"></div>
      
      {/* School Header Section */}
      <section className="relative bg-background py-8 border-b border-primary/20 px-0 mx-0 my-0 md:py-[129px]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Simple Slideshow - 50% width, centered */}
          <div className="flex justify-center mb-6 md:mb-8 mt-4">
            <div className="w-full max-w-md">
              <SimpleSlideshow />
            </div>
          </div>
          
          {/* Headings - Centered to align with Logo */}
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="font-times text-3xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight md:text-6xl">
              St. Gregorios High School
            </h1>
            <h2 className="font-times text-lg sm:text-xl font-semibold text-accent lg:text-6xl text-center md:text-5xl">Presents</h2>
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
          <p className="mb-2 text-slate-50"> Made with love by the CYNOSURE Team </p>
          <p className="text-sm text-muted-foreground">© 2025 CYNOSURE - St. Gregorios High Schools Student Powered Interschool Fest</p>
        </div>
      </footer>
    </div>;
};
export default Index;