import type { Link } from "./Link.ts";

export interface Project {
  title: string;
  short_description: string;
  description: string;
  links: Link[];
  images: string[];
}