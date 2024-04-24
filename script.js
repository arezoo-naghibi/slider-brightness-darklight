const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", switchHandler);

function switchHandler() {
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
window.onload = function () {
  let localGet = localStorage.getItem("theme");
  if (localGet === "dark") {
    document.body.classList.add("dark");
  }
};

//brightness
const rangeInput = document.querySelector("input");
const body = document.querySelector("body");

rangeInput.addEventListener("change", function (event) {
  body.style.filter = "brightness(" + event.target.value + "%)";
});

//slider
let $ = document;
let sliderImgElem = $.querySelector("img");
let prevBtn = $.querySelector(".prev");
let nextBtn = $.querySelector(".next");

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

let imageArray = ["./1.jpg", "./2.jpg"];
let imgIndex = 0;

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imageArray.length - 1;
  }
  sliderImgElem.setAttribute("src", imageArray[imgIndex]);
  console.log(imgIndex, imageArray[imgIndex]);
}

function nextImage() {
  imgIndex++;
  if (imgIndex > imageArray.length - 1) {
    imgIndex = 0;
  }
  sliderImgElem.setAttribute("src", imageArray[imgIndex]);
  console.log(imgIndex, imageArray[imgIndex]);
}
// setInterval(nextImage, 3000);


//add input

const inputElem = document.querySelector(".write");
const addElem = document.querySelector(".add");
const clearElem = document.querySelector(".clear");
const boxElem = document.querySelector(".box");

addElem.addEventListener("click",addHandler)
clearElem.addEventListener("click",clearHandler)

function addHandler(){
save();
}

function save() {
 let newElem=document.createElement("div")
  newElem.className="box";
  
  let newul=document.createElement("ul")
newul.className="ull"

  let newLi=document.createElement("li")
  newLi.className = "li1";

  let newSpan=document.createElement("span")
  newSpan.localName = "text";
  newSpan.innerHTML = inputElem.value;

  let trash=document.createElement("i")
  trash.className ="fa fa-trash";

  newLi.append(newSpan,trash);
  newul.append(newLi);
  newElem.append(newul);
  boxElem.append(newElem);
  inputElem.value="";
  // console.log(inputElem)
}

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputElem.value) {
      save();
    }
  }
});



function clearHandler(){
  inputElem.value="";
}