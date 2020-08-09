import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => <ReactPlayer url={url} playing controls />;

export default VideoPlayer;
