// Run this after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select the main photo
  const mainPhoto = document.querySelector(".photo-main img");
  // Select all small photos
  const smallPhotos = document.querySelectorAll(".photo-album img");

  // Loop through all small images and add a click event
  smallPhotos.forEach(function(photo) {
    photo.addEventListener("click", function() {
      // Change the main photo when a small photo is clicked
      mainPhoto.src = photo.src;
      mainPhoto.alt = photo.alt;

      // Optional: highlight the active photo
      smallPhotos.forEach(p => p.style.borderColor = "transparent");
      photo.style.borderColor = "#ff4b4b";
    });
  });

  // Just to check if JS is working properly
  console.log("✅ JS file linked and running!");
});