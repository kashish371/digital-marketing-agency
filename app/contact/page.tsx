"use client"

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

const services = [
  'SEO',
  'Social Media Marketing',
  'PPC Advertising',
  'Web Development',
  'Branding',
  'Marketing Automation',
  'Other',
]

const budgets = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@ritesdigital.com',
    href: 'mailto:hello@ritesdigital.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Marketing Ave, Suite 100\nSan Francisco, CA 94105',
    href: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success('Message sent successfully! We\'ll be in touch soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        })
      } else {
        const data = await res.json()
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                Contact Us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
                Let&apos;s Start a <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ready to take your digital presence to the next level? Get in touch with us 
                and let&apos;s discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have a question or want to work together? We&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Map Integration</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
                  <h2 className="font-serif text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange('service', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Book a Call
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
                Schedule a Free Consultation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Prefer to chat? Book a 30-minute discovery call with our team to discuss your 
                project and see how we can help.
              </p>

              {/* Calendly placeholder */}
              <div className="bg-background rounded-2xl border border-border p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-primary/50" />
                  <p className="text-muted-foreground mb-4">Calendly Integration</p>
                  <Button asChild variant="outline">
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Calendar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about working with us.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'How quickly can we get started?',
                    answer: 'Once we finalize the project scope, we can typically begin work within 1-2 weeks. For urgent projects, we offer expedited timelines.',
                  },
                  {
                    question: 'Do you work with small businesses?',
                    answer: 'Yes! We work with businesses of all sizes, from startups to enterprise companies. Our plans are designed to scale with your needs.',
                  },
                  {
                    question: 'What industries do you specialize in?',
                    answer: 'We have experience across many industries including tech, e-commerce, healthcare, finance, and more. Our strategies are always tailored to your specific market.',
                  },
                  {
                    question: 'How do you measure success?',
                    answer: 'We establish clear KPIs at the start of every project and provide regular reports tracking progress against those metrics. Transparency is key to our partnerships.',
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
