import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import Nav3 from './Nav3'

const Nav = () => {
  return (
  
    <div className='nav'>
          <div className='item1 item'>
           <div id='hamberger'>
              <div></div>
              <div></div>
              <div></div>
           </div>
           <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_640.png" alt="" />
           <h1>You Tube</h1>
          </div>




      <div className='item2 item'>
          
              <div><input type="search" name="" id="" /></div>
              <div>🔍</div>
          
          <div className='mic'>🎙️</div>
      </div>




      <div className='item3 item'>
      <div>🎦</div>
      <div>🔔</div>
      <img src="https://cdn.pixabay.com/photo/2024/08/30/10/15/woman-9009013_640.png" alt="" />
      </div>
    </div>
  )
}

export default Nav