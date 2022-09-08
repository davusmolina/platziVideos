//Definition of the class MediaPlayer
//MediaPlayer is a class that receives an object
//with the properties el and plugins, and manages all the caracteristics of the video
class MediaPlayer {
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this._initPlugins();
	}
}

//Methods

//Method to play the video
MediaPlayer.prototype.play = function () {
	this.media.play();
};

//Method to pause the video
MediaPlayer.prototype.pause = function () {
	this.media.pause();
};

//Method to mute the video
MediaPlayer.prototype.mute = function () {
	this.media.muted = true;
};

//Method to unmute the video
MediaPlayer.prototype.unmute = function () {
	this.media.muted = false;
};

//Init plugins
MediaPlayer.prototype._initPlugins = function () {
	this.plugins.forEach((plugin) => {
		plugin.run(this);
	});
};

export { MediaPlayer };
