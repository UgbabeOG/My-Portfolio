'use server';

import * as z from "zod";
import { logger } from '@/lib/logger';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactRecipient = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactRecipient) {
    logger.error('Email delivery configuration is missing. Set RESEND_API_KEY and CONTACT_EMAIL.');
    return {
      success: false,
      message: 'Email delivery is not configured. Please contact the site owner directly.',
    };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'portfolio@yourdomain.com',
        to: contactRecipient,
        subject: `New portfolio message from ${parsed.data.name}`,
        html: `<p><strong>Name:</strong> ${parsed.data.name}</p><p><strong>Email:</strong> ${parsed.data.email}</p><p><strong>Message:</strong></p><p>${parsed.data.message}</p>`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error('Resend API error', { status: response.status, errorText });
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    logger.error('Contact form submission failed', error);
    return {
      success: false,
      message: 'Unable to send your message right now. Please try again later.',
    };
  }
}
