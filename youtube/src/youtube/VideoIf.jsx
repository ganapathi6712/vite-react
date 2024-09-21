import React from 'react'

const VideoIf = ({play}) => {
 
  return (
    <div >

      <video className='videoif' src={play} controls autoPlay></video>
       
    </div>
  )
}

export default VideoIf


