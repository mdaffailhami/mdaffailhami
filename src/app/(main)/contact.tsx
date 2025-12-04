"use client";

import { Slide } from "@/components/slide";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function CopyrightSection({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-base text-primary/75 dark:text-primary text-center",
        className,
      )}
    >
      &copy; 2021 - 2026 Daffa Ilhami. All Rights Reserved.
    </span>
  );
}

export default function ContactSlide() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Slide
      id="contact"
      className="flex items-start md:items-center [@media(height>=51rem)]:items-center"
    >
      <div className="w-full max-w-lg md:max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl font-medium mb-2">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through the form below or connect with me on social media.
          </p>
          <hr className="my-5 border border-border" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Left Column - Social Media & Info */}
          <div className="flex flex-col gap-y-8">
            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="max-md:hidden text-2xl font-semibold text-center md:text-left">
                Connect With Me
              </h3>
              <div className="flex flex-row flex-wrap justify-evenly md:gap-4 md:grid md:grid-cols-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg border border-border bg-card p-3 md:p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-103"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="opacity-100 md:opacity-50 group-hover:opacity-100 absolute inset-0 bg-linear-to-br from-primary/10 dark:from-primary/20 to-transparent transition-opacity duration-300" />

                    <div className="relative flex items-center justify-center md:justify-start gap-3">
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
                      <span className="hidden md:block font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="max-md:hidden group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 dark:from-primary/20 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold">Let's Collaborate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>
            {/* Desktop copyright */}
            <CopyrightSection className="max-md:hidden" />
          </div>

          {/* Right Column - Contact Form */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            {/* Gradient overlay on hover */}
            <div className="opacity-100 md:opacity-50 group-hover:opacity-100 absolute inset-0 bg-linear-to-br from-primary/5 dark:from-primary/10 to-transparent transition-opacity duration-300" />

            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 max-md:hidden">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
          </div>
          {/* Mobile copyright */}
          <CopyrightSection className="md:hidden -translate-y-2" />
        </div>
      </div>
    </Slide>
  );
}
