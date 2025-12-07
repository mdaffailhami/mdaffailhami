import React from "react";

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
  shortDescription: string;
  longDescription: string;
  images: string[];
  techs: Tech[];
  buttons: {
    type: "github" | "project" | "custom";
    label: string;
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
  images: string[];
};
