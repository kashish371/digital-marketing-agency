"use client"

import { motion } from 'framer-motion'

const clients = [
  'TechFlow',
  'GrowthLabs',
  'Luxe Fashion',
  'SaaS Solutions',
  'Digital First',
  'InnovateCo',
  'NextGen Tech',
  'CloudSync',
]

export function LogoCloud() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex items-center gap-16"
          >
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8 py-4"
              >
                <span className="text-xl md:text-2xl font-serif font-bold text-muted-foreground/50 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
