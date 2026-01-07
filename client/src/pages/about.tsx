import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Award, Shield, Users, Heart, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";

export default function About() {
  const stats = [
    { number: "12+", label: "Years of Excellence" },
    { number: "500+", label: "Events Catered" },
    { number: "50+", label: "Expert Chefs" },
    { number: "4.9/5", label: "Client Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every dish we create is crafted with dedication, precision, and a genuine love for culinary artistry. Our chefs bring their heart to your kitchen."
    },
    {
      icon: Shield,
      title: "Trust & Safety First",
      description: "All our chefs are HACCP certified, fully insured, and undergo comprehensive background checks. Your safety and peace of mind are our top priorities."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We believe in building relationships, not just delivering services. Your satisfaction drives everything we do, from initial consultation to the final cleanup."
    },
    {
      icon: Clock,
      title: "Punctuality & Professionalism",
      description: "Time is precious, especially in Dubai's fast-paced environment. We guarantee on-time service, meticulous planning, and flawless execution every time."
    },
    {
      icon: Globe,
      title: "Diverse Culinary Expertise",
      description: "From authentic Emirati machboos to Italian risotto, Japanese sushi to Indian tandoori – our chefs master global cuisines while respecting local traditions."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Our team holds international certifications including HACCP, food safety credentials, and specialized training in luxury hospitality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead
        title="About MyChef.ae - Dubai's Premier Private Chef Service Since 2012"
        description="Learn about MyChef.ae, Dubai's most trusted private chef service since 2012. 500+ events, 50+ certified chefs, 4.9/5 rating. Serving Palm Jumeirah, Dubai Marina, Downtown Dubai & all UAE."
        keywords="about MyChef Dubai, private chef company Dubai, chef service UAE, HACCP certified chefs Dubai, luxury catering Dubai, personal chef history"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=2000"
            alt="Professional chef team in Dubai"
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
            About <span className="text-primary italic">MyChef.ae</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Bringing World-Class Culinary Excellence to Your Dubai Home Since 2012
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our <span className="text-primary italic">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2012 in the heart of Dubai, MyChef.ae was born from a simple vision: to make restaurant-quality dining accessible in the comfort of your own home. What started as a small team of three passionate chefs has grown into the UAE's most trusted private chef service.
                </p>
                <p>
                  Over the past 12 years, we've had the privilege of serving over 500 events across Dubai's most prestigious locations – from intimate penthouses in Downtown Dubai to sprawling villas on Palm Jumeirah, from corporate gatherings in Dubai Marina to family celebrations in Arabian Ranches.
                </p>
                <p>
                  Our success is built on three pillars: exceptional culinary talent, unwavering commitment to safety and hygiene, and a genuine passion for creating unforgettable dining experiences. Every chef on our roster has a minimum of 5 years of professional experience, holds internationally recognized certifications, and shares our dedication to excellence.
                </p>
                <p>
                  Today, MyChef.ae is proud to serve clients throughout the United Arab Emirates, offering everything from romantic dinners for two to grand celebrations for 50+ guests. We've mastered the art of understanding Dubai's diverse, cosmopolitan palate – whether you're craving authentic Emirati cuisine, contemporary European fare, or exotic Asian fusion.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px]"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                alt="Chef preparing gourmet meal"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Core <span className="text-primary italic">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every service we deliver across Dubai and the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Our <span className="text-primary italic">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              To transform every home in Dubai and the UAE into a world-class dining destination by connecting clients with exceptional chefs who bring passion, expertise, and personalized service to your kitchen. We're committed to making luxury dining accessible, convenient, and unforgettable – one meal at a time.
            </p>
            <Button
              className="bg-black hover:bg-neutral-800 text-white px-12 py-6 text-lg rounded-none"
              onClick={() => window.location.href = "/#contact"}
            >
              BOOK YOUR CHEF TODAY
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
