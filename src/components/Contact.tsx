import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Heart, Send } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            
            <p className="text-xl text-primary font-semibold">We're Here for You!</p>
            
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            💌 Whether you're curious, confused, or just super excited about CYNOSURE - 
            we're here for you! Drop us a line and let's make magic happen together! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8 text-center max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gradient mb-4">Quick Reach 🚀</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email us</p>
                      <p className="text-sm text-muted-foreground">hello@cynosure.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/20">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call/WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/20">
                      <Instagram className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Follow us</p>
                      <p className="text-sm text-muted-foreground">@cynosure_mumbai</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
              <CardContent className="p-6 text-center mx-0">
                <h3 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Find Us in Mumbai! 🏙️
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're spread across Mumbai's amazing colleges, but our heart beats strongest in:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-accent font-semibold">📍 St Gregorios High School</p>
                  <p className="text-muted-foreground">
                    Various Partner Colleges<br />
                    Mumbai, Maharashtra<br />
                    India 🇮🇳
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Snippet */}
            <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-4">Quick Answers 💡</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-accent">🤔 When is CYNOSURE 2024?</p>
                    <p className="text-muted-foreground">September 26, 2024 - Mark your calendar!</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">📋 How to register?</p>
                    <p className="text-muted-foreground">Registration opens soon! Stay tuned for updates.</p>
                  </div>
                  <div>
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <Card className="card-hover bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">💌 We Can't Wait to Hear From You!</h3>
              <p className="text-muted-foreground">
                Every message you send brings us one step closer to making CYNOSURE 2024 
                the most incredible celebration Mumbai has ever seen! 
                Your excitement fuels our passion! ✨
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;