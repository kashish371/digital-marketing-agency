import type { Service, TeamMember, Testimonial } from './types'

export const services: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website\'s search rankings and organic traffic with strategic keyword research, on-page optimization, and content built for long-term growth.',
    icon: 'search',
    features: [
      'Strategic Keyword Research',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Content Strategy for SEO',
      'Local SEO',
      'Monthly Performance Reports',
    ],
    slug: 'seo',
  },
  {
    id: 'smm',
    title: 'Social Media Marketing (SMM)',
    description: 'Build brand awareness and customer trust through engaging content, consistent posting, and targeted social media strategies.',
    icon: 'share2',
    features: [
      'Social Strategy Development',
      'Engaging Content Creation',
      'Community Management',
      'Consistent Posting Schedule',
      'Audience Growth Tactics',
      'Performance Analytics',
    ],
    slug: 'social-media-marketing',
  },
  {
    id: 'ppc',
    title: 'Google Ads & Paid Advertising',
    description: 'Drive instant traffic and qualified leads with high-performance Google Ads campaigns focused on ROI and conversions.',
    icon: 'target',
    features: [
      'Google Ads Management',
      'Meta Ads (Facebook & Instagram)',
      'Campaign Optimization',
      'Conversion Tracking',
      'A/B Testing',
      'ROI-Focused Strategy',
    ],
    slug: 'ppc-advertising',
  },
  {
    id: 'webdev',
    title: 'Website Design & Development',
    description: 'Modern, responsive, and conversion-focused websites designed to represent your brand and drive business growth.',
    icon: 'code',
    features: [
      'Custom Website Design',
      'Mobile-Responsive Development',
      'Conversion Optimization',
      'Fast Loading Speed',
      'SEO-Friendly Structure',
      'Ongoing Maintenance',
    ],
    slug: 'web-development',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Chen',
    position: 'Founder & CEO',
    image: '/team/sarah.jpg',
    bio: 'With 15+ years in digital marketing, Sarah founded Rites Digital to help brands thrive in the digital age.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Marcus Johnson',
    position: 'Head of Strategy',
    image: '/team/marcus.jpg',
    bio: 'Marcus brings a decade of experience crafting winning strategies for Fortune 500 companies.',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Emily Rodriguez',
    position: 'Creative Director',
    image: '/team/emily.jpg',
    bio: 'Award-winning designer with a passion for creating brands that connect and convert.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'David Kim',
    position: 'Tech Lead',
    image: '/team/david.jpg',
    bio: 'Full-stack developer specializing in high-performance web applications and marketing tech.',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Rites Digital transformed our online presence completely. Our organic traffic increased by 340% in just 6 months.',
    author: 'Jennifer Walsh',
    position: 'Marketing Director',
    company: 'TechFlow Inc.',
    image: '/testimonials/jennifer.jpg',
    rating: 5,
  },
  {
    quote: 'The team is incredibly professional and results-driven. They exceeded all our expectations with our PPC campaigns.',
    author: 'Michael Torres',
    position: 'CEO',
    company: 'GrowthLabs',
    image: '/testimonials/michael.jpg',
    rating: 5,
  },
  {
    quote: 'Working with Rites Digital has been a game-changer for our brand. Their creative approach is unmatched.',
    author: 'Amanda Foster',
    position: 'Brand Manager',
    company: 'Luxe Fashion',
    image: '/testimonials/amanda.jpg',
    rating: 5,
  },
  {
    quote: 'The ROI we\'ve seen from their marketing automation setup has been phenomenal. Highly recommend!',
    author: 'Robert Chen',
    position: 'COO',
    company: 'SaaS Solutions',
    image: '/testimonials/robert.jpg',
    rating: 5,
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 10, suffix: '+', label: 'Skilled Team Members' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 150, suffix: '+', label: 'Successful Projects' },
]

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses starting their digital journey',
    price: 1500,
    period: 'month',
    features: [
      'Social Media Management (2 platforms)',
      'Basic SEO Optimization',
      'Monthly Performance Report',
      'Email Support',
      '5 Blog Posts/Month',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale',
    price: 3500,
    period: 'month',
    features: [
      'Social Media Management (4 platforms)',
      'Advanced SEO Strategy',
      'PPC Campaign Management',
      'Weekly Performance Reports',
      'Dedicated Account Manager',
      '10 Blog Posts/Month',
      'Email Marketing Automation',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations',
    price: 7500,
    period: 'month',
    features: [
      'Full-Service Digital Marketing',
      'Custom Strategy Development',
      'Multi-Channel Campaigns',
      'Real-Time Analytics Dashboard',
      'Priority Support 24/7',
      'Unlimited Content Creation',
      'Quarterly Strategy Reviews',
      'Dedicated Team',
    ],
    highlighted: false,
  },
]

export const clientLogos = [
  { name: 'TechFlow', logo: '/logos/techflow.svg' },
  { name: 'GrowthLabs', logo: '/logos/growthlabs.svg' },
  { name: 'Luxe Fashion', logo: '/logos/luxe.svg' },
  { name: 'SaaS Solutions', logo: '/logos/saas.svg' },
  { name: 'Digital First', logo: '/logos/digital.svg' },
  { name: 'InnovateCo', logo: '/logos/innovate.svg' },
]

export const timelineEvents = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Rites Digital was founded with a vision to help businesses succeed online.',
  },
  {
    year: '2013',
    title: 'Expanding Services',
    description: 'Added PPC and social media marketing to our service offerings.',
  },
  {
    year: '2016',
    title: 'Going Global',
    description: 'Expanded operations internationally, serving clients across 20+ countries.',
  },
  {
    year: '2019',
    title: 'Innovation Hub',
    description: 'Launched our proprietary marketing automation platform.',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Named Top Digital Agency by Marketing Excellence Awards.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Pioneering AI-powered marketing solutions for next-gen campaigns.',
  },
]

export const blogCategories = [
  'All',
  'SEO',
  'Social Media',
  'PPC',
  'Content Marketing',
  'Industry News',
  'Case Studies',
]

export const faqs = [
  {
    question: 'What digital marketing services do you offer?',
    answer: 'We offer end-to-end digital marketing solutions including social media marketing, SEO, paid advertising, content marketing, and website growth strategies.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results depend on the service, but most clients start seeing improvements within the first 30–90 days with consistent optimization.',
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer: 'Yes, we specialize in working with startups, small businesses, and growing brands looking to build a strong digital presence.',
  },
  {
    question: 'Is digital marketing affordable for small businesses?',
    answer: 'Absolutely. We offer flexible and customized plans designed to fit different budgets without compromising quality.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track performance through analytics, conversions, engagement, and ROI to ensure every campaign delivers measurable results.',
  },
  {
    question: 'Can services be customized?',
    answer: 'Yes, all our solutions are tailored based on your business goals, industry, and budget.',
  },
]
