import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ugbabe Choco | Full Stack Web Developer & Tech Enthusiast",
  description:
    "Portfolio of Ugbabe Choco, a full stack web developer passionate about building scalable, modern web applications and integrating AI for real-world impact. Explore projects, skills, and an AI-powered cover letter generator.",
  keywords: [
    "Ugbabe Choco",
    "Full Stack Developer",
    "Web Developer",
    "AI Developer",
    "Next.js Portfolio",
    "React",
    "TypeScript",
    "AI Cover Letter",
    "Software Engineer",
    "Frontend",
    "Portfolio",
    "Nigeria",
    "Remote Developer",
  ],
  authors: [
    { name: "Ugbabe Choco", url: "https://linkedin.com/in/yourusername" },
  ],
  creator: "Ugbabe Choco",
  openGraph: {
    title: "Ugbabe Choco | Full Stack Web Developer & AI Enthusiast",
    description:
      "Explore the portfolio and projects of Ugbabe Choco, a developer building modern web apps and AI tools.",
    url: "https://your-portfolio-url.com",
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
    title: "Ugbabe Choco | Full Stack Web Developer & Tech Enthusiast",
    description:
      "Portfolio of Ugbabe Choco, a full stack web developer and Tech enthusiast.",
    images: ["/cyborbMe.jpeg"],
    creator: "@yourusername",
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
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
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
