import { MessageSquare, FileText, UserCheck, CreditCard, ChefHat } from "lucide-react";

export function BookingProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Contact via WhatsApp",
      description: "Chat for AI-matched chefs based on group size, budget, and cuisine."
    },
    {
      icon: FileText,
      title: "Receive Proposals",
      description: "Get customized menus and quotes within 10 minutes."
    },
    {
      icon: UserCheck,
      title: "Plan with Chef",
      description: "Virtual consultation to finalize details and preferences."
    },
    {
      icon: CreditCard,
      title: "Secure Booking",
      description: "Confirm your date with a 50% deposit."
    },
    {
      icon: ChefHat,
      title: "Enjoy Experience",
      description: "We handle shopping, prep, service, and cleanup."
    }
  ];

  return (
    <section id="process" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">How It Works</span>
          <h2 className="text-4xl font-heading font-bold mb-6">Seamless Five-Step Journey</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 z-10 transition-colors duration-300 group-hover:border-primary group-hover:bg-neutral-800">
                  <step.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
