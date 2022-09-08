// imports
import { MediaPlayer } from './MediaPlayer.js';
import { AutoPlay } from './plugins/AutoPlay.js';
// import {  } from './plugins/AutoPause.js';

//Get the elements
const video = document.querySelector('video');
const pausePlay = document.querySelector('#playPause');
const muteUnmute = document.querySelector('#muteUnmute');

//News instances
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

//Events
pausePlay.addEventListener('click', () => {
	if (player.media.paused) {
		player.play();
	} else {
		player.pause();
	}
});

muteUnmute.addEventListener('click', () => {
	console.log(player.media.muted);
	if (player.media.muted) {
		player.unmute();
	} else {
		player.mute();
	}
});
