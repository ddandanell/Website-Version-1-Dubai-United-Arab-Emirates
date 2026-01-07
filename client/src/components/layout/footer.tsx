import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold">
              MY<span className="text-primary">CHEF</span>.AE
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Elevating dining experiences in Dubai since 2012. Bespoke culinary journeys delivered to your villa or yacht.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-heading font-medium text-primary">Contact</h4>
            <div className="space-y-4 text-white/60">
              <p>Villa 6, Al Safa Street 99<br />Dubai, United Arab Emirates</p>
              <p>
                <a href="tel:+97141234567" className="hover:text-primary transition-colors block">+971 4 123 4567</a>
                <a href="mailto:info@mychef.ae" className="hover:text-primary transition-colors block">info@mychef.ae</a>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-heading font-medium text-primary">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/about"><a className="hover:text-primary transition-colors cursor-pointer">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors cursor-pointer">Our Services</a></Link></li>
              <li><Link href="/menus"><a className="hover:text-primary transition-colors cursor-pointer">Sample Menus</a></Link></li>
              <li><Link href="/how-to-order"><a className="hover:text-primary transition-colors cursor-pointer">How to Order</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors cursor-pointer">FAQ</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} MyChef.ae. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy"><a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></Link>
            <Link href="/terms-of-service"><a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
