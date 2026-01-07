import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChefHat, Users, GraduationCap, Utensils, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      id: "intimate-dinners",
      icon: ChefHat,
      title: "Intimate Dinners",
      tagline: "Romance in Every Bite",
      description: "Transform your Dubai apartment or villa into an intimate fine-dining restaurant with our bespoke private chef service for couples.",
      longDescription: "Whether you're celebrating an anniversary, planning a proposal, or simply want to enjoy a romantic evening without the hassle of restaurant reservations, our intimate dinner service brings Michelin-quality cuisine to your home. Perfect for residents across Palm Jumeirah, Dubai Marina, Downtown Dubai, and beyond.",
      features: [
        "Personalized menu consultation via WhatsApp",
        "Candlelit table setup with premium tableware",
        "Multi-course tasting menus (3-7 courses)",
        "Wine and beverage pairing recommendations",
        "Live cooking presentation (optional)",
        "Dietary accommodations (gluten-free, vegan, keto)",
        "Full kitchen cleanup included",
        "Photography-ready plating"
      ],
      cuisines: ["French Fine Dining", "Italian Classics", "Japanese Omakase", "Modern Emirati", "Fusion Contemporary"],
      pricing: "From AED 800 for 2 people (3-hour service)",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000",
      areas: "Available in: Dubai Marina, Palm Jumeirah, Downtown Dubai, JBR, Business Bay, DIFC"
    },
    {
      id: "villa-parties",
      icon: Users,
      title: "Villa Parties & Events",
      tagline: "Celebrations Made Effortless",
      description: "Host unforgettable gatherings for 10-50 guests with full-service catering, live cooking stations, and professional event support.",
      longDescription: "From family brunches in Arabian Ranches to corporate events in Emirates Hills, birthday celebrations in Jumeirah, or Eid gatherings on Palm Jumeirah – our villa party service handles everything. We bring the restaurant experience to your venue with buffet setups, plated service, or interactive live cooking stations.",
      features: [
        "Customized menu for 10-50+ guests",
        "Buffet, plated service, or family-style options",
        "Live cooking stations (pasta, BBQ, sushi, shawarma)",
        "Professional waitstaff available",
        "Rental coordination (tables, chairs, linens)",
        "Halal-certified ingredients guaranteed",
        "Full event planning assistance",
        "Setup, service, and complete cleanup"
      ],
      cuisines: ["Middle Eastern Mezze", "International Buffets", "BBQ & Grills", "Asian Fusion", "Italian Feasts"],
      pricing: "From AED 150/person (minimum 10 guests)",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000",
      areas: "Serving: Arabian Ranches, Emirates Hills, Jumeirah, Mirdif, Al Barsha, Umm Suqeim"
    },
    {
      id: "cooking-classes",
      icon: GraduationCap,
      title: "Private Cooking Classes",
      tagline: "Learn from the Masters",
      description: "Master Emirati classics, Italian pasta-making, Japanese sushi rolling, or French pastry techniques with hands-on instruction in your kitchen.",
      longDescription: "Our private cooking classes bring culinary education directly to your Dubai home. Perfect for team-building events, family bonding, date nights, or personal skill development. Each class is tailored to your experience level and includes recipe cards, ingredient sourcing tips, and of course – eating what you create!",
      features: [
        "2-3 hour hands-on sessions",
        "Expert chef instructor (5+ years experience)",
        "All ingredients and equipment provided",
        "Personalized recipe cards to keep",
        "Cultural insights and cooking tips",
        "Suitable for all skill levels",
        "Group classes available (up to 8 people)",
        "Enjoy your creations together"
      ],
      cuisines: ["Emirati Traditional (Machboos, Harees)", "Italian Pasta & Pizza", "Japanese Sushi", "French Pastries", "Indian Curries"],
      pricing: "From AED 1,200 for 2-hour class (1-4 people)",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000",
      areas: "Available across all Dubai and Abu Dhabi locations"
    },
    {
      id: "meal-prep",
      icon: Utensils,
      title: "Weekly Meal Prep",
      tagline: "Healthy Eating, Simplified",
      description: "Macro-calculated, chef-prepared meals delivered to your fridge weekly. Perfect for busy professionals, fitness enthusiasts, and families.",
      longDescription: "Say goodbye to daily cooking stress and unhealthy takeout. Our weekly meal prep service provides nutritionally balanced, delicious meals tailored to your dietary goals. Each week, a chef visits your home to prepare 5-7 days of breakfasts, lunches, and dinners – all stored in premium containers, labeled, and ready to heat and eat.",
      features: [
        "Customized meal plans (weight loss, muscle gain, maintenance)",
        "Macro-calculated nutrition (protein, carbs, fats)",
        "Fresh ingredients, no preservatives",
        "Labeled containers with heating instructions",
        "Accommodates allergies and preferences",
        "Keto, paleo, vegan, vegetarian options",
        "Weekly menu rotation for variety",
        "Flexible subscription (weekly, bi-weekly)"
      ],
      cuisines: ["Lean Proteins & Grains", "Mediterranean Diet", "Asian-Inspired Bowls", "Low-Carb Keto", "Plant-Based Vegan"],
      pricing: "From AED 1,800/week (15 meals for 1 person)",
      image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000",
      areas: "Weekly service available in: Dubai Marina, JBR, DIFC, Business Bay, Downtown Dubai"
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
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000"
            alt="Professional chef services in Dubai"
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
            Our <span className="text-primary italic">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Tailored Culinary Experiences Across Dubai & UAE
          </p>
        </motion.div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-32 last:mb-0 ${index % 2 === 1 ? 'bg-neutral-50' : ''} ${index % 2 === 1 ? 'py-16 -mx-4 px-4 md:-mx-12 md:px-12' : ''}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover shadow-2xl"
                    />
                    <div className="absolute top-6 left-6 bg-primary px-6 py-3">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest mb-4">
                      <service.icon className="w-4 h-4" />
                      <span>Premium Service</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-primary italic font-heading mb-6">
                      {service.tagline}
                    </p>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-heading font-bold text-lg mb-4">What's Included:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/5 p-6 mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-heading font-bold text-black">
                          {service.pricing.split('(')[0]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {service.pricing.includes('(') && `(${service.pricing.split('(')[1]}`}
                      </p>
                    </div>

                    <Button
                      className="bg-black hover:bg-neutral-800 text-white px-8 py-6 rounded-none group"
                      onClick={() => window.location.href = "/#contact"}
                    >
                      BOOK THIS SERVICE
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Not Sure Which Service <span className="text-primary italic">Fits You?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contact us via WhatsApp for a personalized consultation. We'll match you with the perfect chef and service for your needs in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-none"
                onClick={() => window.open('https://wa.me/971412341567', '_blank')}
              >
                WHATSAPP US NOW
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-none"
                onClick={() => window.location.href = "/#contact"}
              >
                REQUEST A QUOTE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
