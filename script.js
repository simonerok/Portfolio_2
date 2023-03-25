/* DARK MODE */

/* CHANGE TO DARK */
let theme = localStorage.getItem("data-theme"); // dette er taget fra html (OVER HEADEREN)
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
// Apply retrived them to the website
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
// function swapImage() {
//   const headerGraphics = document.querySelector(".header_graphics");
//   const currentImage = headerGraphics.querySelector("object");
//   const newImageUrl = "graphics/light-image.svg";
  
//   currentImage.data = newImageUrl;
// }


function swapImage() {
  const imgElement = document.querySelector('.header_graphics object');
  let newImageUrl;

  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    newImageUrl = 'graphics/light-image.png';
  } else {
    newImageUrl = 'graphics/dark-image.svg';
  }

  imgElement.data = newImageUrl;
}
