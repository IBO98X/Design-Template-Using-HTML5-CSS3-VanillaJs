// Check If There Is Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Check for active class
  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let theBackgroundInterval;

//Toggle Sping Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");
  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop On All List Item
colorsLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color,
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class On Self
    e.target.classList.add("active");
  });
});

// Switch Random Backgrounds Option
const randomBackgroundsElement = document.querySelectorAll(
  ".random-backgrounds",
);
// Loop On All Spans
randomBackgroundsElement.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Remove Active Class From All Spans
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class On Self
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(theBackgroundInterval);
    }
  });
});

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

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    theBackgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 10000);
  }
}
randomizeImgs();
