
'use server';
/**
 * @fileOverview An AI agent that generates tailored cover letters based on user experience and job description.
 *
 * - generateCoverLetter - A function that handles the cover letter generation process.
 * - CoverLetterInput - The input type for the generateCoverLetter function.
 * - CoverLetterOutput - The return type for the generateCoverLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { logger } from '@/lib/logger';

const CoverLetterInputSchema = z.object({
  userExperience: z
    .string()
    .trim()
    .min(50, { message: 'Please describe your experience in at least 50 characters.' })
    .max(5000, { message: 'Experience must be 5000 characters or fewer.' })
    .describe('Description of the user past work experience.'),
  jobDescription: z
    .string()
    .trim()
    .min(50, { message: 'Please provide a job description of at least 50 characters.' })
    .max(5000, { message: 'Job description must be 5000 characters or fewer.' })
    .describe('The job description to tailor the cover letter to.'),
});
export type CoverLetterInput = z.infer<typeof CoverLetterInputSchema>;

const CoverLetterOutputSchema = z.object({
  coverLetter: z.string().describe('The generated cover letter.'),
});
export type CoverLetterOutput = z.infer<typeof CoverLetterOutputSchema>;

export async function generateCoverLetter(input: CoverLetterInput): Promise<CoverLetterOutput> {
  const parsedInput = CoverLetterInputSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error(
      'Invalid input. Please ensure both fields are complete and under 5000 characters.'
    );
  }

  return generateCoverLetterFlow(parsedInput.data);
}

const prompt = ai.definePrompt({
  name: 'coverLetterPrompt',
  input: {schema: CoverLetterInputSchema},
  output: {schema: CoverLetterOutputSchema},
  prompt: `You are an expert resume and cover letter writer. You will generate a cover letter tailored to the job description provided, using the user's experience.

Job Description: {{{jobDescription}}}

User Experience: {{{userExperience}}}

Cover Letter:`,
});

const generateCoverLetterFlow = ai.defineFlow(
  {
    name: 'generateCoverLetterFlow',
    inputSchema: CoverLetterInputSchema,
    outputSchema: CoverLetterOutputSchema,
  },
  async (input: CoverLetterInput): Promise<CoverLetterOutput> => {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      const llmResponse = await prompt(input);

      if (llmResponse.output) {
        return llmResponse.output;
      }

      const rawText = llmResponse.text;
      logger.error(
        `Cover letter generation attempt ${attempt} failed to produce a valid structured response.`,
        { rawText }
      );

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }

    throw new Error(
      'Failed to generate cover letter after several attempts. Please try again later.'
    );
  }
);
