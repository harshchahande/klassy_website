let b = document.querySelectorAll(".col-7");

function fun1() {
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "block";
  }
  for (i = 0; i < c.length; i++) {
    c[i].style.display = "none";
  }
  for (i = 0; i < d.length; i++) {
    d[i].style.display = "none";
  }
}
let c = document.querySelectorAll(".col-71");
function fun2() {
  for (i = 0; i < c.length; i++) {
    c[i].style.display = "block";
  }
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  for (i = 0; i < d.length; i++) {
    d[i].style.display = "none";
  }
}
let d = document.querySelectorAll(".col-72");
function fun3() {
  for (i = 0; i < d.length; i++) {
    d[i].style.display = "block";
  }
  for (i = 0; i < c.length; i++) {
    c[i].style.display = "none";
  }
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
}
