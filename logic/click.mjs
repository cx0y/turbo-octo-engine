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

export {updateLst, goLink, randomLinkClick, clickLeft, clickRight}
