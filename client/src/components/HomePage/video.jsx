import React from 'react';



class Video extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				videoURL: 'homevideo.mp4'
			}

		}
render() {
return(
	<video id="background-video" loop autoPlay muted>
	<source src={this.state.videoURL} type="video/mp4" />
	<source src={this.state.videoURL} type="video/ogg" />
	Your browser does not support the video.
	</video>
)
}
}
export default Video;
