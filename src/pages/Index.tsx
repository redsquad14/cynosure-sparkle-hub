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
      <section className="relative bg-background py-12 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-start">
            {/* Logo */}
            <div className="mr-8 ml-4 mt-2">
              <LogoWithBackgroundRemoval
                originalSrc="/lovable-uploads/4e9330a3-64d1-409b-964a-733e7ab32673.png"
                alt="St. Gregorios High School Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1 ml-16">
              <h1 className="font-times text-6xl font-bold text-primary mb-4">
                St. Gregorios High School
              </h1>
            </div>
          </div>
          
          {/* Centered "Presents" heading */}
          <div className="w-full flex justify-center mt-4">
            <h2 className="font-times text-2xl font-semibold text-accent">
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