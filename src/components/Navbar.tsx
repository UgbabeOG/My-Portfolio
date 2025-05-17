"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: '/cover-letter-generator', label: 'Cover Letter AI' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href || (href.includes('#') && pathname === '/');
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground/80"
        )}
        onClick={() => setIsSheetOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <ThemeToggleButton />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="mb-8 flex justify-between items-center">
                  <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} label={item.label} />
                  ))}
                  {/* You might want to add ThemeToggleButton here for mobile too */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
