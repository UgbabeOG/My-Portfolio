import { Lightbulb } from 'lucide-react';

export function RecommendedForYouSection() {
  return (
    <section id="recommendations" className="bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto text-center">
        <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Personalized Recommendations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Coming soon! This section will use AI to dynamically suggest projects and content tailored to your interests based on your interaction with the site.
        </p>
      </div>
    </section>
  );
}
