//PouchDB
const db = new PouchDB('garden-db');
//Retrieving elements 
const plantButton_pink = document.getElementById("plantButton_pink");
const plantButton_red = document.getElementById("plantButton_red");
const plantButton_orange = document.getElementById("plantButton_orange");
const plantButton_yellow = document.getElementById("plantButton_yellow");
const plantButton_blue = document.getElementById("plantButton_blue");
const plantButton_purple = document.getElementById("plantButton_purple");
const garden = document.querySelector(".garden");
const storeButton = document.getElementById("storeButton");
const storePopup = document.getElementById("storePopup");
const closePopup = storePopup.querySelector(".close");
const inventoryPopup = document.getElementById("inventoryPopup");
const inventoryButton = document.getElementById("inventoryButton");
const closeInventory = document.querySelector("#inventoryPopup .close");
const redButton = document.getElementById("buyButton_red");
const orangeButton = document.getElementById("buyButton_orange");
const yellowButton = document.getElementById("buyButton_yellow");
const blueButton = document.getElementById("buyButton_blue");
const purpleButton = document.getElementById("buyButton_purple");
const pinkButton = document.getElementById("buyButton_pink");
const redItem = document.getElementById("red-item");
const orangeItem = document.getElementById("orange-item");
const yellowItem = document.getElementById("yellow-item");
const blueItem = document.getElementById("blue-item");
const purpleItem = document.getElementById("purple-item");
const pinkItem = document.getElementById("pink-item");
const helpButton = document.getElementById("helpButton");
const helpPopup = document.getElementById("helpPopup");
const closeHelpPopup = document.querySelector("#helpPopup .close");
const settingsButton = document.getElementById("settings");
const settingsPopup = document.getElementById("settingsPopup");
const closeSettingsPopup = settingsPopup.querySelector(".close");
const changeNameButton = document.getElementById("changeNameButton");
const resetButton = document.getElementById("resetButton");
const gardenNameInput = document.getElementById("gardenNameInput");
const gardenNameDisplay = document.querySelector(".centered-text p");
const closeNamePopup = document.querySelector("#nameChange .close");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
//Warning Functions
function showInventoryEmptyWarning() {
  const warningPopup = document.getElementById("inventoryEmptyWarning");
  warningPopup.style.display = "block";
}
function hideInventoryEmptyWarning() {
  const warningPopup = document.getElementById("inventoryEmptyWarning");
  warningPopup.style.display = "none";
}
function shownoMoneyWarning() {
  const warningPopup = document.getElementById("noMoneyWarning");
  warningPopup.style.display = "block";
}
function hidenoMoneyWarning() {
  const warningPopup = document.getElementById("noMoneyWarning");
  warningPopup.style.display = "none";
}
document.getElementById("inventoryEmptyWarningClose").addEventListener("click", function() {
  hideInventoryEmptyWarning();
});
document.getElementById("noMoneyClose").addEventListener("click", function() {
  hidenoMoneyWarning();
});
//Plant Functions
plantButton_red.addEventListener("click", function() {
  const redItemCount = redItem.querySelector(".count");
  const redCount = parseInt(redItemCount.textContent);

  if (redCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      redItemCount.textContent--; // Decrease count

      const flower = document.createElement("img");
      flower.src = "images/red_flower.png";
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
  }
});
plantButton_orange.addEventListener("click", function() {
  const orangeItemCount = orangeItem.querySelector(".count");
  const orangeCount = parseInt(orangeItemCount.textContent);

  if (orangeCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      orangeItemCount.textContent--; // Decrease count

      const flower = document.createElement("img");
      flower.src = "images/orange_flower.png";
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
  }
});
plantButton_yellow.addEventListener("click", function() {
  const yellowItemCount = yellowItem.querySelector(".count");
  const yellowCount = parseInt(yellowItemCount.textContent);

  if (yellowCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      yellowItemCount.textContent--; // Decrease count

      const flower = document.createElement("img");
      flower.src = "images/yellow_flower.png";
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
  }
});
plantButton_blue.addEventListener("click", function() {
  const blueItemCount = blueItem.querySelector(".count");
  const blueCount = parseInt(blueItemCount.textContent);

  if (blueCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      blueItemCount.textContent--; // Decrease count

      const flower = document.createElement("img");
      flower.src = "images/blue_flower.png";
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
  }
});
plantButton_purple.addEventListener("click", function() {
  const purpleItemCount = purpleItem.querySelector(".count");
  const purpleCount = parseInt(purpleItemCount.textContent);

  if (purpleCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      purpleItemCount.textContent--; // Decrease count

      const flower = document.createElement("img");
      flower.src = "images/purple_flower.png";
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
  }
});
plantButton_pink.addEventListener("click", function() {
  const pinkItemCount = pinkItem.querySelector(".count");
  const pinkCount = parseInt(pinkItemCount.textContent);

  if (pinkCount === 0) {
      // Show warning popup
      showInventoryEmptyWarning();
  } else {
      // Decrease count and proceed with plant function
      pinkItemCount.textContent--; // Decrease count

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
  }
});
//Store Functions
storeButton.addEventListener("click", function() {
  storePopup.style.display = "block";
});
closePopup.addEventListener("click", function() {
  storePopup.style.display = "none";
});
//Inventory Functions
inventoryButton.addEventListener("click", () => {
  inventoryPopup.style.display = "block";
});
closeInventory.addEventListener("click", () => {
  inventoryPopup.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === inventoryPopup) {
    inventoryPopup.style.display = "none";
  }
});
//Buying Flower Functions
redButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    document.getElementById('storeDropletCount').textContent--;
    redItem.querySelector(".count").textContent++;
}});
orangeButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    orangeItem.querySelector(".count").textContent++;
    document.getElementById('storeDropletCount').textContent--;
}});
yellowButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    yellowItem.querySelector(".count").textContent++;
    document.getElementById('storeDropletCount').textContent--;
}});
blueButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    blueItem.querySelector(".count").textContent++;
    document.getElementById('storeDropletCount').textContent--;
}});
purpleButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    purpleItem.querySelector(".count").textContent++;
    document.getElementById('storeDropletCount').textContent--;
}});
pinkButton.addEventListener("click", function() {
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);

  if (waterCount === 0) {
      // Show warning popup
      shownoMoneyWarning();
  } else {
    water.querySelector(".count").textContent --; // Update count in inventory popup
    pinkItem.querySelector(".count").textContent++;
    document.getElementById('storeDropletCount').textContent--;
}});
//Help Functions
helpButton.addEventListener("click", function() {
    helpPopup.style.display = "block";
});
closeHelpPopup.addEventListener("click", function() {
    helpPopup.style.display = "none";
});
//Setting Functions
settingsButton.addEventListener("click", function() {
    settingsPopup.style.display = "block";
});
closeSettingsPopup.addEventListener("click", function() {
    settingsPopup.style.display = "none";
});
//Name Change Functions
async function saveGardenNameToDB(newName) {
  try {
    const doc = await db.get('gardenName');
    doc.name = newName;
    await db.put(doc);
    console.log('Garden name updated successfully!');
  } catch (err) {
    if (err.status === 404) {
      await db.put({ _id: 'gardenName', name: newName });
      console.log('Garden name saved successfully!');
    } else {
      throw err;
    }
  }
}
async function initializeGardenName() {
  try {
    const doc = await db.get('gardenName');
    gardenNameDisplay.textContent = doc.name;
  } catch (err) {
    if (err.status === 404) {
      const defaultName = "My Garden";
      gardenNameDisplay.textContent = defaultName;
      await db.put({ _id: 'gardenName', name: defaultName });
      console.log('Default garden name saved successfully!');
    } else {
      throw err;
    }
  }
}
window.addEventListener('DOMContentLoaded', async () => {
  await initializeGardenName();
});
changeNameButton.addEventListener("click", async function() {
  try {
    showChangeName();
    const newName = gardenNameInput.value;
    gardenNameDisplay.textContent = newName;
    await saveGardenNameToDB(newName);
  } catch (err) {
    console.error('Error:', err);
  }
});
closeNamePopup.addEventListener("click", function() {
    nameChange.style.display = "none";
});
function showChangeName() {
  const warningPopup = document.getElementById("nameChange");
  warningPopup.style.display = "block";
}
function hideChangeName() {
  const warningPopup = document.getElementById("nameChange");
  warningPopup.style.display = "none";
}
//Reset Functions
function showResetWarning() {
  const warningPopup = document.getElementById("resetWarning");
  warningPopup.style.display = "block";
}
function hideResetWarning() {
  const warningPopup = document.getElementById("resetWarning");
  warningPopup.style.display = "none";
}
resetButton.addEventListener("click", function() {
    showResetWarning();
});
yes.addEventListener("click", function(){
  hideResetWarning();
  const wateritemCount = water.querySelector(".count");
  const waterCount = parseInt(wateritemCount.textContent);
  water.querySelector(".count").textContent= 0;
  document.getElementById("storeDropletCount").textContent = "0";
  const garden = document.querySelector(".garden");
  garden.innerHTML = ""; 
})
no.addEventListener("click", function(){
  hideResetWarning();
})




