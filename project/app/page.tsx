import HeroSection from '@/components/hero-section';
import ServiceCard from '@/components/service-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import StatsSection from '@/components/stats-section';
import ClientsSection from '@/components/clients-section';
import CTASection from '@/components/cta-section';
import { Package, Truck, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection
        title="SRI BALAJI TRADERS"
        subtitle="Your Trusted Partner in Quality Trading Solutions"
        ctaText="Contact Us"
        ctaLink="/contact"
        secondaryCtaText="Our Products"
        secondaryCtaLink="/services"
      />

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Sri Balaji Traders</h2>
              <p className="text-muted-foreground text-lg">
                Established with a vision to provide quality trading solutions, Sri Balaji Traders has been a trusted name in the industry for over two decades. We specialize in sourcing and supplying high-quality products to meet diverse business needs.
              </p>
              <p className="text-muted-foreground text-lg">
                Our commitment to excellence, reliable service, and customer satisfaction has made us a preferred choice for businesses across the region.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7654579/pexels-photo-7654579.jpeg"
                alt="Sri Balaji Traders Warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional service and value to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Quality Products"
              description="We source and supply only the highest quality products that meet industry standards."
              icon={Package}
              link="/services"
            />
            <ServiceCard
              title="Timely Delivery"
              description="Our efficient logistics ensure your orders are delivered on time, every time."
              icon={Truck}
              link="/services"
            />
            <ServiceCard
              title="24/7 Support"
              description="Our dedicated team is available round the clock to assist you with any queries."
              icon={Clock}
              link="/contact"
            />
            <ServiceCard
              title="Trusted Partner"
              description="With decades of experience, we're a name you can trust for all your trading needs."
              icon={Shield}
              link="/about"
            />
          </div>
        </div>
      </section>

      <StatsSection
        title="Our Growth Story"
        subtitle="Over the years, we've achieved significant milestones through dedication and hard work"
        stats={[
          {
            value: "20+",
            label: "Years of Excellence",
            icon: Clock
          },
          {
            value: "1000+",
            label: "Happy Clients",
            icon: Package
          },
          {
            value: "50+",
            label: "Product Categories",
            icon: Shield
          },
          {
            value: "99%",
            label: "Client Satisfaction",
            icon: Truck
          }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
                alt="Our commitment to quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
              <p className="text-muted-foreground text-lg">
                At Sri Balaji Traders, we're committed to maintaining the highest standards of quality and service. Our extensive network of suppliers and state-of-the-art facilities enable us to meet diverse customer requirements efficiently.
              </p>
              <p className="text-muted-foreground text-lg">
                We continuously invest in improving our processes and expanding our product range to better serve our customers' evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Partner with Us?"
        description="Contact us today to discuss how we can fulfill your trading requirements."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </>
  );
}