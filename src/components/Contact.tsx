import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, Phone, MapPin, Instagram, Heart, Send, X } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="pt-4 pb-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            
            <p className="text-xl text-primary font-semibold">We're Here for You!</p>
            
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">
            💌 Whether you're curious, confused, or just super excited about CYNOSURE - 
            we're here for you! Drop us a line and let's make magic happen together! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Quick Reach and Quick Answers */}
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
                    <div className="text-left">
                      <p className="font-semibold text-foreground whitespace-nowrap">Email us</p>
                      <p className="text-sm text-white">cynosure.stghs@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/20">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Call us</p>
                      <p className="text-sm text-white">022 2520 3791</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/20">
                      <Instagram className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Follow us</p>
                      <p className="text-sm text-white">@cynosure.stghs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Snippet */}
            <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-4">Quick Answers 💡</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-accent">🤔 When is CYNOSURE 2025?</p>
                    <p className="text-muted-foreground">September 26, 2025 - Mark your calendar!</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">📋 How to register?</p>
                    <p className="text-muted-foreground">Registration opens soon! Stay tuned for updates.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">⏰ Last date of registration is?</p>
                    <p className="text-muted-foreground">Registration closes on September 15, 2025.</p>
                  </div>
                </div>
                
                {/* More FAQs Button and Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-4 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30 hover:bg-secondary/20 text-accent">
                      More FAQs 🔽
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-secondary/30 text-foreground max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gradient">Frequently Asked Questions 💡</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm mt-4">
                      <div>
                        <p className="font-bold text-accent">🏫 Who can participate?</p>
                        <p className="text-muted-foreground">Students from Grades 6 to 12 across all invited schools are eligible.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🏆 What types of events will be held?</p>
                        <p className="text-muted-foreground">Expect a mix of literary, cultural, tech, and sports events. Full list coming soon!</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📍 Where is the event taking place?</p>
                        <p className="text-muted-foreground">St. Gregorios High School, Mumbai – On-campus only.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">👕 Is there a dress code or costume requirement?</p>
                        <p className="text-muted-foreground">Depends on the event – rules will be shared in the event booklet.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📸 Will photos or videos be taken?</p>
                        <p className="text-muted-foreground">Yes, the entire event will be professionally photographed and filmed.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📞 Whom do I contact for queries?</p>
                        <p className="text-muted-foreground">See Quick Reach above!</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

          </div>

          {/* Right Side - Find Us in Mumbai */}
          <div>
            <Card className="card-hover bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30 h-full">
              <CardContent className="p-6 text-center mx-0 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Find Us in Mumbai! 🏙️
                </h3>
                <p className="mb-4 text-slate-50">
                  One event. One location. All roads lead to:
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p className="text-accent font-semibold">📍 St Gregorios High School</p>
                  <p className="text-gray-50">
                    Ghatla, Chembur<br />
                    Mumbai, Maharashtra<br />
                    India 🇮🇳
                  </p>
                </div>
                
                {/* Google Map */}
                <div className="flex justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3007003604725!2d72.9077488!3d19.050512299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c60508681da9%3A0xe7ce066a06e48b92!2sSt%20Gregorios%20High%20School%2C%20New%20Building%20Premises!5e0!3m2!1sen!2sin!4v1753685586510!5m2!1sen!2sin" width="400" height="300" style={{
                  border: 0
                }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-md" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <Card className="card-hover bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4"> We Can't Wait to Hear From You!</h3>
              <p className="text-slate-50">
                Every message you send brings us one step closer to making CYNOSURE 2025 
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