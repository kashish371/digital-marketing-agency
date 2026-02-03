"use client"

import React from "react"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'

const footerLinks = {
  services: [
    { label: 'SEO', href: '/services#seo' },
    { label: 'Social Media Marketing', href: '/services#smm' },
    { label: 'PPC Advertising', href: '/services#ppc' },
    { label: 'Web Development', href: '/services#webdev' },
    { label: 'Branding', href: '/services#branding' },
    { label: 'Marketing Automation', href: '/services#automation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        toast.success('Successfully subscribed to newsletter!')
        setEmail('')
      } else {
        const data = await res.json()
        toast.error(data.error || 'Failed to subscribe')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground max-w-md">
                Get the latest insights on digital marketing delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold gold-gradient-text">
                Charu Nagdewani
              </span>
              <p className="text-xs text-muted-foreground">Digital Marketing Agency</p>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Strategy-driven digital marketing for brands that want real growth. Let&apos;s work together to build your brand digitally and achieve real results.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@charunagdewani.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                contact@charunagdewani.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Copyright {new Date().getFullYear()} Charu Nagdewani. Powered by Charu Nagdewani
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
