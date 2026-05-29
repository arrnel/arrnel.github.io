import type { ImageLink } from "./ImageLink.ts";
import type {ModifiedText} from "./ModifiedText.ts";

export interface Experience {
  id: string;
  position: string;
  company: string;
  short_description: string;
  description: ModifiedText;
  start_date: string;
  end_date: string;
  skills: ImageLink[];
}