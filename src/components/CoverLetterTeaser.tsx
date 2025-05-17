import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles } from 'lucide-react';

export function CoverLetterTeaser() {
  return (
    <section id="tool-teaser" className="bg-primary/10 dark:bg-primary/5 py-16 md:py-20">
      <div className="container mx-auto text-center">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Need a Cover Letter?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Leverage AI to craft a compelling cover letter tailored to your experience and the job you're applying for. Try our Cover Letter Generator tool!
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/40 transition-all">
          <Link href="/cover-letter-generator">
            <FileText className="mr-2 h-5 w-5" /> Generate Cover Letter
          </Link>
        </Button>
      </div>
    </section>
  );
}
