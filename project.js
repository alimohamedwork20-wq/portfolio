let menu = document.getElementById("menu");
let content = document.getElementById("content");
menu.addEventListener("click", function () {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
  content.classList.toggle("active");
});

let img1 = document.getElementById("one");
let img2 = document.getElementById("two");
let img3 = document.getElementById("three");
let select = document.getElementById("selecting");
let a = document.getElementById("a");

img1.onclick = function () {
  img1.classList.toggle("activImg");
  img2.classList.remove("activImg");
  img3.classList.remove("activImg");
  button();
};

img2.onclick = function () {
  img2.classList.toggle("activImg");
  img1.classList.remove("activImg");
  img3.classList.remove("activImg");
  button();
};

img3.onclick = function () {
  img3.classList.toggle("activImg");
  img2.classList.remove("activImg");
  img1.classList.remove("activImg");
  button();
};

function button() {
  if (img1.classList.contains("activImg")) {
    select.style.background = "#0a087666";
    select.style.cursor = "pointer";
    a.href = 'https://iphone-work.netlify.app/'
    a.target = '_blank'
  } else if (img2.classList.contains("activImg")) {
    select.style.background = "#0a087666";
    select.style.cursor = "pointer";
    a.href = 'https://avater-work.netlify.app/'
    a.target = '_blank'
  } else if (img3.classList.contains("activImg")) {
    select.style.background = "#0a087666";
    select.style.cursor = "pointer";
    a.href = 'https://control-panal-work.netlify.app/'
    a.target = '_blank'
  } else {
    select.style.background = "transparent";
    select.style.cursor = "default";
    a.href = '#'
    a.target = '_parent'
  }
}
