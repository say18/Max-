import { motion } from "motion/react";
import { ArrowRight, BarChart3, Target, Zap, ChevronRight, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 bg-brand-dark overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-[#818CF8] text-sm font-medium mb-4 uppercase tracking-wider">
              Premium Digital Growth Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turn your traffic into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                predictable revenue.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              We don’t just run campaigns—we engineer scalable acquisition funnels. 
              Partner with Max to dominate your market and multiply your ROI.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Get Free Strategy Call <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:text-white">
                  See Case Studies
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-muted">No commitment required. 30-minute deep dive.</p>
          </FadeUp>
        </div>
      </section>

      {/* SOCIAL PROOF (LOGOS) */}
      <section className="py-10 border-b border-[rgba(255,255,255,0.08)] bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-8">
            Trusted by fast-growing companies generating $100M+
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all duration-500">
            {/* Logos placeholders */}
            {['Acme Corp', 'GlobalScale', 'TechNova', 'Nexus', 'Velocity'].map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS METRICS */}
      <section className="py-20 bg-transparent border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)]">
            <FadeUp delay={0.1}>
              <div className="py-6 space-y-2">
                <h3 className="text-5xl font-bold tracking-tight text-white">+320%</h3>
                <p className="font-medium text-brand-muted uppercase tracking-wider text-sm">Average ROI Increase</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="py-6 space-y-2">
                <h3 className="text-5xl font-bold tracking-tight text-white">$50M+</h3>
                <p className="font-medium text-brand-muted uppercase tracking-wider text-sm">Revenue Generated</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="py-6 space-y-2">
                <h3 className="text-5xl font-bold tracking-tight text-white">14k+</h3>
                <p className="font-medium text-brand-muted uppercase tracking-wider text-sm">Qualified Leads Delivered</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-24 bg-transparent border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Growth systems, not just services.</h2>
              <p className="text-lg text-brand-muted">We deploy full-funnel strategies that capture intent, convert traffic, and maximize customer lifetime value.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Paid Advertising", desc: "Hyper-targeted Google, Meta, and LinkedIn ads that scale your acquisition profitably." },
              { icon: TrendingUp, title: "SEO Authority", desc: "Dominate search rankings with content that establishes trust and drives organic pipelines." },
              { icon: Zap, title: "Conversion Optimization", desc: "Data-driven UX and copy adjustments that turn your clunky website into a lead machine." }
            ].map((service, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-brand-card border border-[rgba(255,255,255,0.05)] h-full flex flex-col items-start group transition-all duration-300 hover:border-[rgba(99,102,241,0.5)]">
                  <div className="w-10 h-10 bg-[rgba(99,102,241,0.1)] text-brand-accent rounded-lg mb-5 flex items-center justify-center transition-colors">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-6 flex-grow text-sm">{service.desc}</p>
                  <Link to="/services" className="text-brand-accent font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="py-24 bg-transparent border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Proof, not promises.</h2>
              <p className="text-brand-muted text-lg max-w-xl">See how we've helped ambitious brands scale past their revenue plateaus.</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link to="/case-studies">
                <Button variant="outline">
                  View All Case Studies
                </Button>
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div className="group rounded-2xl overflow-hidden bg-brand-card border border-[rgba(255,255,255,0.05)] relative hover:border-[rgba(99,102,241,0.5)] transition-colors duration-300">
                <div className="p-10 z-10 relative">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-2xl font-display font-bold text-white">TechNova.</span>
                    <span className="px-3 py-1 bg-[rgba(99,102,241,0.1)] text-[#818CF8] text-xs font-semibold uppercase tracking-wider rounded-full">+450% Traffic</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 pr-12 text-white">How we scaled TechNova's multi-channel pipeline by 3x in 6 months.</h3>
                  <p className="text-brand-muted mb-8 max-w-md text-sm">Comprehensive SEO and Paid search overhaul focusing on high-intent enterprise keywords.</p>
                  <Link to="/case-studies" className="inline-flex items-center text-brand-accent font-medium hover:text-white transition-colors">
                    Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="group rounded-2xl overflow-hidden bg-brand-card border border-[rgba(255,255,255,0.05)] relative hover:border-[rgba(99,102,241,0.5)] transition-colors duration-300">
                <div className="p-10 z-10 relative">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-2xl font-display font-bold text-white">Velocity</span>
                    <span className="px-3 py-1 bg-[rgba(99,102,241,0.1)] text-[#818CF8] text-xs font-semibold uppercase tracking-wider rounded-full">5x ROAS</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 pr-12 text-white">Decreasing CAC by 40% while doubling ad spend for an E-com giant.</h3>
                  <p className="text-brand-muted mb-8 max-w-md text-sm">Advanced dynamic retargeting and creative testing framework implementation.</p>
                  <Link to="/case-studies" className="inline-flex items-center text-brand-accent font-medium hover:text-white transition-colors">
                    Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-transparent border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Blueprint for Growth</h2>
              <p className="text-lg text-brand-muted">A systematic, repeatable methodology to uncover bottlenecks and scale revenue.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[rgba(255,255,255,0.08)] z-0"/>
            
            {[
              { num: "01", title: "Comprehensive Audit", desc: "We analyze your tech stack, tracking, and current funnel to find immediate wins." },
              { num: "02", title: "Strategy Mapping", desc: "Developing a custom blueprint targeting your specific ideal customer profile." },
              { num: "03", title: "Flawless Execution", desc: "Deploying campaigns, creating assets, and setting up tracking infrastructure." },
              { num: "04", title: "Data-Driven Optimization", desc: "A/B testing and scaling what works while violently cutting what doesn't." }
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-brand-card rounded-full border-8 border-brand-dark flex items-center justify-center text-brand-accent font-bold text-2xl mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-sm">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-dark border-t border-[rgba(255,255,255,0.08)] text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Stop leaving money on the table.</h2>
            <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
              Get a free growth audit. We'll show you exactly where you're bleeding revenue and how we can fix it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto">Claim Your Free Audit</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-brand-muted flex items-center justify-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" /> Limited to 5 audits per week to ensure quality.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
