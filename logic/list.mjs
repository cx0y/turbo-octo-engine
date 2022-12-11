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

export {renderList}