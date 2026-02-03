"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Heart, ArrowRight, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { teamMembers, timelineEvents, stats } from '@/lib/data'

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = inView ? value : 0
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Number.isInteger(value) ? count : count.toFixed(1)}{suffix}
    </motion.span>
  )
}

export default function AboutPage() {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

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
                About Us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
                We&apos;re on a Mission to <span className="gradient-text">Transform</span> Digital Marketing
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Founded in 2010, Rites Digital has grown from a small startup to a leading 
                digital marketing agency, helping hundreds of brands achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section ref={statsRef} className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isStatsInView} />
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 mb-6">
                  Building Digital Success Stories Since 2010
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    What started as a passion project in a small office has evolved into one of the 
                    most respected digital marketing agencies in the industry. Our journey has been 
                    marked by continuous learning, innovation, and an unwavering commitment to our clients.
                  </p>
                  <p>
                    Today, our team of 50+ experts works with businesses of all sizes, from ambitious 
                    startups to Fortune 500 companies, delivering strategies that drive real, measurable growth.
                  </p>
                  <p>
                    We believe in the power of data-driven creativity and collaborative partnerships. 
                    Every project we undertake is an opportunity to push boundaries and exceed expectations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.3),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-8xl font-bold text-primary/20">R</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To empower businesses with innovative digital strategies that drive sustainable growth and create lasting impact in the digital landscape.',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  description: 'To be the most trusted partner for brands seeking to thrive in the digital age, known for our creativity, integrity, and exceptional results.',
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  description: 'Innovation, transparency, collaboration, and excellence guide everything we do. We treat every client relationship as a true partnership.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-background border border-border"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
                Milestones Along the Way
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="text-primary font-mono text-sm mb-1">{event.year}</div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our diverse team of strategists, creatives, and technologists work together 
                to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-background border border-border">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="font-serif text-6xl font-bold text-primary/30">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-semibold">{member.name}</h3>
                      <p className="text-primary text-sm mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
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
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;re always looking for talented individuals who are passionate about digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
