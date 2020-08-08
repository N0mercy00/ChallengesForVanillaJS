// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const newtext = document.querySelector("h2");
newtext.innerHTML = "Hello!!";
newtext.style.color = "white";

function handlesize() {
  const width = window.innerWidth;
  console.log(width);
  if (width <= 800) {
    document.body.style.backgroundColor = "rgb(64,156,222)";
  } else if (width > 800 && width <= 1300) {
    document.body.style.backgroundColor = "rgb(185,126,230)";
  } else if (width > 1300) {
    document.body.style.backgroundColor = "rgb(242,222,70)";
  }
}

function init() {
  window.addEventListener("resize", handlesize);
}

init();
