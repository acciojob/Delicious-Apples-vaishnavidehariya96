// Select the main photo image
const mainPhoto = document.querySelector(".photo-main img");

// Select all small thumbnail images
const thumbnails = document.querySelectorAll(".photo-album img");

// Loop through all thumbnails and add a click event to each
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    // Change the main image source to the clicked thumbnail's source
    mainPhoto.src = thumbnail.src;
  });
});

// Optional: Log a message to the console (to test if JS is working)
console.log("Welcome to Accio Jobs - Apple Portfolio Page!");
