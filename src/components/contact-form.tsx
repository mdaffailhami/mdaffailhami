"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SendIcon, LoaderIcon } from "lucide-react";

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

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
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
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground block"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          placeholder="Your name"
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground block"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground block"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Your message..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative overflow-hidden"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : submitStatus === "success" ? (
          "Message Sent!"
        ) : (
          <>
            Send Message
            <SendIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
