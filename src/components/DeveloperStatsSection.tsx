"use client";

import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Rocket, Sparkles, Monitor } from 'lucide-react';

interface StatItem {
  icon: typeof Code2;
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { icon: Rocket, value: '12+', label: 'Deployed Projects', suffix: '+' },
  { icon: Code2, value: '8+', label: 'Technologies & Frameworks', suffix: '+' },
  { icon: Sparkles, value: 'AI-Powered', label: 'Application Integrations' },
  { icon: Monitor, value: '100%', label: 'Responsive & Modern Codebases' },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericTarget = parseInt(target.replace(/\D/g, '')) || 0;
          const duration = 2000;
          const steps = 60;
          const increment = numericTarget / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              setCount(numericTarget);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {hasAnimated ? target : target}
    </span>
  );
}

export function DeveloperStatsSection() {
  return (
    <section id="stats" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Key Metrics & Capabilities
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Delivering high-quality, scalable solutions across modern web and cloud technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0 flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="space-y-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
