"use client"

import { motion } from 'framer-motion'
import { Globe, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Build a Strong Online Presence',
    description: 'Create a consistent and professional digital identity that builds trust, credibility, and brand recognition across platforms.',
  },
  {
    icon: Users,
    title: 'Drive Quality Traffic & Leads',
    description: 'Reach the right audience through SEO, paid ads, and social media strategies designed to bring high-intent visitors.',
  },
  {
    icon: TrendingUp,
    title: 'Turn Growth Into Revenue',
    description: 'Convert traffic into customers with conversion-focused websites, optimized funnels, and data-driven marketing decisions.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Help You Achieve
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            We Don&apos;t Just Offer Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We help brands build visibility, attract the right audience, and turn digital efforts into measurable business growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group text-center p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
