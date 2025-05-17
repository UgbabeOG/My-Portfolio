
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

const CoverLetterInputSchema = z.object({
  userExperience: z
    .string()
    .describe('Description of the user past work experience.'),
  jobDescription: z.string().describe('The job description to tailor the cover letter to.'),
});
export type CoverLetterInput = z.infer<typeof CoverLetterInputSchema>;

const CoverLetterOutputSchema = z.object({
  coverLetter: z.string().describe('The generated cover letter.'),
});
export type CoverLetterOutput = z.infer<typeof CoverLetterOutputSchema>;

export async function generateCoverLetter(input: CoverLetterInput): Promise<CoverLetterOutput> {
  return generateCoverLetterFlow(input);
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
    const llmResponse = await prompt(input); // llmResponse is GenerateResponse<z.infer<typeof CoverLetterOutputSchema>>
    
    if (!llmResponse.output) {
      console.error('AI failed to produce structured output conforming to the schema for cover letter generation.');
      const rawText = llmResponse.text;
      if (rawText) {
        console.error('Raw AI response text for cover letter generation:', rawText);
      }
      // This error will be caught by the form's try/catch block and displayed as a toast
      throw new Error('Failed to generate cover letter: The AI did not provide a response in the expected format. Please try again.');
    }
    
    // Output is guaranteed to be non-null here and should match CoverLetterOutputSchema
    return llmResponse.output;
  }
);
