import React from 'react'
import video from "../../assets/fonts/video.mp4"

const Video = ({ rounded = false }) => {
  return (
      <video
        className={`w-full h-full object-cover ${rounded ? 'rounded-full' : ''}`}
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
  )
}

export default Video  
      