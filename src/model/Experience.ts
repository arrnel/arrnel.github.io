import type { ImageLink } from "./ImageLink.ts";
import type {ModifiedText} from "./ModifiedText.ts";

export interface Experience {
  position: string;
  company: string;
  short_description: string;
  description: ModifiedText;
  start_date: string;
  end_date: string;
  skills: ImageLink[];
}