import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile, socialLinks } from '@/data/portfolio';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ugbabe Choco | Full Stack Software Engineer & AI Builder",
  description:
    "Portfolio of Ugbabe Choco, a full stack software engineer specializing in Next.js, TypeScript, Go, Docker, and AI-powered applications. Explore enterprise projects, microservices, and modern web solutions.",
  keywords: [
    "Ugbabe Choco",
    "Full Stack Developer",
    "Software Engineer",
    "AI Developer",
    "Next.js Portfolio",
    "React",
    "TypeScript",
    "Go",
    "Docker",
    "Firebase",
    "Microservices",
    "Enterprise Web",
    "AI Cover Letter",
    "Software Engineer",
    "Frontend",
    "Portfolio",
    "Nigeria",
    "Remote Developer",
  ],
  authors: [
    { name: "Ugbabe Choco", url: "https://www.linkedin.com/in/godwin-ugbabe" },
  ],
  creator: "Ugbabe Choco",
  openGraph: {
    title: "Ugbabe Choco | Full Stack Software Engineer & AI Builder",
    description:
      "Explore the portfolio and projects of Ugbabe Choco, a developer building modern web apps, AI tools, and enterprise solutions with Next.js, Go, and Docker.",
    url: baseUrl,
    siteName: "Ugbabe Choco Portfolio",
    images: [
      {
        url: "/cyborbMe.jpeg",
        width: 600,
        height: 600,
        alt: "Ugbabe Choco Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ugbabe Choco | Full Stack Software Engineer & AI Builder",
    description:
      "Portfolio of Ugbabe Choco, a full stack software engineer building modern web apps, AI tools, and enterprise solutions.",
    images: ["/cyborbMe.jpeg"],
    creator: "@ugbabeOG",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: baseUrl,
    image: `${baseUrl}${profile.avatarUrl}`,
    description: profile.bio,
    jobTitle: profile.title,
    email: profile.email,
    sameAs: socialLinks.map(link => link.url),
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
