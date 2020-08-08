// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const contents = document.querySelector("h2");

const superEventHandler = {
  handleMouseOver: function mouseOver() {
    contents.innerHTML = "The mouse is here!";
    contents.style.color = colors[0];
  },
  handleMouseLeave: function mouseLeave() {
    contents.innerHTML = "The mouse is gone!";
    contents.style.color = colors[1];
  },
  handleRightClick: function Rightclick(event) {
    if (event.button === 2 || event.which === 3) {
      contents.innerHTML = "That was right click!!";
      contents.style.color = colors[3];
    }
  },
  handleResize: function reSize() {
    contents.innerHTML = "You just reSize!!";
    contents.style.color = colors[2];
  }
};

function init() {
  window.oncontextmenu = function() {
    return false;
  };
  contents.addEventListener("mouseover", superEventHandler.handleMouseOver);
  contents.addEventListener("mouseout", superEventHandler.handleMouseLeave);
  window.addEventListener("mousedown", superEventHandler.handleRightClick);
  window.addEventListener("resize", superEventHandler.handleResize);
}

init();
