import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What cuisines do you offer?",
      answer: "We offer a wide range of cuisines including Middle Eastern, Italian, Indian, French, Asian Fusion, and more. All our chefs are experienced in preparing 100% halal-compliant meals."
    },
    {
      question: "Are the chefs insured?",
      answer: "Yes, all our chefs are fully vetted and covered by comprehensive insurance. We also conduct thorough background checks to ensure your safety and peace of mind."
    },
    {
      question: "How do payments work?",
      answer: "To secure your booking, we require a 50% deposit. The remaining balance is payable after the event. Ingredient costs are reimbursed based on actual receipts."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely. Whether it's gluten-free, vegan, keto, or specific allergies, our chefs will tailor the menu to meet your guests' dietary needs perfectly."
    },
    {
      question: "Do I need to provide equipment?",
      answer: "Our chefs come fully equipped with their own knives and specialty tools. They will use your kitchen's appliances (stove, oven). If you need extra equipment like BBQ grills or dinnerware, we can arrange rentals for you."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our private chef services.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-neutral-200 px-6">
              <AccordionTrigger className="text-left font-heading font-medium text-lg py-6 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
