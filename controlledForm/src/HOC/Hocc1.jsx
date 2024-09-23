import React from 'react'
import Hocc from './Hocc'

const Hocc1 = (props) => {
  return (
    <div id="child1">
        {/* {props.data.name} */}
        <h1>Child1</h1>
    </div>
  )
}

export default Hocc(Hocc1)