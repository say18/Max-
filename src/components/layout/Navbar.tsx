import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#0A0A0B]/90 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-md py-3" : "bg-transparent py-5 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[rgba(99,102,241,0.1)] text-brand-accent p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">MAX<span className="text-brand-accent">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-brand-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button size="sm">Get Free Audit</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-muted"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-brand-dark shadow-xl md:hidden border-t border-[rgba(255,255,255,0.08)]"
          >
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-4 py-2 rounded-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-[rgba(255,255,255,0.05)] text-white"
                      : "text-brand-muted hover:bg-[rgba(255,255,255,0.03)] hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contact" className="block w-full">
                  <Button className="w-full">Get Free Audit</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
