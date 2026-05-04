import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const caseStudies = [
  {
    id: "technova",
    client: "TechNova",
    industry: "B2B SaaS",
    problem: "Stuck at $5M ARR. High churn rates and an incredibly high enterprise customer acquisition cost.",
    strategy: "Completely rebuilt their paid search infrastructure, shifted focus to high-intent comparison keywords, and deployed lifecycle email flows for retention.",
    results: [
      { metric: "+210%", label: "Pipeline Generated" },
      { metric: "-45%", label: "CPA decrease" },
      { metric: "3x", label: "MRR Growth" }
    ],
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "velocity",
    client: "Velocity Apparel",
    industry: "D2C E-commerce",
    problem: "Bleeding budget on Facebook ads with diminishing returns due to iOS updates, losing market share.",
    strategy: "Implemented first-party server-side tracking, broadened audience testing, and introduced aggressive creative iteration cycles.",
    results: [
      { metric: "5.2x", label: "Blended ROAS" },
      { metric: "$12M", label: "New Revenue" },
      { metric: "+85%", label: "LTV Increase" }
    ],
    color: "from-indigo-600 to-violet-600"
  },
  {
    id: "nexus",
    client: "Nexus Health",
    industry: "Local Medical Practice",
    problem: "Opening three new clinics but had zero local search presence for high-margin procedures.",
    strategy: "Hyper-local SEO strategy, structured data implementation, and aggressive Google Business Profile optimization.",
    results: [
      { metric: "#1", label: "Ranking in 3 Cities" },
      { metric: "+400", label: "Monthly New Patients" },
      { metric: "12x", label: "ROI on Campaign" }
    ],
    color: "from-emerald-500 to-teal-600"
  }
];

export function CaseStudies() {
  return (
    <div className="pb-24 pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          We build <span className="text-brand-accent">revenue machines.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-brand-muted"
        >
          Don't take our word for it. Review the hard numbers and strategic playbooks behind our most successful campaigns.
        </motion.p>
      </div>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            key={study.id}
            className="flex flex-col lg:flex-row bg-brand-card rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-none hover:border-[rgba(99,102,241,0.5)] transition-colors duration-500 group"
          >
            {/* Visual / Highlight section */}
            <div className={`p-10 lg:w-2/5 text-white bg-[rgba(99,102,241,0.03)] border-r border-[rgba(255,255,255,0.05)] flex flex-col justify-between relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[rgba(99,102,241,0.1)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <span className="px-3 py-1 bg-[rgba(99,102,241,0.1)] text-brand-accent rounded-full text-xs font-semibold tracking-wide uppercase">
                  {study.industry}
                </span>
                <h2 className="text-4xl font-display font-bold mt-8 mb-4">{study.client}</h2>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-6 mt-12">
                {study.results.slice(0, 2).map((res, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold mb-1">{res.metric}</p>
                    <p className="text-white/80 text-sm font-medium leading-snug">{res.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy / Content Section */}
            <div className="p-10 lg:p-14 lg:w-3/5 flex flex-col justify-center bg-brand-card text-white">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-brand-muted mb-8 leading-relaxed text-lg pb-8 border-b border-[rgba(255,255,255,0.08)]">
                {study.problem}
              </p>

              <h3 className="text-2xl font-bold mb-4">The Strategy</h3>
              <p className="text-brand-muted mb-10 leading-relaxed text-lg">
                {study.strategy}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white">{study.results[2]?.metric}</span>
                      <span className="text-sm font-medium text-brand-muted uppercase tracking-wider">{study.results[2]?.label}</span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline">
                      Want similar results?
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to be our next massive success story?</h2>
        <Link to="/contact">
          <Button size="lg" className="px-8 flex items-center justify-center gap-2 m-auto">Book Your Strategy Session <ArrowRight className="w-5 h-5"/></Button>
        </Link>
      </div>
    </div>
  );
}
