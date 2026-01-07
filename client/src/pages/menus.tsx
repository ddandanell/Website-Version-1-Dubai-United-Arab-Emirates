import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChefHat, Leaf, Flame, Globe } from "lucide-react";

export default function MenusPage() {
  const cuisineCategories = [
    {
      id: "middle-eastern",
      name: "Middle Eastern & Emirati",
      icon: "🌙",
      description: "Authentic flavors from the Gulf and Levant regions, featuring traditional spices, slow-cooked meats, and aromatic rice dishes",
      dishes: [
        { name: "Machboos (Spiced Rice with Lamb/Chicken)", price: "AED 150-200 (serves 4)" },
        { name: "Harees (Wheat & Meat Porridge)", price: "AED 120 (serves 4)" },
        { name: "Kabsa with Saffron Rice", price: "AED 180 (serves 4)" },
        { name: "Mixed Mezze Platter (Hummus, Moutabal, Tabbouleh)", price: "AED 80" },
        { name: "Lamb Ouzi (Stuffed Lamb Shoulder)", price: "AED 350 (serves 6-8)" },
        { name: "Grilled Hammour with Tahini", price: "AED 200 (serves 4)" },
        { name: "Shawarma Station (Chicken & Beef)", price: "AED 120/person" },
        { name: "Arabic Coffee & Date Service", price: "AED 50" }
      ]
    },
    {
      id: "italian",
      name: "Italian Classics",
      icon: "🍝",
      description: "From handmade pasta to wood-fired pizzas and regional specialties from Sicily to Tuscany",
      dishes: [
        { name: "Fresh Burrata with Heirloom Tomatoes", price: "AED 90" },
        { name: "Homemade Tagliatelle Bolognese", price: "AED 120 (serves 4)" },
        { name: "Risotto ai Funghi Porcini", price: "AED 140 (serves 4)" },
        { name: "Osso Buco alla Milanese", price: "AED 250 (serves 4)" },
        { name: "Wood-Fired Margherita Pizza (if equipment available)", price: "AED 60 each" },
        { name: "Seafood Linguine with Fresh Lobster", price: "AED 280 (serves 4)" },
        { name: "Tiramisu (Classic or Pistachio)", price: "AED 80" },
        { name: "Panna Cotta with Berry Compote", price: "AED 60" }
      ]
    },
    {
      id: "japanese",
      name: "Japanese & Asian Fusion",
      icon: "🍱",
      description: "Precision and artistry meet in sushi, sashimi, teppanyaki, and contemporary Asian fusion creations",
      dishes: [
        { name: "Chef's Omakase Sushi Selection (12 pieces)", price: "AED 180/person" },
        { name: "Premium Sashimi Platter (Tuna, Salmon, Yellowtail)", price: "AED 220" },
        { name: "Dragon Roll (Eel, Avocado, Cucumber)", price: "AED 85" },
        { name: "Wagyu Beef Teppanyaki", price: "AED 320 (serves 2)" },
        { name: "Miso Black Cod (Nobu-style)", price: "AED 180" },
        { name: "Chicken Teriyaki Bento Box", price: "AED 70/person" },
        { name: "Ramen (Tonkotsu, Miso, or Shoyu)", price: "AED 65/bowl" },
        { name: "Matcha Cheesecake", price: "AED 70" }
      ]
    },
    {
      id: "indian",
      name: "Indian Subcontinent",
      icon: "🌶️",
      description: "Vibrant curries, tandoori specialties, and biryani from North and South India, Pakistan, and beyond",
      dishes: [
        { name: "Tandoori Mixed Grill (Chicken, Lamb, Prawns)", price: "AED 180 (serves 4)" },
        { name: "Butter Chicken with Naan", price: "AED 120 (serves 4)" },
        { name: "Lamb Rogan Josh", price: "AED 150 (serves 4)" },
        { name: "Hyderabadi Biryani (Chicken/Mutton/Veg)", price: "AED 140 (serves 4)" },
        { name: "Palak Paneer with Garlic Naan", price: "AED 90 (serves 4)" },
        { name: "Goan Fish Curry with Coconut Rice", price: "AED 160 (serves 4)" },
        { name: "South Indian Dosa & Sambar Station", price: "AED 80/person" },
        { name: "Gulab Jamun & Ras Malai Dessert Platter", price: "AED 60" }
      ]
    },
    {
      id: "french",
      name: "French Fine Dining",
      icon: "🥖",
      description: "Classical French technique meets modern presentation in elegant, refined dishes",
      dishes: [
        { name: "French Onion Soup Gratinée", price: "AED 60" },
        { name: "Escargots de Bourgogne", price: "AED 95" },
        { name: "Pan-Seared Foie Gras with Fig Reduction", price: "AED 180" },
        { name: "Beef Bourguignon", price: "AED 200 (serves 4)" },
        { name: "Coq au Vin with Roasted Vegetables", price: "AED 160 (serves 4)" },
        { name: "Dover Sole Meunière", price: "AED 220 (serves 2)" },
        { name: "Crème Brûlée Trio (Vanilla, Lavender, Chocolate)", price: "AED 80" },
        { name: "Tarte Tatin with Vanilla Ice Cream", price: "AED 70" }
      ]
    },
    {
      id: "international",
      name: "International & Fusion",
      icon: "🌎",
      description: "Global flavors and creative fusion dishes spanning American, Mexican, Mediterranean, and more",
      dishes: [
        { name: "USDA Prime Ribeye Steak (300g)", price: "AED 180" },
        { name: "BBQ Ribs with Bourbon Glaze", price: "AED 150 (serves 4)" },
        { name: "Lobster Thermidor", price: "AED 280 (serves 2)" },
        { name: "Tacos al Pastor Station", price: "AED 90/person" },
        { name: "Mediterranean Grilled Octopus", price: "AED 140" },
        { name: "Thai Green Curry with Jasmine Rice", price: "AED 110 (serves 4)" },
        { name: "Korean BBQ Short Ribs (Galbi)", price: "AED 170 (serves 4)" },
        { name: "New York Cheesecake", price: "AED 75" }
      ]
    }
  ];

  const sampleMenus = [
    {
      name: "Romantic Dinner for 2",
      price: "AED 1,400 total (approx.)",
      courses: [
        "Amuse-bouche: Oyster with champagne mignonette",
        "Starter: Pan-seared scallops with truffle cauliflower purée",
        "Intermediate: Lobster bisque",
        "Main: Wagyu tenderloin with foie gras butter, seasonal vegetables",
        "Dessert: Molten chocolate lava cake with vanilla bean ice cream",
        "Petit fours & coffee/tea service"
      ]
    },
    {
      name: "Family Gathering (8 people)",
      price: "AED 2,800 total (approx.)",
      courses: [
        "Appetizers: Mixed mezze platter, bruschetta, spring rolls",
        "Salad: Caesar salad with grilled prawns",
        "Main 1: Slow-roasted lamb shoulder with machboos rice",
        "Main 2: Grilled salmon with lemon butter sauce",
        "Sides: Roasted vegetables, Arabic bread selection",
        "Dessert: Tiramisu & Arabic sweets platter"
      ]
    },
    {
      name: "Corporate Lunch (20 people)",
      price: "AED 6,000 total (approx.)",
      courses: [
        "Welcome drinks & canapés (3 varieties)",
        "Buffet: Grilled chicken, beef kebabs, grilled fish",
        "Sides: Saffron rice, pasta salad, fattoush, hummus bar",
        "Live cooking station: Fresh pasta or shawarma",
        "Dessert: Assorted mini desserts, fresh fruit platter",
        "Coffee, tea, fresh juices"
      ]
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
            alt="Menu samples Dubai private chef"
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
            Sample <span className="text-primary italic">Menus</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Explore Our Culinary Repertoire – Every Menu is Fully Customizable
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            These sample dishes and menus showcase the breadth of our culinary expertise across Dubai. All prices are estimates for ingredients + service and can be customized to your budget, dietary needs, and preferences. Your chef will work with you to create the perfect menu for your occasion.
          </p>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Cuisines We <span className="text-primary italic">Master</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Browse by cuisine type to see sample dishes. Remember, these are just examples – our chefs can create anything you desire!
            </p>
          </div>

          <Tabs defaultValue="middle-eastern" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-12 bg-transparent gap-2 h-auto">
              {cuisineCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border border-neutral-200"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {cuisineCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 md:p-12 max-w-5xl mx-auto"
                >
                  <h3 className="text-3xl font-heading font-bold mb-4">{category.name}</h3>
                  <p className="text-muted-foreground mb-8 text-lg">{category.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.dishes.map((dish, index) => (
                      <div key={index} className="border-b border-neutral-200 pb-4">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-heading font-medium text-lg">{dish.name}</h4>
                          <span className="text-primary font-bold text-sm whitespace-nowrap">{dish.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 bg-primary/5 p-6 border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> All dishes can be prepared 100% halal-compliant. Prices shown are ingredient estimates for the specified serving sizes. Final costs depend on premium ingredient choices and market prices. Chef service fee (AED 200/hour) is separate.
                    </p>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sample Full Menus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Sample <span className="text-primary italic">Full Menus</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete menu examples for different occasions across Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sampleMenus.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-8 border border-neutral-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-heading font-bold mb-3">{menu.name}</h3>
                <div className="text-primary font-bold text-xl mb-6">{menu.price}</div>

                <div className="space-y-3">
                  {menu.courses.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChefHat className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Special <span className="text-primary italic">Dietary Options</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Leaf, title: "Vegan & Vegetarian", desc: "Plant-based menus with global flavors" },
              { icon: Flame, title: "Keto & Low-Carb", desc: "High-protein, healthy fats, minimal carbs" },
              { icon: Globe, title: "Gluten-Free", desc: "Celiac-safe dishes without compromise" },
              { icon: ChefHat, title: "Allergy-Friendly", desc: "Custom menus for any restriction" }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-8 border border-neutral-200"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Create <span className="text-primary italic">Your Menu?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contact us today to discuss your perfect menu with one of our expert chefs in Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-none"
                onClick={() => window.location.href = "/#contact"}
              >
                REQUEST CUSTOM MENU
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-none"
                onClick={() => window.open('https://wa.me/971412341567', '_blank')}
              >
                WHATSAPP US
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
