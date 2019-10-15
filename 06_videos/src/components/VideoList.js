import React from 'react'

const VideoList = props => {
    console.log(props.videos)
    return (
        <div> We have {props.videos.length} videos.</div>
    )
}


export default VideoList
