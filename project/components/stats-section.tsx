import { DivideIcon as LucideIcon, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

const defaultStats: Stat[] = [
  {
    value: "500+",
    label: "Clients Worldwide",
    icon: Globe
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    icon: Users
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Award
  },
  {
    value: "40%",
    label: "Average Growth",
    icon: TrendingUp
  }
];

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  className?: string;
}

export default function StatsSection({
  title = "Our Impact in Numbers",
  subtitle = "We're proud of the results we've achieved for our clients over the years.",
  stats = defaultStats,
  className,
}: StatsSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card border rounded-xl p-6 text-center flex flex-col items-center transition-all hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}