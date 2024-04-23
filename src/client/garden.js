//Garden
const plantButton_pink = document.getElementById("plantButton_pink");
const plantButton_red = document.getElementById("plantButton_red");
const garden = document.querySelector(".garden");



plantButton_pink.addEventListener("click", function() {
    const flower = document.createElement("img");
    flower.src = "images/pink_flower.png";
    flower.classList.add("flower");

    // Calculate the maximum allowed X coordinate
    const maxWidth = window.innerWidth * 0.6;

    // Get the position of the bottom of the garden image relative to the viewport
    const gardenRect = garden.getBoundingClientRect();
    const bottomOfGarden = gardenRect.top + gardenRect.height - 100;

    // Calculate the maximum allowed Y coordinate (no lower than the bottom of the garden image)
    const maxY = bottomOfGarden - flower.height;

    // Generate random coordinates within the valid range
    const flowerX = Math.random() * (maxWidth - flower.width);
    const flowerY = Math.random() * (maxY - gardenRect.top) + gardenRect.top;

    // Set flower position
    flower.style.left = flowerX + "px";
    flower.style.top = flowerY + "px";

    // Append flower to the garden
    garden.appendChild(flower);
});




