"use client"

import { motion } from 'framer-motion'
import { Target, Rocket, MessageCircle, Lightbulb, HeartHandshake, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Goal-Focused Strategies',
    description: 'We create customized digital marketing strategies aligned with your business objectives, ensuring every effort contributes directly to your growth and success.',
  },
  {
    icon: Rocket,
    title: 'Startup-Friendly Solutions',
    description: 'As a startup ourselves, we understand your challenges. Our services are affordable, flexible, and designed to deliver maximum value without unnecessary costs.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'We believe in complete transparency. You stay informed with clear communication, honest updates, and easy-to-understand performance reports.',
  },
  {
    icon: Lightbulb,
    title: 'Creative & Data-Driven Approach',
    description: 'We combine creativity with data insights to build campaigns that not only look great but also perform effectively and deliver real results.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Client Support',
    description: 'Your business matters to us. We offer personalized support, timely responses, and a collaborative approach throughout your digital growth journey.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Growth Focus',
    description: 'We don\'t chase short-term wins. Our strategies are designed to build sustainable online growth, strong brand presence, and lasting results.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32">
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
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Why Choose Our Digital Marketing Agency?
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
