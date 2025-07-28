import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Events',
    href: '#events'
  }, {
    name: 'Gallery',
    href: '#gallery'
  }, {
    name: 'Brochures',
    href: '#brochures'
  }, {
    name: 'Contact Us',
    href: '#contact'
  }];
  return <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/91005844-b2a4-4275-972d-0c502cb74f15.png" alt="CYNOSURE Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl text-gradient font-bold">CYNOSURE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/10">
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Button 
              variant="destructive" 
              className="bg-red-500 hover:bg-red-600 animate-pulse font-bold shadow-lg"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-4 h-4 mr-2" />
                Register Now!
              </a>
            </Button>
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
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>)}
            <div className="pt-4">
              <Button variant="gradient" className="w-full">
                Register Now
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;