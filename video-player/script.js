const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', togglePlayIcon);
video.addEventListener('click', togglePlayIcon);
video.addEventListener('timeupdate', toggleVideoStatus);