let switchImage = document.getElementById("switcher");
let switchTimer = null;

let gameButton = document.getElementById("gameButton")
let weebButton = document.getElementById("weebButton")

let seriousButton = document.getElementById("seriousButton")
let toolButton = document.getElementById("toolButton")

let sectionGame = document.getElementById("gameSection");
let sectionweeb = document.getElementById("weebSection");
let sectionSerious = document.getElementById("seriousSection");
let sectionTool = document.getElementById("toolSection");





const sections = [
sectionGame,sectionweeb,sectionSerious,sectionTool
];



let actual = null;



const image = [
  switchImage.src,
  "../Assets/demo/Capture_decran_2025-05-17_234707.png"
];

let index = 0;
let actualSwitcher;
function SetSwitcher(switcher)
{
actualSwitcher = switcher;
index =0;
}

function ChangeImage() {
  switchImage.style.opacity = 0;
  switchImage.style.transform = "translateX(-40px)";
  index++;
  if (index > image.length - 1) index = 0;
  setTimeout(() => {
    switchImage.src = image[index];
    switchImage.style.transition = "none";
    switchImage.style.transform = "translateX(40px)";
        void switchImage.offsetWidth;
    switchImage.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    switchImage.style.opacity = 1;
    switchImage.style.transform = "translateX(0)";

    autoChange();
  }
    , 500);
}

function autoChange() {
  if (switchTimer != null) {
    clearTimeout(switchTimer);
  }
  switchTimer = setTimeout(ChangeImage, 5000);
}

autoChange();


if (switchImage) switchImage.addEventListener("click", ChangeImage);
 
if(gameButton) gameButton.addEventListener("click",() => ChangeSection(sectionGame))
if(weebButton) weebButton.addEventListener("click",() => ChangeSection(sectionweeb))

if(seriousButton) seriousButton.addEventListener("click",() => ChangeSection(sectionSerious))
if(toolButton) toolButton.addEventListener("click",() => ChangeSection(sectionTool))

function ChangeSection(select)
{
  console.log(select);
  if(select == null) return;
  if(actual== null)
  {
    select.style.display = "grid";
         setTimeout(() => {select.style.opacity = 1; },100);
    actual = select;
  }
  if (actual == select) return;
  actual.style.opacity = 0
  setTimeout(() => {
       actual.style.display = "none";
       select.style.display = "grid";
         setTimeout(() => {select.style.opacity = 1; },100);
    actual = select;
       },500);
}
ChangeSection(document.getElementById(localStorage.getItem("select")));

document.getElementById("scrollBottom").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
  FlashSpot(footer);
});

let footer = document.getElementById("footer");
let clignCount = 6;
let count = 0;
let color = false;
function FlashSpot(flasher) {
  count = 0;
  let lInterval = setInterval(() => {
    count++;
    if (color) flasher.style.backgroundColor = "rgb(75, 75, 75)";
    else flasher.style.backgroundColor = "black";

    color = !color;
    console.log(count);
    if (count == clignCount) {
      clearInterval(lInterval);
      flasher.style.backgroundColor = "black";
    }
  }, 200);

}