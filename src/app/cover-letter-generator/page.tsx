import { CoverLetterForm } from '@/components/CoverLetterForm';
import { FileText, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI Cover Letter Generator - DevFolio',
  description: 'Generate tailored cover letters using AI based on your experience and job descriptions.',
};

export default function CoverLetterGeneratorPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            AI Cover Letter Generator
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Craft a professional cover letter in minutes. Just provide your experience and the job description, and let AI do the rest.
          </p>
        </div>
        <CoverLetterForm />
      </div>
    </div>
  );
}
