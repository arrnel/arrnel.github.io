import type {Image} from "./Image.ts";
import type {ImageLink} from "./ImageLink.ts";

export interface Profile {
    full_name: string;
    position: string;
    description: string;
    image: Image;
    socials: ImageLink[];
}