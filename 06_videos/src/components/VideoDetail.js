import React from "react";

const VideoDetail = ({ video }) => {
  return <div>{video ? video.snippet.title : "Loading..."}</div>;
};

export default VideoDetail;
