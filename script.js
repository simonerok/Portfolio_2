window.addEventListener("DOMContentLoaded", init);

/* HOVER SMILEY */
function init() {
  document.querySelector("#right-eye").addEventListener("mouseover", onOver);
  document.querySelector("#right-eye").addEventListener("mouseout", onOut);
  /*   document.querySelector("#smile").addEventListener("mouseover", moveOver); */

  /* man kan tilføje det på specifikke numre og på hele arrayet med forEach((g, index, array) fx*/
  document.querySelectorAll("g").forEach((g) => {
    g.addEventListener("mouseover", onOver);
    g.addEventListener("mouseout", onOut);
  });

  function onOver(event) {
    console.log("over target", event.target);
    event.target.classList.add("stroke_animation");
  }

  function onOut(event) {
    console.log("over target", event.target);
    event.target.classList.remove("stroke_animation");
  }
}

/* DARK MODE/ LIGHT MODE */

/* CHANGE TO DARK*/
let theme = localStorage.getItem("data-theme"); // dette er bestemt i html
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived theme to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
    swapImage();
  } else {
    changeThemeToDark();
    swapImage();
  }
});

/* SWAP HEADER IMAGE */

function swapImage() {
  const imgElement = document.querySelector(".header_graphics object");
  let newImageUrl;

  if (document.documentElement.getAttribute("data-theme") === "dark") {
    newImageUrl = "graphics/light-image.png";
  } else {
    newImageUrl = "graphics/dark-image.svg";
  }

  imgElement.data = newImageUrl;
}
