import { cn } from "@/lib/utils";
import { Slide } from "@/components/common/slide";
import { GradientOverlay } from "@/components/common/gradient-overlay";
import { AnimateIn } from "@/components/animation/animate-in";
import { ContactForm } from "./contact-form";
import { SocialListSection } from "./social-list-section";
import { getSocials } from "@/lib/api/socials";

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

export default async function ContactSlide() {
  const socials = (await getSocials()).data ?? [];

  return (
    <Slide id="contact">
      <div className="w-full px-3 lg:px-5 max-w-lg lg:max-w-6xl mx-auto flex flex-col justify-center min-h-full">
        {/* Header */}
        <div className="text-center mb-3 lg:mb-6">
          <AnimateIn animation="zoom-in-[0.9]">
            <h1 className="text-4xl font-medium text-center mb-2">
              Get In Touch
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out
              through the form below or connect with me on social media.
            </p>
          </AnimateIn>
          <hr className="my-5 border border-border" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-12">
          {/* Left Column - Social Media & Info */}
          <div className="flex flex-col lg:gap-y-8">
            <AnimateIn animation="slide-in-from-top-10">
              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="max-lg:hidden text-2xl font-semibold text-center lg:text-left">
                  Connect With Me
                </h3>
                <SocialListSection socials={socials} />
              </div>
            </AnimateIn>

            {/* Additional Info Card */}
            <AnimateIn animation="zoom-in-[1.1]">
              <div className="max-lg:hidden group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <GradientOverlay />
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Let{"'"}s Collaborate
                  </h3>
                  <p className="fl-text-sm/base text-muted-foreground text-left leading-relaxed">
                    I{"'"}m always interested in hearing about new projects and
                    opportunities. Whether you have a question or just want to
                    say hi, I{"'"}ll try my best to get back to you!
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Desktop copyright */}
            <CopyrightSection className="max-lg:hidden" />
          </div>

          {/* Right Column - Contact Form */}
          <AnimateIn animation="slide-in-from-bottom-8">
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <GradientOverlay />
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 max-lg:hidden group-hover:text-primary transition-colors">
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
          {/* Mobile copyright */}
          <CopyrightSection className="lg:hidden -translate-y-2" />
        </div>
      </div>
    </Slide>
  );
}
