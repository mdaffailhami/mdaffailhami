"use client";

import { Slide } from "@/components/slide";
import { ContactForm } from "@/components/contact-form";
import { socialMedia } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactSlide() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Slide id="contact" className="flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-medium mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through the form below or connect with me on social media.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Social Media & Info */}
          <div className="space-y-8">
            {/* Social Media Links */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social) => (
                  <Link
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 dark:from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-3">
                      <div
                        className="shrink-0"
                        style={{
                          color:
                            mounted && resolvedTheme === "dark"
                              ? social.color.dark
                              : social.color.light,
                          filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                        }}
                      >
                        <social.Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 dark:from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold">Let's Collaborate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 dark:from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
