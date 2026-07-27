import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { DeveloperStatsSection } from '@/components/DeveloperStatsSection';
import { RecommendedForYouSection } from '@/components/RecommendedForYouSection';
import { ContactSection } from '@/components/ContactSection';
import { CoverLetterTeaser } from '@/components/CoverLetterTeaser';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <DeveloperStatsSection />
      <RecommendedForYouSection />
      <CoverLetterTeaser />
      <ContactSection />
    </>
  );
}
