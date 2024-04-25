const musicContainer = document.querySelector('.music-container');
const searchInput = document.querySelector('.search input');
const songTitle = document.getElementById('song-title');
const availSongs = document.querySelectorAll('.avail-songs button');
const songButton1 = document.querySelector('.song-1');
const songButton2 = document.querySelector('.song-2');
const songButton3 = document.querySelector('.song-3');
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

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})