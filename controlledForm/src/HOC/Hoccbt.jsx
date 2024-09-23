import React from 'react'
import Hocc from './Hocc'

const Hoccbt = (props) => {
   
  return (
    <div>
       <button  id="Click" onClick={props.data.func}>Dark ☽</button>  
    </div>
  )
}

export default Hocc(Hoccbt)