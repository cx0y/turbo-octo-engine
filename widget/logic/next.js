import { developers } from "../../list/webring .mjs";
import { clickRight } from "../../logic/click.mjs";
window.onload = function () {
  clickRight(developers);
  window.close();
};
