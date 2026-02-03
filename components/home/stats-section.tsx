"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/data'

function AnimatedCounter({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number
  suffix: string
  inView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Results That Define Our Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            We Believe in Delivering Measurable Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our numbers reflect the trust our clients place in us and the results we consistently achieve.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
