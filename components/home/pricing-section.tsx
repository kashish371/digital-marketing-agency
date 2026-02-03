"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/lib/data'
import { cn } from '@/lib/utils'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function PricingSection() {
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
            Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Transparent Pricing Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include dedicated support and monthly reporting.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={cn(
                'relative rounded-2xl p-8 border transition-shadow',
                plan.highlighted
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'bg-card border-border hover:border-primary/50'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={cn(
                  'text-sm',
                  plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
                )}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl lg:text-5xl font-bold">
                  ${plan.price.toLocaleString()}
                </span>
                <span className={cn(
                  'text-sm',
                  plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
                )}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn(
                      'w-5 h-5 flex-shrink-0 mt-0.5',
                      plan.highlighted ? 'text-primary-foreground' : 'text-primary'
                    )} />
                    <span className={cn(
                      'text-sm',
                      plan.highlighted ? 'text-primary-foreground/90' : 'text-foreground'
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? 'secondary' : 'default'}
                className="w-full"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We&apos;ll create a tailored plan for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact Us for Custom Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
