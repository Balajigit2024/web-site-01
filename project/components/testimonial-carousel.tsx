"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with Acme Inc. transformed our business operations completely. Their innovative solutions helped us increase efficiency by 40% in just three months.",
    author: "Alexandra Chen",
    position: "CEO",
    company: "TechForward"
  },
  {
    id: 2,
    content: "The team at Acme Inc. delivered beyond our expectations. Their strategic approach to our challenges resulted in significant growth and a stronger market position.",
    author: "Michael Rodriguez",
    position: "Marketing Director",
    company: "Global Innovations"
  },
  {
    id: 3,
    content: "I've worked with many service providers, but Acme Inc. stands out with their attention to detail and commitment to excellence. Truly a game-changer for our organization.",
    author: "Sarah Johnson",
    position: "Operations Manager",
    company: "Elevate Solutions"
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-xl p-8 md:p-10 shadow-sm border relative">
                    <Quote className="text-primary/20 absolute top-6 left-6 h-12 w-12 -z-10" />
                    <blockquote>
                      <p className="text-lg md:text-xl text-foreground mb-6">
                        "{testimonial.content}"
                      </p>
                      <footer>
                        <div className="flex items-center">
                          <div>
                            <p className="text-base font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm border pointer-events-auto"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-background/80 shadow-sm backdrop-blur-sm border pointer-events-auto"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}