import { Slide } from "@/components/slide";
import { ContactFormSection } from "./contact-form-section";
import { cn } from "@/lib/utils";
import { GradientOverlay } from "@/components/gradient-overlay";
import { SocialListSection } from "./social-list-section";

function CopyrightSection({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-base text-primary/75 dark:text-primary text-center font-serif",
        className
      )}
    >
      &copy; 2021 - 2026 | Muhammad Daffa Ilhami
    </span>
  );
}

export default function ContactSlide() {
  return (
    <Slide id="contact">
      <div className="w-full px-3 lg:px-5 max-w-lg lg:max-w-6xl mx-auto flex flex-col justify-center min-h-full">
        {/* Header */}
        <div className="text-center mb-3 lg:mb-6">
          <h1 className="text-4xl font-medium text-center mb-2">
            Get In Touch
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through the form below or connect with me on social media.
          </p>
          <hr className="my-5 border border-border" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-12">
          {/* Left Column - Social Media & Info */}
          <div className="flex flex-col gap-y-8">
            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="max-lg:hidden text-2xl font-semibold text-center lg:text-left">
                Connect With Me
              </h3>
              <SocialListSection />
            </div>

            {/* Additional Info Card */}
            <div className="max-lg:hidden group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <GradientOverlay />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  Let{"'"}s Collaborate
                </h3>
                <p className="fl-text-sm/base text-muted-foreground text-left leading-relaxed">
                  I{"'"}m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I{"'"}ll try my best to get back to you!
                </p>
              </div>
            </div>
            {/* Desktop copyright */}
            <CopyrightSection className="max-lg:hidden" />
          </div>

          {/* Right Column - Contact Form */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <GradientOverlay />
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 max-lg:hidden group-hover:text-primary transition-colors">
                Send Me a Message
              </h3>
              <ContactFormSection />
            </div>
          </div>
          {/* Mobile copyright */}
          <CopyrightSection className="lg:hidden -translate-y-2" />
        </div>
      </div>
    </Slide>
  );
}
