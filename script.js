// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {

  // Select the main image and all the small thumbnail images
  const mainPhoto = document.querySelector(".photo-main img");
  const smallPhotos = document.querySelectorAll(".photo-album img");

  // Loop through all small images and add a click event
  smallPhotos.forEach(function(photo) {
    photo.addEventListener("click", function() {
      // Change the main photo when a small photo is clicked
      mainPhoto.src = photo.src;
    });
  });

  // Just to check if JS is working properly
  console.log("JS file linked and running!");
});
