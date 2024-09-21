import React from 'react'

const VideoList = (props) => {
    let {title,thumbnailUrl
    }=props.data
  return (
    <div onClick={()=>{props.handleVideo(props.data)}}  className='list'>
        <div >
                  <figure >
                      <img src={thumbnailUrl
          } alt="{title}" className='videolist' />
                  </figure>
                  <h1>
                      {title}
                  </h1>
        </div>
    </div>
  )
}

export default VideoList