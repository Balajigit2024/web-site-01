import HeroSection from '@/components/hero-section';
import CTASection from '@/components/cta-section';
import TestimonialCarousel from '@/components/testimonial-carousel';
import ClientsSection from '@/components/clients-section';
import { ArrowRight, BarChart3, Code, Globe, Lightbulb, Megaphone, Activity, Palette } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define services data
const services = [
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'Business Strategy',
    description: 'We help you develop clear, actionable strategies that align with your business goals and drive sustainable growth.',
    features: [
      'Market Analysis and Research',
      'Competitive Positioning',
      'Growth Strategy Development',
      'Business Model Innovation',
      'Strategic Planning Workshops',
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Reach your target audience effectively and increase conversions with our data-driven digital marketing solutions.',
    features: [
      'SEO & Content Marketing',
      'Social Media Management',
      'Email Marketing Campaigns',
      'PPC & Paid Advertising',
      'Marketing Analytics & Reporting',
    ],
  },
  {
    id: 'development',
    icon: Code,
    title: 'Web Development',
    description: 'Create engaging, high-performance digital experiences that convert visitors into customers.',
    features: [
      'Responsive Website Design',
      'E-commerce Development',
      'Custom Web Applications',
      'Website Maintenance & Support',
      'Performance Optimization',
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights to make informed decisions and optimize performance.',
    features: [
      'Data Collection & Integration',
      'Business Intelligence Solutions',
      'Predictive Analytics',
      'Custom Dashboards & Reporting',
      'Data Strategy Consulting',
    ],
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Brand Strategy',
    description: 'Build a strong, cohesive brand identity that resonates with your audience and differentiates you from competitors.',
    features: [
      'Brand Positioning & Messaging',
      'Visual Identity Development',
      'Brand Guidelines Creation',
      'Brand Experience Design',
      'Rebranding & Brand Refreshes',
    ],
  },
  {
    id: 'optimization',
    icon: Activity,
    title: 'Process Optimization',
    description: 'Streamline your operations, reduce costs, and improve efficiency with our process optimization services.',
    features: [
      'Workflow Analysis & Mapping',
      'Operational Efficiency Consulting',
      'Technology Integration',
      'Training & Implementation Support',
      'Continuous Improvement Programs',
    ],
  },
  {
    id: 'international',
    icon: Globe,
    title: 'International Expansion',
    description: 'Expand your business globally with strategic guidance and localized solutions for new markets.',
    features: [
      'Market Entry Strategy',
      'Cross-cultural Business Consulting',
      'International Partnership Development',
      'Global Compliance Guidance',
      'Localization Services',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive business solutions tailored to help you achieve your goals and drive sustainable growth."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={cn(
                    "scroll-mt-20",
                    index % 2 === 0 ? "" : "lg:flex-row-reverse",
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                      
                      <ul className="space-y-4 mt-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center text-primary font-medium hover:underline"
                        >
                          Learn more about {service.title}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 border rounded-xl p-8 h-full">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">How We Can Help</h3>
                        <p className="text-muted-foreground">Our {service.title.toLowerCase()} service delivers tangible results through a proven methodology tailored to your specific needs and goals.</p>
                        
                        <div className="space-y-4">
                          <div className="relative pl-8">
                            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-muted">
                              <span className="text-sm font-medium">1</span>
                            </div>
                            <h4 className="font-medium">Discovery & Analysis</h4>
                            <p className="text-sm text-muted-foreground">We begin with a thorough assessment of your current situation.</p>
                          </div>
                          
                          <div className="relative pl-8">
                            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-muted">
                              <span className="text-sm font-medium">2</span>
                            </div>
                            <h4 className="font-medium">Strategy Development</h4>
                            <p className="text-sm text-muted-foreground">We create a customized action plan aligned with your objectives.</p>
                          </div>
                          
                          <div className="relative pl-8">
                            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-muted">
                              <span className="text-sm font-medium">3</span>
                            </div>
                            <h4 className="font-medium">Implementation</h4>
                            <p className="text-sm text-muted-foreground">Our team executes the strategy with precision and expertise.</p>
                          </div>
                          
                          <div className="relative pl-8">
                            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-muted">
                              <span className="text-sm font-medium">4</span>
                            </div>
                            <h4 className="font-medium">Monitoring & Optimization</h4>
                            <p className="text-sm text-muted-foreground">We continuously track progress and refine our approach.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialCarousel />
      
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss how our services can help your business reach its full potential."
      />
    </>
  );
}