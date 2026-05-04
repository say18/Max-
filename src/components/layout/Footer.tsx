import { Link } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-[rgba(255,255,255,0.08)] pt-20 pb-10 text-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[rgba(99,102,241,0.1)] text-brand-accent p-2 rounded-xl group-hover:scale-105 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">MAX<span className="text-brand-accent">.</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-brand-muted max-w-xs">
              We turn your traffic into predictable revenue. Stop guessing, start growing with data-driven performance marketing.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Paid Advertising (PPC)</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Conversion Rate Optimization</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Email Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-2">Ready to scale?</h3>
            <p className="text-sm text-brand-muted">Get a custom growth strategy blueprint for your brand.</p>
            <Link to="/contact" className="inline-block">
              <Button variant="primary" className="gap-2">
                Start Your Audit <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] text-sm text-brand-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Max Digital Marketing. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social Links placeholders */}
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
