import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Heart, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="text-accent animate-pulse" />
            <p className="text-xl text-primary font-semibold">We're Here for You!</p>
            <Heart className="text-accent animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            💌 Whether you're curious, confused, or just super excited about CYNOSURE - 
            we're here for you! Drop us a line and let's make magic happen together! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover bg-gradient-to-br from-card to-muted/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-semibold">Your Name ✨</Label>
                  <Input 
                    id="name" 
                    placeholder="Tell us who you are!" 
                    className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-semibold">Email Address 📧</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.awesome@email.com" 
                    className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="school" className="text-foreground font-semibold">School/College 🏫</Label>
                  <Input 
                    id="school" 
                    placeholder="Which amazing institution are you from?" 
                    className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground font-semibold">What's on your mind? 💭</Label>
                  <select 
                    id="subject"
                    className="w-full mt-2 p-3 rounded-md bg-background/50 border border-primary/30 focus:border-primary text-foreground"
                  >
                    <option value="">Choose a topic...</option>
                    <option value="registration">Registration Info 🌟</option>
                    <option value="events">Event Details 🎭</option>
                    <option value="volunteer">Volunteer Opportunities 🤝</option>
                    <option value="collaboration">School Collaboration 🏫</option>
                    <option value="media">Media Partnerships 📸</option>
                    <option value="other">Just Excited! 🎉</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-semibold">Your Message 💌</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your thoughts, questions, or just say hi! We love hearing from future CYNOSURE stars! ✨" 
                    className="mt-2 min-h-[120px] bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>
                
                <Button variant="gradient" size="lg" className="w-full text-lg py-6">
                  🚀 Send Message & Spread the Magic!
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-6">
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
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Find Us in Mumbai! 🏙️
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're spread across Mumbai's amazing colleges, but our heart beats strongest in:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-accent font-semibold">📍 Central Coordination Hub</p>
                  <p className="text-muted-foreground">
                    Various Partner Colleges<br/>
                    Mumbai, Maharashtra<br/>
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
                    <p className="font-semibold text-accent">💰 Registration fees?</p>
                    <p className="text-muted-foreground">Very affordable! Details coming soon.</p>
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
    </section>
  );
};

export default Contact;