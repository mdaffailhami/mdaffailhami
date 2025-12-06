"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SendIcon, LoaderCircleIcon } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Implement actual form submission logic
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after successful submission
    setFormData({ name: "", email: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Name Input */}
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </Field>

      {/* Email Input */}
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
        />
      </Field>

      {/* Message Textarea */}
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-none h-24"
          placeholder="Your message here..."
        />
        {/* <span className="italic font-medium text-right text-[0.95rem]">
          mdaffailhami@gmail.com
        </span> */}
      </Field>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full group/button relative overflow-hidden"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : submitStatus === "success" ? (
          "Message Sent!"
        ) : (
          <>
            Send Message
            <SendIcon className="size-4 transition-transform group-hover/button:translate-x-1" />
          </>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400 text-center">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-sm text-destructive text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
