import React, { useState } from 'react'
import JSON from './JsonList.json'
import Interface from './youtube/interface'
import Nav from './navItems/Nav'


const App = () => {
  const [state, setState]=useState(JSON)
  const [play, setPlay]=useState(state[0])
  
  const handleVideo=(max)=>{
    setPlay(max.videoUrl)
  }

  return (
    <div>
      <Nav></Nav>
    <Interface state={state} play={play} handleVideo={handleVideo}/>
    </div>
  )
}

export default App