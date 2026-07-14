"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormFieldWithIcon from "@/components/ui/form-field-with-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(validator.isEmail, "Enter a valid email address"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const inputClasses =
  "h-11 pl-11 text-sm focus-visible:ring-royal/40 focus-visible:ring-offset-0";

export const ContactUsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const handleSendMessage = async (data: ContactFormValues) => {
    // TODO(client): wire up a real email service (e.g. Formspree / API route).
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success-light">
          <CheckCircle2 className="h-8 w-8 stroke-success" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-navy">Message sent</h3>
        <p className="mb-6 max-w-sm text-sm text-brand-slate">
          Thanks for reaching out — we&apos;ve received your message and will get
          back to you within one business day.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendMessage)} className="w-full">
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-navy">
                  Name
                </FormLabel>
                <FormFieldWithIcon FieldIcon={User}>
                  <FormControl>
                    <Input placeholder="Your name" className={inputClasses} {...field} />
                  </FormControl>
                </FormFieldWithIcon>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-navy">
                  Email
                </FormLabel>
                <FormFieldWithIcon FieldIcon={Mail}>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      className={inputClasses}
                      {...field}
                    />
                  </FormControl>
                </FormFieldWithIcon>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-navy">
                  Message
                </FormLabel>
                <div className="relative">
                  <MessageSquare className="absolute left-[14px] top-[14px] h-5 w-5 stroke-body-gray" />
                  <FormControl>
                    <Textarea
                      placeholder="How can we help?"
                      className="min-h-[140px] resize-y pl-11 text-sm focus-visible:ring-royal/40 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={isSubmitting}
          className="mt-7 w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
};
