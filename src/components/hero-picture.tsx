"use client";
import { useIsHydrated, useStreamBreakpoint } from "@/hooks";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const HeroPicture = ({
  mobile,
  desktop,
  className,
}: {
  mobile: StaticImageData;
  desktop: StaticImageData;
  className?: string;
}) => {
  const isHydrated = useIsHydrated();
  const breakpoint = useStreamBreakpoint();
  const isMobile = breakpoint < 4;

  if (!isHydrated) return null;

  return (
    <Image
      src={isMobile ? mobile : desktop}
      alt="The picture of Daffa Ilhami"
      className={cn("rounded-b-full w-full max-w-xs lg:max-w-md", className)}
    />
  );
};
