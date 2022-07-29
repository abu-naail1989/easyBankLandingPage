function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please check ${selection}. No such element exists`);
  }
}

const toggleBars = getElement(".toggle-bars");
toggleBars.addEventListener("click", () => {
  toggleBars.classList.add("hide-toggle-bars");
  closeBtn.classList.add("show-close-btn");
});
const closeBtn = getElement(".close-btn");
closeBtn.addEventListener("click", () => {
  toggleBars.classList.remove("hide-toggle-bars");
  closeBtn.classList.remove("show-close-btn");
});
