import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-2xl">
                <span className="text-primary">Acme</span>
                <span className="text-primary/80">Inc.</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading the industry with innovative solutions and exceptional service since 2010.
            </p>
            <div className="flex gap-4 pt-2">
              {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  asChild
                >
                  <Link href={`https://${social}.com`} target="_blank" rel="noreferrer">
                    <span className="sr-only">{social}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Business Consulting', href: '/services#consulting' },
                { name: 'Digital Marketing', href: '/services#marketing' },
                { name: 'Web Development', href: '/services#development' },
                { name: 'Data Analytics', href: '/services#analytics' },
                { name: 'Brand Strategy', href: '/services#strategy' },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-primary/80" />
                <span>123 Business Avenue, Tech Park, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-primary/80" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-primary/80" />
                <span>contact@acmeinc.com</span>
              </li>
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Acme Inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed and built with care in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}