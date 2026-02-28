import type { ImageLink } from "./ImageLink.ts";

export interface Experience {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image_link: ImageLink[];
}