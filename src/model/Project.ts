import type { Link } from "./Link.ts";
import type {ModifiedText} from "./ModifiedText.ts";

export interface Project {
  id: string;
  title: string;
  short_description: string;
  description: ModifiedText;
  links: Link[];
  logo: string;
  images: string[];
}