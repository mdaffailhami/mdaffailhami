import React from "react";
import { StaticImageData } from "next/image";

export type Tech = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: {
    light: string;
    dark: string;
  };
};

export type Project = {
  title: string;
  description: string;
  images: (string | StaticImageData)[];
  techs: Tech[];
  links: {
    type: "github" | "website" | "download" | "other";
    label?: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

export type Experience = {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  images: (string | StaticImageData)[];
};
