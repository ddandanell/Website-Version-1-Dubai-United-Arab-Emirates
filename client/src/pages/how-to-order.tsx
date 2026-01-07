import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Users, CreditCard, ChefHat, CheckCircle2, Clock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Contact Us on WhatsApp",
      description: "Reach out to us via WhatsApp at +971 4 123 4567 or fill out our website contact form. Tell us your event date, number of guests, occasion type, and any initial preferences.",
      duration: "2 minutes",
      details: [
        "Available 7 days a week, 9 AM - 10 PM Dubai time",
        "Instant responses during business hours",
        "Friendly team ready to help in English & Arabic",
        "No commitment required at this stage"
      ]
    },
    {
      number: "02",
      icon: FileText,
      title: "Receive Chef Proposals",
      description: "Our AI-powered matching system analyzes your requirements and connects you with 2-3 perfect chef candidates. You'll receive their profiles, specialties, and sample menu proposals – all within 10 minutes.",
      duration: "10 minutes",
      details: [
        "Chef profiles with experience & certifications",
        "2-3 customized menu proposals based on your preferences",
        "Pricing estimates (service fee + ingredients)",
        "Photos of previous work from each chef"
      ]
    },
    {
      number: "03",
      icon: Users,
      title: "Plan with Your Chef",
      description: "Once you select your preferred chef, you'll have a detailed consultation call or WhatsApp chat to finalize your menu, discuss dietary requirements, timing, and any special requests.",
      duration: "20-30 minutes",
      details: [
        "Personalized menu customization",
        "Discuss dietary restrictions & allergies",
        "Confirm service timeline and logistics",
        "Review equipment needs & table setup preferences",
        "Finalize ingredient quality (premium, organic, etc.)"
      ]
    },
    {
      number: "04",
      icon: CreditCard,
      title: "Secure Your Booking",
      description: "To confirm your event, we require a 50% deposit. You'll receive a booking confirmation with all details, your chef's contact info, and a final quote breakdown.",
      duration: "5 minutes",
      details: [
        "50% deposit to secure your date & chef",
        "Payment via bank transfer, credit card, or digital wallet",
        "Instant booking confirmation email",
        "Direct chef contact information provided",
        "Detailed invoice with transparent pricing"
      ]
    },
    {
      number: "05",
      icon: ChefHat,
      title: "Enjoy Your Experience",
      description: "On the day of your event, your chef arrives on time with fresh ingredients, prepares an unforgettable meal in your Dubai home, serves it beautifully, and leaves your kitchen spotless.",
      duration: "3-6 hours",
      details: [
        "Chef arrives 30 minutes early to set up",
        "All ingredients freshly sourced same-day",
        "Professional cooking, plating, and service",
        "Photography-worthy presentation",
        "Complete cleanup included",
        "Remaining 50% payment after service"
      ]
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: "Share Your Feedback",
      description: "After your event, we'd love to hear about your experience! Your feedback helps us maintain our 4.9/5 rating and continuously improve our service across Dubai.",
      duration: "Optional",
      details: [
        "Post-event satisfaction follow-up",
        "Share photos on social media (optional)",
        "Refer friends for AED 200 discount",
        "Book your next event with returning client perks",
        "Request the same chef for future occasions"
      ]
    }
  ];

  const whyBookWithUs = [
    {
      icon: Clock,
      title: "10-Minute Response Time",
      description: "We're known for lightning-fast quote turnaround. From first contact to menu proposals in under 10 minutes during business hours."
    },
    {
      icon: Shield,
      title: "Fully Insured & Certified",
      description: "Every chef is HACCP certified, background checked, and covered by comprehensive insurance for your complete peace of mind."
    },
    {
      icon: ChefHat,
      title: "5+ Years Experience Minimum",
      description: "All our chefs have extensive professional experience in luxury hotels, fine dining restaurants, or private chef services."
    },
    {
      icon: CheckCircle2,
      title: "Money-Back Guarantee",
      description: "If you're not completely satisfied with your experience, we'll make it right or provide a full refund. Your satisfaction is guaranteed."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000"
            alt="How to book private chef in Dubai"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            How to <span className="text-primary italic">Order</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Booking Your Private Chef in Dubai is Simple – From Contact to Culinary Excellence in 6 Easy Steps
          </p>
        </motion.div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Timeline Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[60px] top-[120px] w-0.5 h-[calc(100%+4rem)] bg-neutral-200 hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-[120px] h-[120px] bg-black flex items-center justify-center text-white">
                        <span className="text-4xl font-heading font-bold">{step.number}</span>
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-neutral-50 p-8 border border-neutral-200">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">{step.title}</h3>
                        <span className="text-sm text-primary font-bold bg-primary/10 px-4 py-2">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-black mb-3">
                          What Happens:
                        </h4>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Book <span className="text-primary italic">With Us?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Dubai's most trusted private chef service – trusted by 500+ clients across the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyBookWithUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-neutral-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Flexible <span className="text-primary italic">Payment Options</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We accept all major payment methods to make booking your private chef in Dubai as convenient as possible.
              </p>

              <div className="space-y-4">
                {[
                  "Bank Transfer (UAE Banks)",
                  "Credit Cards (Visa, Mastercard, Amex)",
                  "Debit Cards",
                  "Digital Wallets (Apple Pay, Google Pay)",
                  "Cash (on-site after service)",
                  "Corporate Invoicing (for business clients)"
                ].map((method, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-neutral-700">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black text-white p-10"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Payment Schedule</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-heading font-bold text-lg">Deposit</span>
                    <span className="text-3xl font-heading font-bold text-primary">50%</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Due at booking to secure your chef and date
                  </p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-heading font-bold text-lg">Final Balance</span>
                    <span className="text-3xl font-heading font-bold text-primary">50%</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Due after your event, once ingredient receipts are provided
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get <span className="text-primary italic">Started?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contact us now and receive your personalized chef proposals within 10 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-none"
                onClick={() => window.open('https://wa.me/971412341567', '_blank')}
              >
                WHATSAPP: +971 4 123 4567
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-none"
                onClick={() => window.location.href = "/#contact"}
              >
                SEND MESSAGE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
