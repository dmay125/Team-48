const musicContainer = document.getElementById('music-container');
const songTitle = document.getElementById('song-title');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');
const audio = document.querySelector('audio');
const songCover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Array of song titles
const songs = ['Good Night', 'once-in-paris', 'separation'];

// Keep track of songs
let songIndex = 0;

// Initially load song info
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    songTitle.innerText = song;
    audio.src = `music/music-mp3/${song}.mp3`;
    songCover.src = `music/music-images/${song}.png`;
}