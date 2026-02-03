"use client"

import { motion } from 'framer-motion'
import { Search, FileText, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discover & Analyze',
    description: 'We begin by understanding your business goals, target audience, and competitors to gain clear insights, and define the right direction.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Plan the Strategy',
    description: 'Based on our research, we create a customized and effective digital marketing strategy aligned with your brand objectives.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Execute & Optimize',
    description: 'We launch and manage campaigns with creativity and precision while continuously tracking performance and optimizing for better results.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Grow & Scale',
    description: 'We focus on sustainable, measurable growth by refining strategies, improving performance, and scaling what works best for your business.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function ProcessSection() {
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
            Our Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            How We Work
          </h2>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
