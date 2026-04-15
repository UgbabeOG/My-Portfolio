import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { socialLinks, profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>
        <div className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
