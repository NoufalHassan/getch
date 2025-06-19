
import type { LucideIcon } from "lucide-react";

export interface Testimonial {
  quote: string;
  name: string;
  field: string;
}

export interface Publication {
  title: string;
  image: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  image: string;
  description: string;
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}