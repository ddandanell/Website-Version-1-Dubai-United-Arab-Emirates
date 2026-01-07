import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/chef_plating_gourmet_dish_in_luxury_villa.png";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
        <img
          src={heroImage}
          alt="Private Chef Plating Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <span className="inline-block py-1 px-3 border border-white/30 text-white/80 text-sm tracking-[0.2em] uppercase backdrop-blur-sm">
            Dubai's Premier Private Chef Service
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            Elevate Your <span className="text-primary italic">Dining</span> <br />
            Experience at Home
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Discover bespoke culinary journeys delivered to your villa or yacht. 
            From intimate iftars to grand celebrations, our vetted chefs create restaurant-quality meals tailored to your preferences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg tracking-wide min-w-[200px]"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              BOOK YOUR CHEF
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg tracking-wide min-w-[200px]"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW MENUS
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
