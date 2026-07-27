import Image from 'next/image';
import { memo } from 'react';
import type { Skill } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills, profile } from '@/data/portfolio';
import { Download, Briefcase, Sparkles, CircleDot } from 'lucide-react';
import Link from 'next/link';

const SkillCard = memo(({ skill }: { skill: Skill }) => (
  <Card className="text-center hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:-translate-y-1">
    <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
      <skill.icon className="h-10 w-10 text-primary" />
      <p className="font-medium text-card-foreground text-sm">{skill.name}</p>
    </CardContent>
  </Card>
));

const quickTechPills = ['Next.js', 'TypeScript', 'React', 'Go', 'Docker', 'Firebase', 'AI/ML', 'Tailwind CSS'];

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse">
              <CircleDot className="h-4 w-4" />
              Available for Opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Hi, I&apos;m <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">{profile.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {profile.title}
            </p>
            <p className="text-md md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {quickTechPills.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 bg-muted/80 border border-border/50">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-all duration-300 bg-primary hover:bg-primary/90">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" /> View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/30 transition-all duration-300 border-primary/30 hover:border-primary/60">
                <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                 <Download className="mr-2 h-5 w-5" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl opacity-60" />
              <Image
                src={profile.avatarUrl}
                alt={`Professional portrait of ${profile.name}`}
                width={300}
                height={300}
                priority
                className="relative rounded-full shadow-2xl border-4 border-primary/50 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-center text-foreground">My Core Skills</h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
