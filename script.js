// Log message to console
console.log("Apple Portfolio Loaded Successfully! 🍎");

// Get main image and thumbnail images
const mainImage = document.querySelector(".photo-main img");
const thumbnails = document.querySelectorAll(".photo-album li img");

// When thumbnail clicked, update main image
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;
  });
});