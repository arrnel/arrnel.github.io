import type {ImageLink} from "./ImageLink.ts";

export type Contact = ImageLink;

export class ContactType {

    static readonly TELEGRAM = "telegram";
    static readonly LINKEDIN = "linkedin";
    static readonly EMAIL = "email";
    static readonly GITHUB = "github";

}