import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    goal: "",
    budget: "5k-10k"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-24 pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Information Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 lg:pr-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Let's scale your <span className="text-brand-accent">growth.</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              Fill out the form to request a free, rigorous strategy audit. We'll analyze your current funnel and show you the exact blueprint we'd use to multiply your revenue.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
            <h3 className="text-xl font-bold text-white">What happens next?</h3>
            <ul className="space-y-4">
              {[
                "We review your application to ensure we're a good fit.",
                "Our team conducts a deep-dive analysis of your current digital presence.",
                "We get on a 30-minute call to present your custom growth blueprint."
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-brand-muted">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-semibold text-white">
                <Mail className="w-5 h-5 text-brand-accent" /> Email Us
              </span>
              <a href="mailto:hello@maxgrowth.com" className="text-brand-muted hover:text-white transition-colors">hello@maxgrowth.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-semibold text-white">
                <MapPin className="w-5 h-5 text-brand-accent" /> Headquarters
              </span>
              <span className="text-brand-muted">San Francisco, CA<br/>Global Remote Team</span>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-brand-card p-8 md:p-10 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-xl shadow-black/50">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[rgba(99,102,241,0.1)] text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Request sent!</h3>
                <p className="text-lg text-brand-muted mb-8">
                  Our strategic team will review your details and reach out within 24 hours to schedule your audit call.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">Submit another request</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Request Your Free Audit</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-brand-muted">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-white focus:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-brand-muted">Work Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-white focus:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder:text-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-brand-muted">Company Website</label>
                  <input
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-white focus:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder:text-slate-600"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-brand-muted">Monthly Marketing Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-white focus:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all [&_option]:bg-brand-dark"
                  >
                    <option value="Under 5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="goal" className="text-sm font-semibold text-brand-muted">What is your primary growth goal?</label>
                  <textarea
                    id="goal"
                    name="goal"
                    required
                    rows={4}
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-white focus:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none placeholder:text-slate-600"
                    placeholder="e.g. We want to decrease our CPA on Meta and scale our MRR."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Secure My Strategy Session
                </Button>
                <p className="text-xs text-center text-brand-muted mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
