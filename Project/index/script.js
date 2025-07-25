let gameNenu = document.getElementById("gameNenu");
let weebNenu = document.getElementById("weebNenu");
let toolNenu = document.getElementById("toolNenu");
let seriousNenu = document.getElementById("seriousNenu");

let footer = document.getElementById("footer");

if (gameNenu) gameNenu.addEventListener("click", () => { localStorage.setItem("select", "gameSection"); });
if (weebNenu) weebNenu.addEventListener("click", () => { localStorage.setItem("select", "weebSection"); });
if (toolNenu) toolNenu.addEventListener("click", () => { localStorage.setItem("select", "toolSection"); });
if (seriousNenu) seriousNenu.addEventListener("click", () => { localStorage.setItem("select", "seriousSection"); });

document.getElementById("scrollBottom").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
  FlashSpot(footer);
});

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