import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, profile } from '@/data/portfolio';
import { Download, Briefcase } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Hi, I&apos;m <span className="text-primary">{profile.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {profile.title}
            </p>
            <p className="text-md md:text-lg text-foreground/80 leading-relaxed">
              {profile.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" /> View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
                <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                 <Download className="mr-2 h-5 w-5" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={300}
              height={300}
              priority
              data-ai-hint={profile.avatarHint}
              className="rounded-full shadow-2xl border-4 border-primary/50 object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">My Core Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <skill.icon className="h-10 w-10 text-primary" />
                  <p className="font-medium text-card-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
