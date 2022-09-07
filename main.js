const video = document.querySelector('video');
const pausePlay = document.querySelector('button');

class MediaPlayer {
	constructor(someVideo) {
		this.video = someVideo;
	}
}
MediaPlayer.prototype.playPause = function () {
	if (this.video.paused) {
		this.video.play();
		console.log('play');
	} else {
		this.video.pause();
		console.log('pause');
	}
};

const player = new MediaPlayer(video);

pausePlay.addEventListener('click', () => {
	player.playPause();
});
