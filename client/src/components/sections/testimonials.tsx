import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Exceptional halal fusion menu for our Eid gathering in Jumeirah. The chef understood our cultural requirements perfectly and the food was absolutely divine. Every guest asked for the chef's contact!",
    author: "Ahmed A.",
    rating: 5,
    location: "Jumeirah 1"
  },
  {
    text: "Perfect for our yacht party in Dubai Marina. The chefs exceeded all expectations with fresh seafood and impeccable presentation. Worth every dirham!",
    author: "Sarah K.",
    rating: 5,
    location: "Dubai Marina"
  },
  {
    text: "A truly luxurious experience for our anniversary. The chef was professional, the 7-course menu was restaurant-quality, and our kitchen was spotless after. We'll be booking again!",
    author: "James W.",
    rating: 5,
    location: "Palm Jumeirah"
  },
  {
    text: "Used their weekly meal prep service for 3 months now. Macro-calculated, delicious, and saves me hours every week. Best decision for my fitness journey!",
    author: "Fatima R.",
    rating: 5,
    location: "Downtown Dubai"
  },
  {
    text: "Hired MyChef for our company's Ramadan iftar event. 50 guests, multiple dietary restrictions, and they handled everything flawlessly. The team was so professional!",
    author: "Mohammed S.",
    rating: 5,
    location: "Business Bay"
  },
  {
    text: "The cooking class was incredible! Learned to make authentic Emirati machboos in my own kitchen. Chef Khalid was patient, knowledgeable, and made it so fun.",
    author: "Lisa M.",
    rating: 5,
    location: "JBR"
  },
  {
    text: "Booked for my wife's birthday dinner at our villa in Arabian Ranches. The French menu was exquisite - better than most restaurants in Dubai. She was thrilled!",
    author: "David L.",
    rating: 5,
    location: "Arabian Ranches"
  },
  {
    text: "As a busy executive, the weekly meal prep service is a lifesaver. Fresh, healthy, perfectly portioned meals delivered to my apartment. No more takeout!",
    author: "Priya K.",
    rating: 5,
    location: "DIFC"
  },
  {
    text: "The sushi chef they sent was phenomenal! Omakase-style dinner for 6 people in our Emirates Hills home. Felt like we were at Zuma but in our own dining room.",
    author: "Robert T.",
    rating: 5,
    location: "Emirates Hills"
  },
  {
    text: "Booked for our daughter's first birthday party. Indian and Arabic fusion menu that pleased everyone. The live dosa station was a hit with kids and adults!",
    author: "Aisha H.",
    rating: 5,
    location: "Mirdif"
  },
  {
    text: "Weekly Italian pasta night has become our family tradition thanks to MyChef. Chef Marco comes every Friday and my kids love watching him make fresh pasta!",
    author: "Francesca B.",
    rating: 5,
    location: "The Springs"
  },
  {
    text: "Perfect service for our intimate engagement dinner. The chef created a custom menu based on our first date. So thoughtful and the food was exceptional!",
    author: "Noura & Khalid",
    rating: 5,
    location: "City Walk"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 text-primary">
            <span className="text-white font-medium">4.9/5 Excellent</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white/60 text-sm">(487+ reviews)</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col justify-between backdrop-blur-sm">
                    <div className="mb-6">
                      <div className="flex gap-1 mb-4 text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg font-heading italic leading-relaxed text-white/90">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                      <span className="font-bold">{testimonial.author}</span>
                      <span className="text-sm text-white/50">{testimonial.location}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary -left-12" />
              <CarouselNext className="bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary -right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
