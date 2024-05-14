const musicContainer = document.querySelector('.music-container');
const searchInput = document.querySelector('.search input');
const songTitle = document.getElementById('song-title');

const songButtons = document.querySelectorAll('.avail-songs button');
const songButton1 = document.querySelector('.song-1');
const songButton2 = document.querySelector('.song-2');
const songButton3 = document.querySelector('.song-3');
const songButton4 = document.querySelector('.song-4');
const songButton5 = document.querySelector('.song-5');
const songButton6 = document.querySelector('.song-6');
const songButton7 = document.querySelector('.song-7');
const songButton8 = document.querySelector('.song-8');
const songButton9 = document.querySelector('.song-9');
const songButton10 = document.querySelector('.song-10');

const shopButton = document.querySelector('.song-shop');
const shopPopup = document.getElementById("shopPopup");
const closePopup = shopPopup.querySelector(".close");
const buyButtons = document.querySelectorAll('.buy-button-sound');
const dropletCount = document.getElementById('shopDropletCount');
const noDropletsCloseButton = document.getElementById('noDropletsClose');
const sampleButtons = document.querySelectorAll('.sample-button');

const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');
const audio = document.getElementById('audio');
const songCover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Array of song titles
const songs = ['good-night', 'once-in-paris', 'separation', 'taking-flight', 'acoustic-motivation', 'joy', 'jazzy-soul', 'endless', 'aesthetics', 'celestial-reverie'];

// Keep track of songs
let songIndex = 0;

// Initially load song info
loadSong(songs[songIndex]);

// Functions
function loadSong(song) {
    // Capitalize each word and remove hyphens
    songTitle.innerText = song.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    audio.src = `music/music-mp3/${song}.mp3`;
    songCover.src = `music/music-images/${song}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause();
}

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Event Listeners
searchInput.addEventListener('input', () => {
    const searched = searchInput.value.toLowerCase();

    songButtons.forEach(button => {
        const buttonText = button.innerText.toLowerCase();
        if(buttonText.includes(searched)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    })
})

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Available song buttons
songButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        loadSong(songs[index]);
        playSong();
    });
});

//Shop functions and event listeners
shopButton.addEventListener("click", function() {
  shopPopup.style.display = "block";
});
closePopup.addEventListener("click", function() {
  shopPopup.style.display = "none";
  hidenoMoneyWarning();
  audio.pause();
});

//Warning Functions and close button
function shownoMoneyWarning() {
  const warningPopup = document.getElementById("noDropletsWarning");
  warningPopup.style.display = "block";
}
function hidenoMoneyWarning() {
  const warningPopup = document.getElementById("noDropletsWarning");
  warningPopup.style.display = "none";
}

noDropletsCloseButton.addEventListener('click', function() {
    const noDropletsWarningPopup = document.getElementById('noDropletsWarning');
    noDropletsWarningPopup.style.display = 'none';
});

//Sample Buttons
sampleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const audioId = this.id; // Get the audio ID from the button ID
        const audioSrc = `music/music-mp3/${audioId}.mp3`; // Set the source of the global audio element
        const tempAudio = new Audio(audioSrc);

        // Load the audio file and calculate its duration
        tempAudio.addEventListener('loadedmetadata', () => {
            const duration = Math.min(tempAudio.duration, 10); // Limit duration to 10 seconds
            audio.src = audioSrc; // Set the source of the global audio element
            audio.currentTime = 0; // Set the current time to the beginning
            audio.play(); // Start playing

            // Pause after the calculated duration
            setTimeout(() => {
                audio.pause();
            }, duration * 1000); // Pause after the calculated duration in milliseconds
        });
    });
});

//Songs in the shop
const shopSongs = ['softer-love', 'relaxing-piano', 'playing-in-color', 'ambient-classical-guitar', 'weeknds', 'ask'];

// Function to create a new button for the song
function createSongButton(songName) {
    const button = document.createElement('button');
    const formattedSongName = songName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    button.textContent = formattedSongName;
    button.addEventListener('click', () => {
        loadSong(songName);
        playSong();
    });

    return button;
}

// Buy Buttons
buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Retrieve the song name associated with the clicked buy button
        const boughtSongName = button.getAttribute('data-song');

        // Decrease droplet count by 1
        const currentCount = parseInt(dropletCount.textContent);
        if (currentCount > 0) {
            dropletCount.textContent = currentCount - 1;
            // Remove the bought song from the shop
            shopSongs.splice(index, 1);

            // Remove the bought song, its sample button, and its buy button from the shop UI
            const songElement = button.parentElement;
            songElement.remove();

            // Add the bought song to the user's collection
            songs.push(boughtSongName);
            // Create a new button for the bought song in the user's collection
            const newSongButton = createSongButton(boughtSongName);
            document.querySelector('.avail-songs').appendChild(newSongButton);
        } else {
            // Show warning popup if there are no more droplets
            shownoMoneyWarning();
        }
    });
});
