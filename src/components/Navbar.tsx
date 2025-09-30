import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu, X, Sparkles, ExternalLink } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#top',
    id: 'top'
  }, {
    name: 'About',
    href: '#about',
    id: 'about'
  }, {
    name: 'Events',
    href: '#events',
    id: 'events'
  }, {
    name: 'Gallery',
    href: '#gallery',
    id: 'gallery'
  }, {
    name: 'Brochures',
    href: '#brochures',
    id: 'brochures'
  }, {
    name: 'Contact Us',
    href: '#contact',
    id: 'contact'
  }];
  const cinematicScrollTo = async (targetId: string) => {
    if (isScrolling) return;
    setIsScrolling(true);

    // Find target index
    const targetIndex = navItems.findIndex(item => item.id === targetId);
    if (targetIndex === -1) {
      setIsScrolling(false);
      return;
    }

    // Get current scroll position to determine starting point
    const currentScrollY = window.scrollY;
    let startIndex = 0;

    // Find current section based on scroll position
    for (let i = navItems.length - 1; i >= 0; i--) {
      const element = document.getElementById(navItems[i].id);
      if (element && currentScrollY >= element.offsetTop - 100) {
        startIndex = i;
        break;
      }
    }

    // If we're going backwards or to the same section, scroll directly
    if (targetIndex <= startIndex) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setTimeout(() => setIsScrolling(false), 1000);
      return;
    }

    // Cinematic scroll through each section
    for (let i = startIndex; i <= targetIndex; i++) {
      const currentElement = document.getElementById(navItems[i].id);
      if (currentElement) {
        // Smooth scroll to current section
        currentElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Wait for scroll animation, with shorter delays for smoother experience
        const delay = i === targetIndex ? 500 : 250;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    setIsScrolling(false);
  };
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    cinematicScrollTo(targetId);
    setIsOpen(false); // Close mobile menu
  };
  return <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-primary/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            
            <img src="/lovable-uploads/91005844-b2a4-4275-972d-0c502cb74f15.png" alt="CYNOSURE Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
            
            <span className="text-lg sm:text-xl md:text-2xl text-gradient font-bold">CYNOSURE</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.id)} className={`text-foreground hover:text-primary px-2 lg:px-3 py-1 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${isScrolling ? 'pointer-events-none opacity-70' : ''}`}>
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* Winner's List Button */}
          <div className="hidden md:block">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="default" className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse font-bold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all duration-300" style={{
                animationDuration: '0.8s'
              }}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Winner's List!
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4" align="end" sideOffset={8}>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gradient">Winner's List</h3>
                  <div className="rounded-lg border border-primary/20 bg-background overflow-hidden">
                    <iframe 
                      src="https://docs.google.com/document/d/1LDVik5zwTtLDBWAVADSmUo2NbYnxssCoyCi4A8dtI6o/preview"
                      className="w-full h-[300px]"
                      title="Winner's List Preview"
                    />
                  </div>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold"
                    onClick={() => window.open('https://docs.google.com/document/d/1LDVik5zwTtLDBWAVADSmUo2NbYnxssCoyCi4A8dtI6o/edit?usp=sharing', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Click here to view the full list
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.id)} className={`text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isScrolling ? 'pointer-events-none opacity-70' : ''}`}>
                {item.name}
              </a>)}
            <div className="pt-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="gradient" className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Winner's List!
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4" align="start" sideOffset={8}>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gradient">Winner's List</h3>
                    <div className="rounded-lg border border-primary/20 bg-background overflow-hidden">
                      <iframe 
                        src="https://docs.google.com/document/d/1LDVik5zwTtLDBWAVADSmUo2NbYnxssCoyCi4A8dtI6o/preview"
                        className="w-full h-[300px]"
                        title="Winner's List Preview"
                      />
                    </div>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold"
                      onClick={() => window.open('https://docs.google.com/document/d/1LDVik5zwTtLDBWAVADSmUo2NbYnxssCoyCi4A8dtI6o/edit?usp=sharing', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Click here to view the full list
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;