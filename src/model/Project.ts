import type { Link } from "./Link.ts";
import type {ModifiedText} from "./ModifiedText.ts";

export interface Project {
  title: string;
  short_description: string;
  description: ModifiedText;
  skills: Link[];
  images: string[];
}