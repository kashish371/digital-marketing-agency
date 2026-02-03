"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, DollarSign, X } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Web Development', 'Branding']

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Growth',
    client: 'TechFlow Inc.',
    category: 'PPC',
    industry: 'E-commerce',
    image: '/cases/techflow.jpg',
    results: [
      { metric: 'Revenue Increase', value: '340%', icon: TrendingUp },
      { metric: 'ROAS', value: '5.2x', icon: DollarSign },
      { metric: 'New Customers', value: '12K+', icon: Users },
    ],
    challenge: 'TechFlow was struggling to scale their paid advertising while maintaining profitability.',
    solution: 'We implemented a comprehensive PPC strategy with advanced audience targeting, dynamic remarketing, and AI-powered bid optimization.',
    testimonial: {
      quote: 'Rites Digital transformed our advertising approach completely. The results speak for themselves.',
      author: 'Jennifer Walsh',
      position: 'Marketing Director',
    },
  },
  {
    id: 2,
    title: 'Organic Traffic Explosion',
    client: 'GrowthLabs',
    category: 'SEO',
    industry: 'SaaS',
    image: '/cases/growthlabs.jpg',
    results: [
      { metric: 'Organic Traffic', value: '520%', icon: TrendingUp },
      { metric: 'Keywords Ranked', value: '1.5K+', icon: Users },
      { metric: 'MRR Growth', value: '180%', icon: DollarSign },
    ],
    challenge: 'GrowthLabs had minimal organic presence and was heavily dependent on paid acquisition.',
    solution: 'We developed a comprehensive SEO strategy including technical optimization, content creation, and strategic link building.',
    testimonial: {
      quote: 'The SEO results have been phenomenal. We now get more leads from organic search than all other channels combined.',
      author: 'Michael Torres',
      position: 'CEO',
    },
  },
  {
    id: 3,
    title: 'Brand Transformation',
    client: 'Luxe Fashion',
    category: 'Branding',
    industry: 'Fashion',
    image: '/cases/luxe.jpg',
    results: [
      { metric: 'Brand Awareness', value: '280%', icon: TrendingUp },
      { metric: 'Social Following', value: '450K+', icon: Users },
      { metric: 'Sales Growth', value: '215%', icon: DollarSign },
    ],
    challenge: 'Luxe Fashion needed to reposition their brand to appeal to a younger, more affluent demographic.',
    solution: 'We executed a complete brand overhaul including visual identity, messaging, and a multi-channel launch campaign.',
    testimonial: {
      quote: 'The rebrand exceeded our expectations. Our customers love the new direction.',
      author: 'Amanda Foster',
      position: 'Brand Manager',
    },
  },
  {
    id: 4,
    title: 'Social Media Dominance',
    client: 'FoodieBox',
    category: 'Social Media',
    industry: 'Food & Beverage',
    image: '/cases/foodiebox.jpg',
    results: [
      { metric: 'Engagement Rate', value: '12.5%', icon: TrendingUp },
      { metric: 'Followers Gained', value: '250K+', icon: Users },
      { metric: 'Sales Attribution', value: '45%', icon: DollarSign },
    ],
    challenge: 'FoodieBox had a great product but struggled to build an engaged community on social media.',
    solution: 'We created a content strategy focused on user-generated content, influencer partnerships, and viral challenges.',
    testimonial: {
      quote: 'Our social media presence has become one of our biggest competitive advantages.',
      author: 'David Chen',
      position: 'Marketing Director',
    },
  },
  {
    id: 5,
    title: 'Website Conversion Overhaul',
    client: 'SaaS Solutions',
    category: 'Web Development',
    industry: 'Technology',
    image: '/cases/saas.jpg',
    results: [
      { metric: 'Conversion Rate', value: '185%', icon: TrendingUp },
      { metric: 'Page Speed', value: '3.2s faster', icon: Users },
      { metric: 'Bounce Rate', value: '-45%', icon: DollarSign },
    ],
    challenge: 'Their outdated website was driving away potential customers with poor UX and slow load times.',
    solution: 'We redesigned and rebuilt their website with a focus on conversion optimization, performance, and mobile experience.',
    testimonial: {
      quote: 'The new website has completely transformed how customers perceive our brand.',
      author: 'Robert Chen',
      position: 'COO',
    },
  },
  {
    id: 6,
    title: 'Local SEO Domination',
    client: 'Metro Dental',
    category: 'SEO',
    industry: 'Healthcare',
    image: '/cases/dental.jpg',
    results: [
      { metric: 'Local Pack Rankings', value: '#1', icon: TrendingUp },
      { metric: 'Patient Inquiries', value: '320%', icon: Users },
      { metric: 'Revenue Growth', value: '175%', icon: DollarSign },
    ],
    challenge: 'Metro Dental was invisible in local search results despite being a top-rated practice.',
    solution: 'We implemented a comprehensive local SEO strategy including Google Business optimization, review management, and local link building.',
    testimonial: {
      quote: 'We went from page 3 to the #1 position in our area. The phone hasn\'t stopped ringing.',
      author: 'Dr. Sarah Kim',
      position: 'Owner',
    },
  },
]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeCategory)

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
                Case Studies
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
                Real Results for <span className="gradient-text">Real Brands</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore how we&apos;ve helped businesses across industries achieve extraordinary 
                growth through strategic digital marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/80 backdrop-blur-lg z-30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedStudy(study)}
                  >
                    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all">
                      {/* Image placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-serif text-4xl font-bold text-primary/20">
                            {study.client.slice(0, 2)}
                          </span>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                            {study.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {study.client} &bull; {study.industry}
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                          {study.results.slice(0, 3).map((result) => (
                            <div key={result.metric} className="text-center">
                              <div className="font-serif text-lg font-bold text-primary">
                                {result.value}
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let&apos;s discuss how we can achieve similar results for your business.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedStudy(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 bg-card rounded-2xl border border-border z-50 overflow-auto"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={() => setSelectedStudy(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="p-8 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {selectedStudy.category} &bull; {selectedStudy.industry}
                  </span>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2 mb-2">
                    {selectedStudy.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Client: {selectedStudy.client}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-6 mb-12">
                    {selectedStudy.results.map((result) => (
                      <div
                        key={result.metric}
                        className="p-6 rounded-xl bg-primary/5 text-center"
                      >
                        <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="font-serif text-3xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3">The Challenge</h3>
                      <p className="text-muted-foreground">{selectedStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-3">Our Solution</h3>
                      <p className="text-muted-foreground">{selectedStudy.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                    <blockquote className="text-xl font-medium mb-4">
                      &quot;{selectedStudy.testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {selectedStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium">{selectedStudy.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {selectedStudy.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button asChild size="lg">
                      <Link href="/contact">
                        Get Similar Results
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
