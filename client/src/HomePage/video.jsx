import React from 'react';


class Video extends React.Component {

constructor(props) {
super(props);
this.state = {
	videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
}

}

render() {

return(
	<video id="background-video" loop autoPlay muted>
	<source src={this.state.videoURL} type="video/mp4" />
	Your browser does not support the video.
	</video>
)
}
}
export default Video;
