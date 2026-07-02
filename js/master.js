//Toggle Sping Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");
  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of Images
let imgsArray = [
  "Landing2.jpg",
  "Landing1.jpg",
  "Landing3.jpg",
  "Landing4.jpg",
  "Landing5.jpg",
];

setInterval(() => {
  // Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // Change Background Image Url
  landingPage.style.backgroundImage =
    'url("imgs/' + imgsArray[randomNumber] + '")';
}, 10000);
