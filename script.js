import { developers } from "./Join/join.mjs";

const list = (text, render) => {
  const ren = document.getElementById(render);
  const ol = document.createElement("ol");
  const elem = document.createElement("a");
  const url = "https://github.com/" + text;
  elem.href = url;
  elem.innerHTML = text;
  elem.target = `_blank`;
  elem.classList = `link`;
  ol.appendChild(elem);
  ren.appendChild(ol);
};

const renderList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    list(arr[i], "list_render");
  }
};
renderList(developers);

const updateLst = (x) => {
  localStorage.clear();
  localStorage.setItem("key", x);
};

const goLink = (x, arr) => {
  const link = document.createElement("a");
  const url = `https://github.com/` + arr[x];
  link.href = url;
  link.target = "_blank";
  link.click();
};
//updateLst(200)

const randomLinkClick = (arr) => {
  let x = Math.floor(Math.random() * arr.length);
  goLink(x, arr);
  updateLst(x);
};

const clickLeft = (arr) => {
  let y = localStorage.getItem("key");
  let x = parseInt(y) - 1;
  goLink(x, arr);
  updateLst(x);
};

const clickRight = (arr) => {
  let y = localStorage.getItem("key");
  let x = parseInt(y) + 1;
  goLink(x, arr);
  updateLst(x);
};

const search = (id, render) => {
  const input = document.getElementById(id);
  const rend = document.getElementById(render);
  var filter, li, a, i, txtValue;
  filter = input.value.toUpperCase();
  li = rend.getElementsByTagName("ol");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

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

