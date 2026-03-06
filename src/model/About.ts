import type {AboutDetail} from "./AboutDetail.ts";

export interface About {
  image: string;
  summary: string;
  details: AboutDetail[];
}
