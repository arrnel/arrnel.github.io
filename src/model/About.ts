import type {AboutDetail} from "./AboutDetail.ts";
import type {FormatTranslateCode} from "./ModifiedText.ts";

export interface About {
  image: string;
  summary: FormatTranslateCode;
  details: AboutDetail[];
}
