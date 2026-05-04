import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Rocket, Target, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <div className="pb-24 pt-32">
      {/* Intro section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              We decided to do things <span className="text-brand-accent">differently.</span>
            </h1>
            <p className="text-xl text-brand-muted mb-6 leading-relaxed">
              For too long, agencies have hidden behind vague metrics like "impressions" and "brand awareness." At Max, we believe that if marketing isn't generating measurable revenue, it's just noise.
            </p>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              Founded by veterans of top-tier growth firms, we assembled a team of technical marketers, data scientists, and creative strategists with one single mission: to be the most ROI-obsessed growth partner on the planet.
            </p>
            <Link to="/contact">
              <Button size="lg">Work With Us</Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-none">
                <h3 className="text-4xl font-bold text-white mb-2">94%</h3>
                <p className="font-medium text-brand-muted">Client Retention Rate</p>
              </div>
              <div className="bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-white p-6 rounded-2xl shadow-none">
                <h3 className="text-4xl font-bold mb-2">$100M+</h3>
                <p className="font-medium text-[#818CF8]">Revenue Managed</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-accent text-white p-6 rounded-2xl shadow-none">
                <h3 className="text-4xl font-bold mb-2">45+</h3>
                <p className="font-medium text-indigo-100">Growth Experts</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-none">
                <h3 className="text-4xl font-bold text-white mb-2">350%</h3>
                <p className="font-medium text-brand-muted">Avg. 12mo. ROI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="mt-32 py-24 bg-brand-card border-y border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">The principles that dictate every campaign we build and every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Ruthless Optimization", desc: "We never settle. There is always a hypothesis to test, a friction point to remove, and an ROI ceiling to break." },
              { icon: ShieldCheck, title: "Radical Transparency", desc: "No black-box tactics. You see the exact data, the exact spend, and the exact strategy. We win together." },
              { icon: Rocket, title: "Revenue Obsession", desc: "If an activity doesn't lead to pipeline or cash flow, we don't do it. Everything maps back to bottom-line growth." }
            ].map((value, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="bg-brand-dark p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-none"
              >
                <div className="w-14 h-14 bg-[rgba(99,102,241,0.1)] text-brand-accent rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-brand-muted leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
