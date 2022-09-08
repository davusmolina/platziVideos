//the class AutoPlay plays the video automatically
class AutoPlay {
	constructor() {}
}
AutoPlay.prototype.run = function (player) {
	player.play();
	player.media.muted = true;
};

export { AutoPlay };
