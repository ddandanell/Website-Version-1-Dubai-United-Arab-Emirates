import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              Transparent & <br />
              <span className="text-primary italic">Flexible Rates</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe in complete transparency. Our service fee covers the chef's expertise, preparation, cooking, service, and cleanup. Ingredient costs are handled separately based on your specific menu choices.
            </p>
            
            <div className="bg-neutral-50 p-8 border border-neutral-100">
              <h4 className="font-heading font-bold text-xl mb-4">Example Breakdown</h4>
              <p className="text-sm text-muted-foreground mb-4">For a 4-hour dinner for 4 people:</p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-dashed border-neutral-200 pb-2">
                  <span>Chef Service (4 hours)</span>
                  <span className="font-bold">AED 800</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-neutral-200 pb-2">
                  <span>Ingredients (Est.)</span>
                  <span className="font-bold">AED 500 - 800</span>
                </div>
                <div className="flex justify-between pt-2 text-lg">
                  <span className="font-heading font-bold">Total Estimated</span>
                  <span className="font-heading font-bold text-primary">AED 1,300 - 1,600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 -rotate-3 rounded-none z-0" />
            <div className="relative bg-white border border-neutral-200 p-10 z-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Starting From</span>
                <div className="text-5xl font-heading font-bold text-black mt-2 mb-1">
                  AED 200
                  <span className="text-lg font-sans font-normal text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-primary mt-2">Discounts available for weekly bookings</p>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Professional Chef Service",
                  "Menu Planning & Shopping",
                  "Preparation & Cooking",
                  "Table Service",
                  "Kitchen Cleanup",
                  "Ingredients at Cost (Receipt Provided)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-black hover:bg-neutral-800 text-white rounded-none py-6 text-lg">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
