// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selector = document.querySelector("select");

function handlechange(event) {
  localStorage.removeItem("Country");
  console.log(event.target.value, "1");
  localStorage.setItem("Country", event.target.value);
}

function checkandActivate() {
  if (localStorage !== null) {
    const Country = localStorage.getItem("Country");
    const newSel = document.getElementById("Menu");

    console.log(Country, "2");
    console.log(newSel);

    //newSel.innerText="Korea";

    if (Country === "Kr") {
      newSel.innerText = "Korea";
    } else if (Country === "Gr") {
      newSel.innerText = "Greece";
    } else if (Country === "Tu") {
      newSel.innerText = "Turkey";
    } else if (Country === "Fi") {
      newSel.innerText = "Finland";
    }
  } else {
    selector.addEventListener("change", handlechange);
  }
}

function init() {
  selector.addEventListener("change", handlechange);
  checkandActivate();
}
init();
