import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24',
        className
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[40%] h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[15%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
            {title}
          </h1>
          <p className="mb-10 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}