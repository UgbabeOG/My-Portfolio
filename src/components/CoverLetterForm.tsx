"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generateCoverLetter, type CoverLetterInput } from "@/ai/flows/cover-letter-generator";
import { Loader2, Copy } from "lucide-react";

const coverLetterSchema = z.object({
  userExperience: z.string().min(50, { message: "Please describe your experience in at least 50 characters." }),
  jobDescription: z.string().min(50, { message: "Please provide a job description of at least 50 characters." }),
});

type CoverLetterFormValues = z.infer<typeof coverLetterSchema>;

export function CoverLetterForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);

  const form = useForm<CoverLetterFormValues>({
    resolver: zodResolver(coverLetterSchema),
    defaultValues: {
      userExperience: "",
      jobDescription: "",
    },
  });

  async function onSubmit(data: CoverLetterFormValues) {
    setIsLoading(true);
    setGeneratedLetter(null);
    try {
      const input: CoverLetterInput = {
        userExperience: data.userExperience,
        jobDescription: data.jobDescription,
      };
      const result = await generateCoverLetter(input);
      setGeneratedLetter(result.coverLetter);
      toast({
        title: "Success!",
        description: "Cover letter generated.",
      });
    } catch (error) {
      console.error("Error generating cover letter:", error);
      toast({
        title: "Error",
        description: "Failed to generate cover letter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    if (generatedLetter) {
      navigator.clipboard.writeText(generatedLetter)
        .then(() => {
          toast({ title: "Copied!", description: "Cover letter copied to clipboard." });
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
          toast({ title: "Error", description: "Failed to copy text.", variant: "destructive" });
        });
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Generate Your Cover Letter</CardTitle>
        <CardDescription>Fill in the details below and let our AI assistant craft a personalized cover letter for you.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="userExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Your Experience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your relevant skills, past roles, and achievements..."
                      {...field}
                      rows={8}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Target Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the job description you are applying for here..."
                      {...field}
                      rows={8}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Cover Letter"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {generatedLetter && (
        <div className="p-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-primary">Generated Cover Letter:</h3>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
          </div>
          <Card className="bg-muted/50 p-4 max-h-[500px] overflow-y-auto">
            <pre className="whitespace-pre-wrap break-words text-sm text-foreground/90 font-sans">
              {generatedLetter}
            </pre>
          </Card>
        </div>
      )}
    </Card>
  );
}
