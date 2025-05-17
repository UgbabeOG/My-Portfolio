'use server';

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  console.log("Contact form submitted:", data);
  // Here you would typically send an email or save to a database
  // For now, we'll simulate a successful submission
  
  // Validate data (optional here since form also validates, but good practice for server actions)
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // Simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Your message has been sent successfully!" };
}
