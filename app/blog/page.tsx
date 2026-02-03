"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { blogCategories } from '@/lib/data'

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of SEO: AI and Machine Learning Trends in 2024',
    excerpt: 'Discover how artificial intelligence is reshaping search engine optimization and what it means for your digital strategy.',
    slug: 'future-of-seo-ai-trends-2024',
    category: 'SEO',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Maximizing ROI with Smart PPC Bidding Strategies',
    excerpt: 'Learn advanced bidding techniques that can dramatically improve your pay-per-click advertising performance.',
    slug: 'maximizing-roi-ppc-bidding-strategies',
    category: 'PPC',
    author: 'Marcus Johnson',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Building an Authentic Brand Voice on Social Media',
    excerpt: 'Your guide to developing a consistent, engaging brand personality that resonates with your target audience.',
    slug: 'building-authentic-brand-voice-social-media',
    category: 'Social Media',
    author: 'Emily Rodriguez',
    publishedAt: '2024-01-08',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Content Marketing Metrics That Actually Matter',
    excerpt: 'Stop tracking vanity metrics. Focus on these KPIs to measure real content marketing success.',
    slug: 'content-marketing-metrics-that-matter',
    category: 'Content Marketing',
    author: 'David Kim',
    publishedAt: '2024-01-05',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 5,
    title: 'E-commerce SEO: Complete Guide for 2024',
    excerpt: 'Everything you need to know about optimizing your online store for search engines this year.',
    slug: 'ecommerce-seo-complete-guide-2024',
    category: 'SEO',
    author: 'Sarah Chen',
    publishedAt: '2024-01-03',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'The Psychology of Color in Digital Marketing',
    excerpt: 'How color choices impact consumer behavior and conversion rates in your marketing campaigns.',
    slug: 'psychology-of-color-digital-marketing',
    category: 'Industry News',
    author: 'Emily Rodriguez',
    publishedAt: '2024-01-01',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 7,
    title: 'Video Marketing Trends You Can\'t Ignore',
    excerpt: 'Short-form video is dominating. Here\'s how to leverage it for your brand.',
    slug: 'video-marketing-trends-2024',
    category: 'Social Media',
    author: 'Marcus Johnson',
    publishedAt: '2023-12-28',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 8,
    title: 'How We Increased Organic Traffic by 500%: A Case Study',
    excerpt: 'A detailed breakdown of our SEO strategy for a SaaS client that delivered exceptional results.',
    slug: 'organic-traffic-increase-case-study',
    category: 'Case Studies',
    author: 'David Kim',
    publishedAt: '2023-12-25',
    readTime: '10 min read',
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || activeCategory !== 'All')

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
                Blog
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-balance">
                Insights & <span className="gradient-text">Strategies</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Expert insights, industry trends, and actionable strategies to help you 
                succeed in the digital landscape.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/80 backdrop-blur-lg z-30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((category) => (
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

        {/* Featured Post */}
        {activeCategory === 'All' && featuredPost && !searchQuery && (
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-primary/20">Featured</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">{featuredPost.category}</span>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2 mb-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all">
                        {/* Image placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-2xl font-bold text-primary/20">
                              {post.category.slice(0, 3)}
                            </span>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <User className="w-3 h-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Subscribe to our newsletter for the latest digital marketing insights 
                delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
