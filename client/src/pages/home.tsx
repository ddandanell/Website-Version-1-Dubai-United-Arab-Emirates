import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { BookingProcess } from "@/components/sections/booking-process";
import { Pricing } from "@/components/sections/pricing";
import { AreasWeServe } from "@/components/sections/areas-we-serve";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SEOHead } from "@/components/seo-head";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingProcess />
        <Pricing />
        <AreasWeServe />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
