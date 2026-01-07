import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about", type: "page" },
    { name: "Services", href: "/services", type: "page" },
    { name: "Menus", href: "/menus", type: "page" },
    { name: "How to Order", href: "/how-to-order", type: "page" },
    { name: "FAQ", href: "/faq", type: "page" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-white/20 py-4"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tight">
            MY<span className="text-primary">CHEF</span>.AE
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer",
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 font-medium tracking-wide"
            onClick={() => window.location.href = "/#contact"}
          >
            BOOK NOW
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-l-border">
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-lg font-heading font-medium text-left hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </Link>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-none"
                onClick={() => window.location.href = "/#contact"}
              >
                BOOK NOW
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
