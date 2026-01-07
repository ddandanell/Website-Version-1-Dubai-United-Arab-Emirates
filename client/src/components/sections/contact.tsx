import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent!",
      description: "We will be in touch with a proposal shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-neutral-50 hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              Book Your <br />
              <span className="text-primary italic">Chef Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to indulge? Fill out the form below or contact us directly via WhatsApp for an immediate quote.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-neutral-50 border-neutral-200 h-12 rounded-none focus:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-neutral-50 border-neutral-200 h-12 rounded-none focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (WhatsApp)</FormLabel>
                        <FormControl>
                          <Input placeholder="+971 50 123 4567" {...field} className="bg-neutral-50 border-neutral-200 h-12 rounded-none focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Date, number of guests, cuisine preference..." 
                          className="bg-neutral-50 border-neutral-200 min-h-[120px] rounded-none focus:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-medium rounded-none">
                  REQUEST QUOTE
                </Button>
              </form>
            </Form>
          </div>

          <div className="hidden lg:flex flex-col justify-center pl-12">
             <div className="bg-black text-white p-12 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2">Direct Contact</h3>
                    <p className="text-3xl font-heading font-bold">+971 4 123 4567</p>
                    <p className="text-white/60">Available 9am - 9pm Daily</p>
                  </div>
                  
                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2">Email</h3>
                    <p className="text-xl">info@mychef.ae</p>
                  </div>

                  <div>
                    <h3 className="text-primary text-sm uppercase tracking-widest mb-2">Location</h3>
                    <p className="text-white/80 leading-relaxed">
                      Villa 6, Al Safa Street 99<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
