// ELEMENT SELECTOR FUNCTION
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please check ${selection}. No such element exists`);
  }
}
//  ELEMENT SELECTION
const overlay = getElement("#overlay"); //overlay
const mbNavLinks = getElement(".mb-Navlinks"); //select mobile nav links div
const body = getElement(".body"); // select body
const toggleBars = getElement(".toggle-bars"); // select toggle bar

toggleBars.addEventListener("click", () => {
  toggleBars.classList.add("hide-toggle-bars");
  closeBtn.classList.add("show-close-btn");
  overlay.classList.add("overlay");
  mbNavLinks.classList.add("mb-Navlinks-show");
  body.classList.add("no-scroll");
});
const closeBtn = getElement(".close-btn");
closeBtn.addEventListener("click", () => {
  toggleBars.classList.remove("hide-toggle-bars");
  closeBtn.classList.remove("show-close-btn");
  overlay.classList.remove("overlay");
  mbNavLinks.classList.remove("mb-Navlinks-show");
  body.classList.remove("no-scroll");
});
