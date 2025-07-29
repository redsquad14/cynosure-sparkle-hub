import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
    href: 'https://drive.google.com/drive/folders/1MmXhnh4qDK007F6SLWSeIfr7s-BZVGc0?usp=sharing'
  }, {
    name: 'Contact Us',
    href: '#contact'
  }];
  return <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-primary/20 transition-all duration-300">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-secondary text-primary-foreground animate-pulse font-bold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all duration-300"
                  style={{ animationDuration: '0.8s' }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Register Now!
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeVkqOoCR4GWiywuN870QYaA53-2Gq8rjDFJJIpS4s9htyNOA/viewform?embedded=true" 
                  width="100%" 
                  height={600} 
                  frameBorder={0} 
                  marginHeight={0} 
                  marginWidth={0}
                  className="rounded-md"
                >
                  Loading…
                </iframe>
              </DialogContent>
            </Dialog>
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