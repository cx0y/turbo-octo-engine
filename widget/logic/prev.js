import { developers } from "../../list/webring .mjs";
import { clickLeft } from "../../logic/click.mjs";
window.onload = function () {
  clickLeft(developers);
  window.close();
};
