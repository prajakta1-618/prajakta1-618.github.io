const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const trackSelector = document.getElementById('track-selector');
const lid = document.querySelector('.lid'); 

// Load the first track by default
audioPlayer.src = trackSelector.value;

// Change track when user selects a new one
trackSelector.addEventListener('change', () => {
    audioPlayer.src = trackSelector.value;
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
    lid.style.transform = 'rotateX(0deg)';
});

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
        lid.style.transform = 'rotateX(-120deg)';
        lid.classList.add('open');  // Show message
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
        lid.style.transform = 'rotateX(0deg)';
        lid.classList.remove('open');  // Hide message
    }
});

// Reset button text when song ends
audioPlayer.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
    lid.style.transform = 'rotateX(0deg)';
    lid.classList.remove('open');  // Hide message
});