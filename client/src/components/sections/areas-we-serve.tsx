import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

export function AreasWeServe() {
  const areas = [
    {
      category: "Premium Dubai Locations",
      locations: [
        "Palm Jumeirah",
        "Dubai Marina",
        "Downtown Dubai",
        "Emirates Hills",
        "Jumeirah Beach Residence (JBR)",
        "DIFC (Dubai International Financial Centre)",
        "Business Bay",
        "City Walk"
      ]
    },
    {
      category: "Residential Communities",
      locations: [
        "Arabian Ranches",
        "The Springs",
        "The Meadows",
        "Jumeirah (1, 2, 3)",
        "Umm Suqeim",
        "Al Barsha",
        "Mirdif",
        "Motor City"
      ]
    },
    {
      category: "Additional Areas",
      locations: [
        "Jumeirah Lakes Towers (JLT)",
        "Discovery Gardens",
        "Dubai Sports City",
        "Dubai Hills Estate",
        "Al Safa",
        "Al Wasl",
        "Deira",
        "Bur Dubai"
      ]
    },
    {
      category: "Beyond Dubai",
      locations: [
        "Abu Dhabi",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Fujairah",
        "Al Ain"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4" />
              <span>Service Coverage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              Areas We <span className="text-primary italic">Serve</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bringing world-class private chef services to homes, villas, and venues across the UAE. Whether you're in a luxury penthouse in Downtown Dubai or a beachfront villa in Palm Jumeirah, our chefs are ready to serve you.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-heading font-bold mb-4 text-black pb-3 border-b border-primary/20">
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.locations.map((location, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{location}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/10 border border-primary/20 p-8 max-w-3xl mx-auto">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3">Don't See Your Area?</h3>
            <p className="text-muted-foreground mb-6">
              We regularly expand our service coverage across the UAE. If your location isn't listed above, contact us – we'll do our best to accommodate your request and may offer service to your area with advance notice.
            </p>
            <a
              href="https://wa.me/971412341567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-neutral-800 text-white px-8 py-3 font-medium tracking-wide transition-colors"
            >
              CONTACT US ON WHATSAPP
            </a>
          </div>
        </motion.div>

        {/* Service Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Neighborhoods Served</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Booking Support</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Satisfaction Guaranteed</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
