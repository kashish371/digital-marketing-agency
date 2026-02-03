"use client"

import React from "react"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Share2, Target, Code, Palette, Zap, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  share2: Share2,
  target: Target,
  code: Code,
  palette: Palette,
  zap: Zap,
}

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

export function ServicesPreview() {
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
            Our Digital Marketing Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Complete Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete digital solutions designed to build visibility, drive traffic, and increase conversions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/services#${service.id}`}>
                  <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
