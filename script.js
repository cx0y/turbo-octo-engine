import { developers } from "./list/webring .mjs";
import {renderList} from "./logic/list.mjs";
import {updateLst, goLink, randomLinkClick, clickLeft, clickRight} from "./logic/click.mjs";
import {search} from "./logic/search.mjs";


renderList(developers);
document.getElementById("randomClick").addEventListener("click", () => {
  randomLinkClick(developers);
});

document.getElementById("leftBtn").addEventListener("click", () => {
  clickLeft(developers);
});

document.getElementById("rightBtn").addEventListener("click", () => {
  clickRight(developers);
});

document.getElementById("input").addEventListener("keydown", ()=>{
    search("input", "list_render")
});

