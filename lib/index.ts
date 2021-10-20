import { obserer } from "./observer";
import { addStyle } from "./addStyle";
import { modernNormalize } from "./modernNormalize";

if (typeof window !== "undefined") {
  addStyle(modernNormalize);
  obserer();
}
