"use client"

import React from "react"

import { motion } from 'framer-motion'
import { Search, Share2, Target, Code, Palette, Zap, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
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

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
                Digital Solutions That Drive <span className="gradient-text">Results</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From strategy to execution, we provide comprehensive digital marketing services 
                designed to elevate your brand and accelerate your growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-32"
            >
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Search
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    variants={itemVariants}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-8">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild>
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 w-full">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_50%)]" />
                        <Icon className="w-32 h-32 text-primary/30" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our proven methodology ensures consistent results across every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We dive deep into understanding your business, goals, and target audience.' },
                { step: '02', title: 'Strategy', description: 'We develop a customized roadmap tailored to your unique objectives.' },
                { step: '03', title: 'Execution', description: 'Our team implements the strategy with precision and creativity.' },
                { step: '04', title: 'Optimize', description: 'We continuously analyze and refine for maximum performance.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-serif font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let&apos;s discuss how our services can help you achieve your business goals.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Your Free Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
