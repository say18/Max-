import { motion } from "motion/react";
import { ArrowRight, Search, Megaphone, Share2, MoveUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    subtitle: "Turn organic search into your most profitable acquisition channel.",
    description: "We don't just chase vanity rankings. Our SEO methodology focuses on dominating high-intent commercial keywords that drive qualified leads straight into your funnel. From technical audits to high-authority link building, we build moats around your business.",
    benefits: [
      "Technical deep-dives & Core Web Vitals optimization",
      "Content strategies mapped to the buyer's journey",
      "High-authority white-hat link acquisition",
      "Local & International SEO expansion"
    ],
    result: "Increased organic pipeline by 210% for B2B SaaS client in 8 months."
  },
  {
    id: "paid-ads",
    icon: Megaphone,
    title: "Performance Paid Advertising",
    subtitle: "Scale your revenue profitably with engineered ad campaigns.",
    description: "Your ad budget shouldn't be an experiment. We construct hyper-targeted Google, Meta, and LinkedIn campaigns utilizing machine learning, rigorous creative testing, and unshakeable tracking infrastructure.",
    benefits: [
      "Cross-channel attribution and tracking setup",
      "Rapid creative testing and iteration frameworks",
      "Audience segmentation and dynamic retargeting",
      "Landing page alignment for maximum Quality Score"
    ],
    result: "Dropped CAC by $45 while scaling spend 3x for a D2C E-commerce brand."
  },
  {
    id: "cro",
    icon: MoveUpRight,
    title: "Conversion Rate Optimization",
    subtitle: "Make your traffic work harder for you.",
    description: "Driving traffic is useless if it doesn't convert. We utilize heatmaps, session recordings, and structural A/B testing to identify friction points and remove them. We turn your website into a high-converting salesperson.",
    benefits: [
      "User behavior analytics & heatmap analysis",
      "Copywriting enhancements & UX adjustments",
      "High-velocity A/B & multivariate testing",
      "Checkout flow friction removal"
    ],
    result: "Lifted lead generation conversion rate from 1.2% to 4.5% in 60 days."
  },
  {
    id: "email",
    icon: Mail,
    title: "Lifecycle Marketing & Email",
    subtitle: "Maximize Customer Lifetime Value (LTV) on autopilot.",
    description: "Acquisition is expensive. Retention is cheap. We build advanced email automation flows that nurture leads, recover abandoned carts, and turn one-time buyers into loyal evangelists while you sleep.",
    benefits: [
      "Welcome, abandonment, and post-purchase flows",
      "Audience segmentation and personalization",
      "Deliverability monitoring and list hygiene",
      "Campaign strategy and persuasive copywriting"
    ],
    result: "Generated $1.2M in additional 'found' revenue purely from automated flows."
  }
];

export function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Engineered for <span className="text-brand-accent">Growth.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-brand-muted leading-relaxed">
              We specialize in the core pillars of digital acquisition and conversion. No fluff, no vanity metrics—just pure performance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <section key={service.id} className="scroll-mt-32" id={service.id}>
              <div className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <FadeUp>
                    <div className="inline-flex p-3 rounded-xl bg-[rgba(99,102,241,0.1)] text-brand-accent mb-2">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <h3 className="text-xl text-brand-muted font-medium mb-6">{service.subtitle}</h3>
                    <p className="text-brand-muted leading-relaxed max-w-xl text-lg">
                      {service.description}
                    </p>
                  </FadeUp>

                  <FadeUp delay={0.1}>
                    <ul className="space-y-3 text-[#CBD5E1]">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 flex-wrap">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center mt-0.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                          </span>
                          <span className="font-medium text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeUp>

                  <FadeUp delay={0.2} className="pt-4">
                    <Link to="/contact">
                      <Button className="gap-2 shadow-md">
                        Discuss {service.title} <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </FadeUp>
                </div>

                {/* Card / Visual Side */}
                <div className="flex-1 w-full relative">
                  <FadeUp delay={0.2} className="w-full">
                    <div className="relative rounded-2xl overflow-hidden bg-brand-card text-white p-10 md:p-14 border border-[rgba(255,255,255,0.05)] shadow-none">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                        <service.icon className="w-48 h-48" />
                      </div>
                      <div className="relative z-10 space-y-4 border-l-4 border-brand-accent pl-6 bg-[rgba(255,255,255,0.02)] py-4 rounded-r-lg">
                        <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Real Results</span>
                        <p className="text-2xl font-bold leading-relaxed italic text-[#CBD5E1]">
                          "{service.result}"
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Call to action at bottom */}
      <section className="mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="bg-brand-card rounded-3xl p-10 md:p-16 text-center border border-[rgba(255,255,255,0.08)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Not sure which lever to pull?</h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10">
              Let us dive into your analytics. We'll identify the biggest bottlenecks in your funnel and prioritize the actions that will drive immediate cash flow.
            </p>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto px-8">Get Your Free Strategy Audit</Button>
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
