import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black leading-tight">
              Your Premier Private <br />
              <span className="text-primary italic">Chef Service</span> in the UAE
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Established in 2012, myCHEF.ae specializes in premium private chef experiences across Dubai and Abu Dhabi. 
              We connect certified professionals with clients seeking convenience and luxury in areas like Palm Jumeirah, 
              Dubai Marina, Jumeirah, and Downtown Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "HACCP Certified Chefs",
                "5+ Years Experience",
                "100% Halal Options",
                "Full Insurance Coverage",
                "Money-back Guarantee",
                "Transparent Pricing"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="font-medium text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="h-64 bg-gray-100 w-full overflow-hidden rounded-sm">
                   {/* Placeholder for About Image 1 - using a div for now or I can reuse an image */}
                   <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                     <span className="text-xs uppercase tracking-widest">Fine Ingredients</span>
                   </div>
                </div>
                <div className="h-48 bg-gray-900 w-full overflow-hidden rounded-sm flex items-center justify-center text-white p-8 text-center">
                    <div>
                        <span className="block text-4xl font-heading font-bold text-primary mb-2">12+</span>
                        <span className="text-sm tracking-widest uppercase opacity-80">Years Excellence</span>
                    </div>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="h-48 bg-primary/10 w-full overflow-hidden rounded-sm flex items-center justify-center p-8 text-center">
                    <div className="text-black">
                        <span className="block text-4xl font-heading font-bold mb-2">500+</span>
                        <span className="text-sm tracking-widest uppercase opacity-80">Events Hosted</span>
                    </div>
                 </div>
                 <div className="h-80 bg-gray-100 w-full overflow-hidden rounded-sm">
                   {/* Placeholder for About Image 2 */}
                   <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500">
                     <span className="text-xs uppercase tracking-widest">Master Chefs</span>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
