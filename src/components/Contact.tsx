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
            
            <p className="text-xl text-primary font-semibold">We are Here for You!</p>
            
          </div>
          <p className="text-lg max-w-3xl mx-auto text-slate-50">💌 Curious, confused or simply thrilled about CYNOSURE?  We have got you covered! Reach out to us - let us turn your excitement into something unforgettable!✨</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-[10px] py-px">
          {/* Left Side - Quick Reach and Quick Answers */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8 text-center max-w-md mx-auto">
                <h3 className="text-3xl font-bold text-gradient mb-4">Quick Reach 🚀</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground whitespace-nowrap text-lg">Email us</p>
                      <a href="mailto:cynosure.stghs@gmail.com" className="text-lg text-white hover:text-accent transition-colors">cynosure.stghs@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/20">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-lg">Call us</p>
                      <a href="tel:02225203791" className="text-lg text-white hover:text-accent transition-colors">022 2520 3791</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/20">
                      <Instagram className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-lg">Follow us</p>
                      <a href="https://www.instagram.com/cynosure.stghs?utm_source=ig_web_button_share_sheet&igsh=MWhtY2luN3BrY3k2ZA==" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-accent transition-colors">@cynosure.stghs</a>
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
                    <p className="font-semibold text-accent">⏰ What is the reporting time for participants?</p>
                    <p className="text-muted-foreground">All participants must report by 7:30 a.m. on both days and complete general registration on arrival.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">📝 How can schools complete the registration process?</p>
                    <p className="text-muted-foreground">Participating schools must register through the official Cynosure website: cynosurestghs.com.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">🚪 What are the dispersal protocols for participants?</p>
                    <p className="text-muted-foreground">Day 1: Participants may leave the venue once all scheduled events have concluded. Day 2: Departure is allowed post the award ceremony.</p>
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
                        <p className="font-bold text-accent">📐 When will the stage or court dimensions be shared for the event?</p>
                        <p className="text-muted-foreground">The exact dimensions will be provided to each contingent upon successful registration for the respective event.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🎬 What file formats are required for submitting recorded videos and soundtracks?</p>
                        <p className="text-muted-foreground">All video submissions must be in MP4 format and all audio tracks must be submitted in MP3 format.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🍽️ What are the food arrangements at the venue?</p>
                        <p className="text-muted-foreground">Food stalls will be available for all attendees. While packed commercial food is not permitted, participants may carry home-made meals if they prefer.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">💬 Whom should we contact for queries or assistance?</p>
                        <p className="text-muted-foreground">For all inquiries, please check the Quick Reach section on our website or refer to the contact details provided in the brochure.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🏫 Who can participate in Cynosure 2025?</p>
                        <p className="text-muted-foreground">Students from Standard 6th to 12th of all registered schools are eligible to take part, as per the terms and conditions of the events.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🩺 Will medical assistance be available at the venue?</p>
                        <p className="text-muted-foreground">Yes, a fully equipped medical room will be operational on-site to address any health-related concerns.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🏆 When can we collect our trophies and certificates?</p>
                        <p className="text-muted-foreground">All trophies and certificates can be collected at the Closing Ceremony on Saturday, 27th September, 2025. At least 1 representative must be present during the Closing Ceremony.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📱 Are participants permitted to bring their mobile phones?</p>
                        <p className="text-muted-foreground">Participants may carry mobile phones but should use them only if required for the event. For events prohibiting electronics, phones must be submitted to the contingent leader or teacher in charge.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🧴 Are participants permitted to bring perfume and deodorant?</p>
                        <p className="text-muted-foreground">Students may carry deodorants, but perfumes are not allowed. Any perfumes found will be confiscated.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🔄 Are last-minute replacements allowed if a child is absent on day 2 due to illness?</p>
                        <p className="text-muted-foreground">Last-minute replacements due to illness on Day 2 may be allowed with prior approval from the organizers. Teams must inform the committee as early as possible.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">↔️ Is it permissible to replace a registered participant if they can no longer participate?</p>
                        <p className="text-muted-foreground">Yes, replacements may be allowed post-registration with prior approval from the organising committee.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">🚪 Will there be designated areas for participants to change and prepare?</p>
                        <p className="text-muted-foreground">Yes, participants may use the school washrooms and their assigned contingent rooms to get ready.</p>
                      </div>
                      <div>
                        <p className="font-bold text-accent">📅 When is the Contingent Leader meeting?</p>
                        <p className="text-muted-foreground">The exact dates of the Contingent Leader will be provided to each contingent upon successful registration for the respective event.</p>
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
                <h3 className="text-3xl font-bold text-gradient mb-4 flex items-center justify-center gap-2 text-center">
                  <MapPin className="w-5 h-5 text-accent" />
                  Find Us in Mumbai! 🏙️
                </h3>
                <p className="mb-4 text-slate-50 text-2xl">One event. 
One location. All roads lead to:</p>
                <div className="space-y-1 text-2xl mb-4">
                  <p className="text-accent font-semibold text-3xl -mt-2">📍 St Gregorios High School</p>
                   <p className="text-gray-50 text-lg mt-2">N . B. Patil Marg,   Ghatla,   Chembur, Mumbai - 400071,  Maharashtra, India</p>
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
              <h3 className="text-2xl font-bold text-gradient mb-4"> We Can't Wait to Hear From You!</h3>
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