# Personal Portfolio and AI Cover Letter Generator

This project is a personal portfolio website built using Next.js, React, and Tailwind CSS. It showcases my projects, skills, and provides contact information. Additionally, it features an innovative AI-powered cover letter generator that leverages Google AI technology to help users create personalized cover letters.

## Features

- **Personal Portfolio:** Displays my projects, skills, and provides an "About Me" section.
- **Contact Form:** Allows visitors to send messages directly from the website.
- **Responsive Design:** The website is fully responsive and works seamlessly on various devices.
- **AI Cover Letter Generator:** A dedicated tool to generate customized cover letters using Google AI.
- **Modern Tech Stack:** Built with Next.js, React, and styled using Tailwind CSS for a fast and modern user experience.
- **Theme Toggle:** Allows users to switch between light and dark modes.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

### Environment Variables

Create a `.env.local` file in the root of the project and add the following values:

```env
NEXT_PUBLIC_GENKIT_MODEL=googleai/gemini-2.0-flash
NEXT_PUBLIC_GOOGLE_AI_API_KEY=your_google_ai_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:9002
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Restart the development server after updating environment variables.



