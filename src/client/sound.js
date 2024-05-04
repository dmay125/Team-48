const musicContainer = document.querySelector('.music-container');
const searchInput = document.querySelector('.search input');
const songTitle = document.getElementById('song-title');

const songButtons = document.querySelectorAll('.avail-songs button');
const songButton1 = document.querySelector('.song-1');
const songButton2 = document.querySelector('.song-2');
const songButton3 = document.querySelector('.song-3');
const shopButton = document.querySelector('.song-shop');
const shopPopup = document.getElementById("shopPopup");
const closePopup = shopPopup.querySelector(".close");

const redButton = document.getElementById("buyButton_red");
const orangeButton = document.getElementById("buyButton_orange");
const yellowButton = document.getElementById("buyButton_yellow");

const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');
const audio = document.getElementById('audio');
const songCover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Array of song titles
const songs = ['good-night', 'once-in-paris', 'separation'];

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

// event listeners
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

songButton1.addEventListener('click', () => {
    loadSong(songs[0]);
    playSong();
})

songButton2.addEventListener('click', () => {
    loadSong(songs[1]);
    playSong();
})

songButton3.addEventListener('click', () => {
    loadSong(songs[2]);
    playSong();
})

//Store Functions
shopButton.addEventListener("click", function() {
  shopPopup.style.display = "block";
});
closePopup.addEventListener("click", function() {
  shopPopup.style.display = "none";
});

//Warning Functions
function shownoMoneyWarning() {
  const warningPopup = document.getElementById("noMoneyWarning");
  warningPopup.style.display = "block";
}
function hidenoMoneyWarning() {
  const warningPopup = document.getElementById("noMoneyWarning");
  warningPopup.style.display = "none";
}