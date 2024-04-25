const butterflyBtn = document.getElementById('visitButterfliesButton');
const slideBtn = document.getElementById('visitSlideButton');
const waterBtn = document.getElementById('visitWaterButton');
const flowerBtn = document.getElementById('visitFlowerButton');


const butterflyPopup = document.getElementById("butterfly-popup");
const closeButterflyPopup = butterflyPopup.querySelector(".park-close");

const slidePopup = document.getElementById("slide-popup");
const closeSlidePopup = slidePopup.querySelector(".park-close");

const riverPopup = document.getElementById("river-popup");
const closeRiverPopup = riverPopup.querySelector(".park-close");

const smellFlowersPopup = document.getElementById("smellFlowers-popup");
const closeSmellFlowersPopup = smellFlowersPopup.querySelector(".park-close");

butterflyBtn.addEventListener("click", function() {
    butterflyPopup.style.display = "block";
  });
closeButterflyPopup.addEventListener("click", function() {
    butterflyPopup.style.display = "none";
});

slideBtn.addEventListener("click", function() {
    slidePopup.style.display = "block";
  });
  closeSlidePopup.addEventListener("click", function() {
    slidePopup.style.display = "none";
});

waterBtn.addEventListener("click", function() {
    riverPopup.style.display = "block";
  });
  closeRiverPopup.addEventListener("click", function() {
    riverPopup.style.display = "none";
});

flowerBtn.addEventListener("click", function() {
    smellFlowersPopup.style.display = "block";
  });
  closeSmellFlowersPopup.addEventListener("click", function() {
    smellFlowersPopup.style.display = "none";
});

  