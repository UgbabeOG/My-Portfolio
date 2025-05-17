import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { RecommendedForYouSection } from '@/components/RecommendedForYouSection';
import { ContactSection } from '@/components/ContactSection';
import { CoverLetterTeaser } from '@/components/CoverLetterTeaser';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <RecommendedForYouSection />
      <CoverLetterTeaser />
      <ContactSection />
    </>
  );
}
