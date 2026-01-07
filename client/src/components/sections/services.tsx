import { motion } from "framer-motion";
import intimateImg from "@assets/generated_images/romantic_dinner_setting_dubai_marina.png";
import partyImg from "@assets/generated_images/luxury_villa_food_spread.png";

const services = [
  {
    title: "Intimate Dinners",
    description: "Personalized for couples with candlelit setups. Perfect for anniversaries or romantic evenings.",
    image: intimateImg,
    features: ["Candlelit Setup", "Premium Ingredients", "Wine Pairing (Optional)"]
  },
  {
    title: "Villa Parties",
    description: "Vibrant spreads for up to 50 guests. Ideal for family gatherings and celebrations.",
    image: partyImg,
    features: ["Buffet or Plated", "Live Cooking Stations", "Cleanup Included"]
  },
  {
    title: "Cooking Classes",
    description: "Learn Emirati favorites like machboos directly from our expert chefs in your kitchen.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000",
    features: ["Hands-on Learning", "Recipe Cards", "Eat What You Cook"]
  },
  {
    title: "Weekly Meal Prep",
    description: "Healthy, balanced options tailored to your diet for busy professional lifestyles.",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000",
    features: ["Macro-Calculated", "Fresh Containers", "Diverse Menu"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
            Tailored Culinary <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether it's a family brunch, corporate event, or wedding feast, our chefs craft menus featuring Middle Eastern, Italian, Indian, and fusion cuisines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform transition-transform duration-500">
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-white/80 mb-6 max-w-md group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
