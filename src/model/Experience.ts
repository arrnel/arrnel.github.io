import type { ImageLink } from "./ImageLink.ts";

export interface Experience {
  position: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
  skills: ImageLink[];
}