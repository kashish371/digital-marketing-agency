"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background - Black with gold accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-20 -right-20 w-60 h-60 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border border-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance"
          >
            Ready to Take Your Business to the Next Level?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 mb-8 max-w-xl mx-auto"
          >
            Let&apos;s work together to build your brand digitally and achieve real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 magnetic-btn px-8"
            >
              <Link href="/contact">
                Get Free Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 magnetic-btn px-8 bg-transparent"
            >
              <Link href="/contact#calendar">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
