//your code here
// Message to confirm JS is loaded
console.log("Apple Portfolio Loaded Successfully! 🍎");

// Select the main image and all thumbnail images
const mainImage = document.querySelector(".photo-main img");
const thumbnails = document.querySelectorAll(".photo-album li img");

// When a thumbnail is clicked, change the main image
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;
  });
});
