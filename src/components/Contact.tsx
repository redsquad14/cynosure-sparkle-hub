import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, Phone, MapPin, Instagram, Heart, Send, X } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="pt-4 pb-20 px-4 relative">
      <div className="max-w-6xl mx-auto font-times">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 font-times">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            
            <p className="text-xl text-primary font-semibold">We're Here for You!</p>
            
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">
            💌 Whether you're curious, confused, or just super excited about CYNOSURE - 
            we're here for you! Drop us a line and let's make magic happen together! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-[10px] py-px">
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
                      <a href="mailto:cynosure.stghs@gmail.com" className="text-sm text-white hover:text-accent transition-colors">cynosure.stghs@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/20">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Call us</p>
                      <a href="tel:02225203791" className="text-sm text-white hover:text-accent transition-colors">022 2520 3791</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/20">
                      <Instagram className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Follow us</p>
                      <a href="https://www.instagram.com/cynosure.stghs?utm_source=ig_web_button_share_sheet&igsh=MWhtY2luN3BrY3k2ZA==" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-accent transition-colors">@cynosure.stghs</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Snippet */}
            <Card className="card-hover bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-4 text-center">Quick Answers 💡</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-accent">🤔 When is CYNOSURE 2025?</p>
                    <p className="text-muted-foreground">September 26 and 27, 2025 - Mark your calendar!</p>
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
                        <p className="font-bold text-accent">🏫 Who is eligible to participate?</p>
                        <p className="text-muted-foreground">Students from Grades 6 to 12 across all invited schools are eligible to participate.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🎭 What types of events will be conducted?</p>
                        <p className="text-muted-foreground">A diverse mix of literary, cultural, technological, and sports activities will be hosted. A comprehensive schedule will be released shortly.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📍 What is the venue for the event?</p>
                        <p className="text-muted-foreground">The event will be held on-campus at <strong>St. Gregorios High School, Mumbai</strong>.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">👗 Are participants required to wear specific attire or costumes?</p>
                        <p className="text-muted-foreground">Dress code or costume requirements, if any, will be specified in the official event booklet for individual events.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📸 Will the event be recorded or photographed?</p>
                        <p className="text-muted-foreground">Yes, professional photography and videography will be conducted throughout the event.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">💬 Whom should we reach out to for any inquiries?</p>
                        <p className="text-muted-foreground">Kindly refer to the <strong>Quick Reach</strong> section for contact details.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">⏰ What time should we arrive for the event?</p>
                        <p className="text-muted-foreground">Participants are expected to report by <strong>7:30 a.m.</strong></p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📅 When is departure permitted on both days?</p>
                        <p className="text-muted-foreground">On Day 1, departure is allowed once events conclude. On Day 2, after the award ceremony.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🆔 What is meant by the CG code?</p>
                        <p className="text-muted-foreground">The <strong>St. Gregorios Contingent Code</strong> is a unique identification assigned to each school to maintain confidentiality.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🎶 What format should music tracks be submitted in?</p>
                        <p className="text-muted-foreground">All music tracks should be in <strong>MP3</strong> format.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🍽️ Are participants required to bring their own food?</p>
                        <p className="text-muted-foreground">No, <strong>food stalls will be available</strong> at the venue for all attendees.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🩺 Is there a need to carry a personal first aid kit?</p>
                        <p className="text-muted-foreground">Not necessary. A fully equipped <strong>medical room</strong> will be operational on-site.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🏆 Where can we collect our trophies and certificates?</p>
                        <p className="text-muted-foreground">All trophies and certificates will be distributed during the awards ceremony on <strong>Saturday, 27th September 2025</strong>.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🚪 When are participants permitted to leave the venue?</p>
                        <p className="text-muted-foreground">Participants may leave <strong>only after all scheduled events for the day have concluded</strong> and upon confirmation from their contingent leader.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">✨ What is the spirit of Cynosure 4.0?</p>
                        <p className="text-muted-foreground">A celebration of joy, unity, and unforgettable memories!</p>
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
                <h3 className="text-xl font-bold text-gradient mb-4 flex items-center justify-center gap-2 text-center">
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