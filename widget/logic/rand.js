import { developers } from "../../list/webring .mjs";
import { randomLinkClick } from "../../logic/click.mjs";
window.onload = function () {
  randomLinkClick(developers);
  window.close();
};
