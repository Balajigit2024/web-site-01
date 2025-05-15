import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import CTASection from '@/components/cta-section';
import Image from 'next/image';
import { Check } from 'lucide-react';

// Define team members data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    imageSrc: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    imageSrc: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    imageSrc: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'David Wilson',
    position: 'Operations Manager',
    imageSrc: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Acme Inc."
        subtitle="We're a team of passionate experts dedicated to helping businesses thrive in the modern marketplace."
      />

      {/* Company Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2010, Acme Inc. began with a simple mission: to help businesses navigate the increasingly complex digital landscape and achieve their full potential.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a small consulting firm has grown into a comprehensive business solutions provider, serving clients across industries and around the globe. Our success is built on a foundation of expertise, integrity, and a genuine commitment to our clients' success.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to evolve and innovate, staying ahead of industry trends to provide cutting-edge solutions that drive real results. Our team of experts brings diverse perspectives and specialized knowledge to every project, ensuring a holistic approach to addressing your business challenges.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaborating in an office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and define how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace change and constantly seek new ways to solve problems and create value.',
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency, building trust through every interaction.',
              },
              {
                title: 'Excellence',
                description: 'We strive for exceptional quality in all our work, never settling for "good enough."',
              },
              {
                title: 'Collaboration',
                description: 'We believe the best solutions come from working together with our clients and each other.',
              },
              {
                title: 'Client Success',
                description: 'Your success is our success – we're committed to helping you achieve your goals.',
              },
              {
                title: 'Continuous Learning',
                description: 'We're dedicated to ongoing growth and development to stay at the cutting edge.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection className="bg-background" />

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the experts who lead our company and drive our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Us?"
        description="Join our diverse portfolio of satisfied clients and experience the Acme difference."
      />
    </>
  );
}