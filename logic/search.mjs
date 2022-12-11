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

export {search};