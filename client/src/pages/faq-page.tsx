import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What is MyChef.ae and how does it work?",
          answer: "MyChef.ae is Dubai's premier private chef service. We connect you with professional, certified chefs who come to your home, villa, or event venue to prepare restaurant-quality meals. Simply contact us via WhatsApp, tell us your preferences, receive menu proposals within 10 minutes, plan with your matched chef, secure your booking with a 50% deposit, and enjoy a world-class dining experience in the comfort of your space."
        },
        {
          question: "Which areas in Dubai and UAE do you serve?",
          answer: "We provide services across all major Dubai locations including Dubai Marina, Palm Jumeirah, Downtown Dubai, JBR (Jumeirah Beach Residence), Business Bay, DIFC, Arabian Ranches, Emirates Hills, Jumeirah (1, 2, 3), Mirdif, Al Barsha, Umm Suqeim, The Springs, The Meadows, Motor City, JLT (Jumeirah Lakes Towers), Discovery Gardens, and more. We also serve Abu Dhabi, Sharjah, and Ajman. If you're located elsewhere in the UAE, contact us – we'll do our best to accommodate you!"
        },
        {
          question: "How far in advance should I book?",
          answer: "For intimate dinners and small gatherings (2-10 people), we recommend booking at least 48 hours in advance to ensure chef availability and proper menu planning. For larger villa parties (20+ guests) or special events, we suggest 1-2 weeks advance notice. For cooking classes and weekly meal prep subscriptions, 3-5 days notice is ideal. However, we understand last-minute needs – contact us and we'll try our best to accommodate same-day or next-day requests based on chef availability."
        },
        {
          question: "Are all your chefs certified and insured?",
          answer: "Absolutely. Every chef in our network is HACCP certified (Hazard Analysis Critical Control Points for food safety), holds a minimum of 5 years professional culinary experience, and has been thoroughly vetted through background checks. All chefs are covered by comprehensive insurance policies. Your safety, security, and peace of mind are our highest priorities."
        },
        {
          question: "What cuisines do your chefs specialize in?",
          answer: "Our diverse team of 50+ chefs covers virtually every global cuisine. Popular options include: Middle Eastern & Emirati (machboos, harees, kabsa), Italian (pasta, risotto, pizza), Japanese (sushi, teppanyaki), French fine dining, Indian (North & South Indian, tandoori), Chinese & Asian Fusion, Mediterranean, American BBQ, Mexican, Thai, Korean, and more. All meals can be prepared 100% halal-compliant if requested."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      faqs: [
        {
          question: "How much does a private chef cost in Dubai?",
          answer: "Our pricing starts from AED 200 per hour for the chef's service. For intimate dinners (2-4 people), expect AED 800-1,200 for a 3-4 hour experience. Villa parties start at AED 150 per person (minimum 10 guests). Cooking classes begin at AED 1,200 for a 2-hour session. Weekly meal prep starts at AED 1,800 per week for 15 meals. Final costs depend on menu complexity, number of guests, service duration, and ingredient choices. We provide transparent quotes upfront – no hidden fees."
        },
        {
          question: "Are ingredients included in the price?",
          answer: "No, our service fee covers the chef's time, expertise, menu planning, cooking, service, and cleanup. Ingredient costs are separate and billed at actual cost based on your specific menu selections. Your chef will shop for premium, fresh ingredients and provide you with itemized receipts. This transparent model ensures you get exactly what you want without paying markup on groceries. Average ingredient costs: AED 500-800 for 4 people, AED 1,500-2,500 for larger parties."
        },
        {
          question: "How do payments work?",
          answer: "To secure your booking, we require a 50% deposit of the estimated total (chef service + approximate ingredient cost). This can be paid via bank transfer, credit card, or online payment. The remaining 50% balance is due after your event, once you've received the final ingredient receipts. We accept cash, bank transfer, credit cards (Visa, Mastercard, Amex), and digital wallets. Payment plans available for large events and weekly meal prep subscriptions."
        },
        {
          question: "Do you offer refunds or cancellations?",
          answer: "Cancellations made 72+ hours before your event receive a full refund minus a 10% processing fee. Cancellations 24-72 hours prior receive a 50% refund. Cancellations within 24 hours are non-refundable due to ingredient purchases and chef scheduling. However, you can reschedule once without penalty if done at least 48 hours in advance. We also offer a money-back satisfaction guarantee – if you're not completely satisfied with your experience, we'll work to make it right."
        },
        {
          question: "Are there any additional fees I should know about?",
          answer: "Our quoted prices are transparent and comprehensive. The only potential additional costs would be: (1) Specialty equipment rentals if needed (BBQ grills, table linens, extra dinnerware) – we coordinate at cost, (2) Waitstaff for large events (AED 150-200 per server), (3) Travel fees for locations outside Dubai (Abu Dhabi, Ajman, etc.), and (4) Premium/imported ingredients if specifically requested. All additional costs are communicated upfront during planning – no surprise charges."
        }
      ]
    },
    {
      category: "Food & Menu Planning",
      faqs: [
        {
          question: "Can you accommodate dietary restrictions and allergies?",
          answer: "Yes, absolutely! Our chefs are extensively trained to handle all dietary requirements including: allergies (nuts, shellfish, dairy, gluten, soy, eggs), medical conditions (diabetes, celiac disease), religious requirements (halal, kosher), and lifestyle preferences (vegan, vegetarian, pescatarian, keto, paleo, low-carb, whole30). During menu planning, we thoroughly discuss all restrictions and cross-contamination protocols to ensure safe, delicious meals for everyone."
        },
        {
          question: "How are menus created?",
          answer: "After booking, you'll have a detailed WhatsApp or phone consultation with your assigned chef. You'll discuss: preferred cuisines, favorite dishes, ingredients you love/dislike, dietary needs, portion sizes, course structure (appetizers, mains, desserts), plating style, and service timing. Your chef will then create 2-3 custom menu proposals for you to review and refine. The final menu is confirmed 2-3 days before your event. You're in full creative control!"
        },
        {
          question: "Can I request specific dishes or recipes?",
          answer: "Absolutely! If you have a favorite restaurant dish, a recipe from a special trip, or a family recipe you'd like recreated, just share it with your chef. Our team loves culinary challenges and can replicate or put their own twist on almost any dish. We've recreated everything from Nobu's black cod miso to grandma's secret biryani recipe. If it's edible, we can make it happen!"
        },
        {
          question: "Is all food halal-certified?",
          answer: "Yes, we can guarantee 100% halal ingredients for all meals if requested. Our chefs source from certified halal butchers and suppliers across Dubai. We understand the importance of halal compliance for our clients and have strict protocols to ensure no cross-contamination. If halal certification is important to you, simply mention it during booking and we'll ensure complete compliance."
        },
        {
          question: "What if I have picky eaters or children?",
          answer: "No problem! Our chefs are experienced with diverse palates and age groups. We can prepare separate kid-friendly dishes (pasta, grilled chicken, mild curries) while creating sophisticated flavors for adults. We're also skilled at making vegetables and healthy foods appealing to children. Just let us know ages and preferences during planning, and we'll create a menu that satisfies everyone at the table."
        }
      ]
    },
    {
      category: "Logistics & Setup",
      faqs: [
        {
          question: "Do I need to provide kitchen equipment?",
          answer: "Our chefs come prepared with professional-grade knives, specialty tools, and small equipment. They'll use your home's standard appliances (stove, oven, refrigerator, microwave). If your menu requires specialty equipment you don't have (pasta maker, sous vide, BBQ grill, wok burner), we can arrange rentals or adjust the menu accordingly. For villa parties, we can coordinate full equipment rentals including chafing dishes, serving platters, and portable cooking stations."
        },
        {
          question: "What about cleanup and dishes?",
          answer: "Complete kitchen cleanup is included in every service! Your chef will: wash all cookware and utensils used, wipe down all surfaces and countertops, clean the stove and oven, take out garbage, organize your kitchen back to its original state. For intimate dinners, guest dishes/glassware cleanup is included. For large parties, we can provide additional cleaning staff if needed. You'll return to a spotless kitchen – guaranteed."
        },
        {
          question: "How long does the chef stay?",
          answer: "Service duration depends on your package: Intimate dinners typically run 3-4 hours (arrival, prep, cooking, plating, serving, cleanup). Villa parties are usually 4-6 hours depending on guest count and service style. Cooking classes are 2-3 hours. Meal prep sessions run 3-5 hours depending on meal quantity. Your chef stays until all cooking, service, and cleanup are complete – we never rush."
        },
        {
          question: "Can the chef serve the food or do I need waitstaff?",
          answer: "For intimate dinners (2-8 people), your chef will handle elegant plating and table service between courses. For larger gatherings (10+ guests), we can provide professional waitstaff (AED 150-200 per server) to handle table service, beverage refills, and plate clearing while the chef focuses on cooking. Buffet-style events typically don't require extra staff. We'll recommend the best setup during planning."
        },
        {
          question: "What if I live in an apartment with a small kitchen?",
          answer: "No problem! Our chefs are skilled at working in kitchens of all sizes – from compact Dubai Marina apartments to sprawling Emirates Hills villas. We adapt our prep techniques and timing to your space. For very small kitchens, we can prep some components off-site and finish cooking at your home. Size doesn't limit the quality of your experience – we've created 5-course fine dining meals in studio apartments!"
        }
      ]
    },
    {
      category: "Booking & Experience",
      faqs: [
        {
          question: "How do I book a private chef?",
          answer: "Booking is simple: (1) Contact us via WhatsApp at +971 4 123 4567 or fill out our website contact form, (2) Tell us your event date, guest count, and preferences, (3) Receive AI-matched chef profiles and menu proposals within 10 minutes, (4) Have a consultation call with your assigned chef to finalize details, (5) Confirm your booking with a 50% deposit. That's it! We handle all the logistics from there."
        },
        {
          question: "Can I meet my chef before the event?",
          answer: "While most planning happens via WhatsApp and phone for convenience, we absolutely encourage meeting your chef beforehand if you'd like! For large events or if you're a first-time client, we can arrange a pre-event meeting at a café or your home to discuss the menu in person and build rapport. Many of our regular clients develop long-term relationships with their favorite chefs."
        },
        {
          question: "What happens if my chef gets sick or can't make it?",
          answer: "In the rare event of chef illness or emergency, we immediately assign an equally qualified replacement chef from our network. You'll be contacted right away, the new chef will review your menu plan, and your event proceeds seamlessly. We've never cancelled an event due to chef availability – your experience is guaranteed. This is one of the many benefits of working with an agency rather than an individual chef."
        },
        {
          question: "Do you cater corporate events or office lunches?",
          answer: "Yes! We regularly cater corporate events, office lunches, client dinners, team-building cooking classes, and executive gatherings across Dubai's business districts (DIFC, Business Bay, Dubai Marina, Downtown). We handle events from 10 to 200+ people with customized corporate packages, dietary accommodation management, and professional presentation. Contact us for volume discounts and recurring corporate arrangements."
        },
        {
          question: "Can I book the same chef for regular weekly service?",
          answer: "Absolutely! Many of our clients book the same chef for weekly meal prep, weekly family dinners, or regular date nights. We offer discounted rates for recurring bookings and you'll build a relationship with your chef who learns your exact preferences over time. It's like having a personal chef on retainer – ultimate convenience without the full-time commitment. Ask about our VIP client programs."
        }
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
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000"
            alt="FAQ - Private Chef Dubai"
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
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Everything You Need to Know About Private Chef Services in Dubai
          </p>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-8 pb-4 border-b-2 border-primary/20">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${catIndex}-${index}`}
                      className="bg-neutral-50 border border-neutral-200 px-6 hover:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-heading font-medium text-lg py-6 hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Still Have <span className="text-primary italic">Questions?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Our team is available 7 days a week to answer any questions about private chef services in Dubai. Contact us via WhatsApp for instant responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-none"
                onClick={() => window.open('https://wa.me/971412341567', '_blank')}
              >
                CHAT ON WHATSAPP
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-none"
                onClick={() => window.location.href = "/#contact"}
              >
                SEND US A MESSAGE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
