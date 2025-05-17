import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> 

              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground h-20 overflow-hidden text-ellipsis">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3 bg-muted/30 p-4">
                {project.liveUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
