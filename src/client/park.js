import {updateCurrency} from './script.js'

// Initialize PouchDB
const db = new PouchDB('journal');

// Function to save an entry
function saveEntry() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert('Please enter both title and content.');
        return;
    }

    const entry = {
        _id: new Date().toISOString(),
        title: title,
        content: content
    };

    db.put(entry)
        .then(response => {
            console.log('Entry saved successfully', response);
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
            fetchEntries();
        })
        .catch(error => console.error('Error saving entry', error));
}

// Function to fetch all entries
function fetchEntries() {
    db.allDocs({ include_docs: true })
        .then(result => {
            const entries = result.rows.map(row => row.doc);
            displayEntries(entries);
        })
        .catch(error => console.error('Error fetching entries', error));
}

// Function to display entries in the UI
function displayEntries(entries) {
  const entriesContainer = document.getElementById('entries');
  entriesContainer.innerHTML = '';

  entries.forEach(entry => {
      const entryElement = document.createElement('div');
      entryElement.innerHTML = `
          <h2>${entry.title}</h2>
          <p>${entry.content}</p>
          <button onclick="deleteEntry('${entry._id}')">Delete</button>
      `;
      entriesContainer.appendChild(entryElement);
  });
}

function deleteEntry(id) {
  if (confirm('Are you sure you want to delete this entry?')) {
      db.get(id)
          .then(doc => {
              return db.remove(doc);
          })
          .then(() => {
              console.log('Entry deleted successfully');
              fetchEntries(); // Refresh entries after deletion
          })
          .catch(error => console.error('Error deleting entry', error));
  }
}

// Initial fetch of entries when the page loads
fetchEntries();

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

const jounralEntry = document.getElementById('word');

butterflyBtn.addEventListener("click", function() {
    butterflyPopup.style.display = "block";
    slidePopup.style.display = "none";
    riverPopup.style.display = "none";
    smellFlowersPopup.style.display = "none";
  });
closeButterflyPopup.addEventListener("click", function() {
    butterflyPopup.style.display = "none";
    updateCurrency(1);
});

slideBtn.addEventListener("click", function() {
  butterflyPopup.style.display = "none";
  slidePopup.style.display = "block";
  riverPopup.style.display = "none";
  smellFlowersPopup.style.display = "none";
  });
  closeSlidePopup.addEventListener("click", function() {
    slidePopup.style.display = "none";
    updateCurrency(1);
});

waterBtn.addEventListener("click", function() {
    riverPopup.style.display = "block";
    butterflyPopup.style.display = "none";
    slidePopup.style.display = "none";
    smellFlowersPopup.style.display = "none";
  });
  closeRiverPopup.addEventListener("click", function() {
    riverPopup.style.display = "none";
    updateCurrency(1);
});

flowerBtn.addEventListener("click", function() {
    smellFlowersPopup.style.display = "block";
    butterflyPopup.style.display = "none";
    slidePopup.style.display = "none";
    riverPopup.style.display = "none";
  });
  closeSmellFlowersPopup.addEventListener("click", function() {
    smellFlowersPopup.style.display = "none";
    updateCurrency(1);
});

  