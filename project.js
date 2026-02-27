
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
    a.href = "https://alimohamedwork20-wq.github.io/iphone/";
    a.target = "_blank";
    select.innerHTML = "SELECT IPHONE PROJECT";
  } else if (img2.classList.contains("activImg")) {
    select.style.background = "#0a087666";
    select.style.cursor = "pointer";
    a.href = "https://alimohamedwork20-wq.github.io/avater/";
    a.target = "_blank";
    select.innerHTML = "SELECT AVATER PROJECT";
  } else if (img3.classList.contains("activImg")) {
    select.style.background = "#0a087666";
    select.style.cursor = "pointer";
    a.href = "https://alimohamedwork20-wq.github.io/control_panal/";
    a.target = "_blank";
    select.innerHTML = "SELECT CONTROL PANAL PROJECT";
  } else {
    select.style.background = "transparent";
    select.style.cursor = "default";
    a.href = "#";
    a.target = "_parent";
    select.innerHTML = "SELECT";
  }
}

let search = document.getElementById('srch');
let COFFE = document.getElementById('COFFE');
let CRUDS = document.getElementById('CRUDS');
let Space = document.getElementById('Space');
let Transaction = document.getElementById('Transaction');
let ToDoList = document.getElementById('TO-DO-LIST');
let Course = document.getElementById('Course');
let Shop = document.getElementById('Shop');

function print(){
let srch = search.value.toLowerCase()
if(srch.includes('coffe')){
  COFFE.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('cruds')){
    CRUDS.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('space')){
    Space.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('transaction')){
    Transaction.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('to do list')||srch.includes('to-do-list')){
    ToDoList.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('course')||srch.includes('education platform')||srch.includes('education-platform')){
    Course.scrollIntoView({
    behavior: "smooth"
  })
}else if(srch.includes('shop')){
    Shop.scrollIntoView({
    behavior: "smooth"
  })
}
}