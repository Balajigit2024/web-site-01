import { DivideIcon as LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  linkText?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  link,
  linkText = 'Learn More',
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md border">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 p-2 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}