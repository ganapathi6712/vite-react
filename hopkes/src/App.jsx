// import React, { useRef, useState } from 'react'

// const App = () => {
 



//   let forms=useRef();
//   let divs=useRef();
//  let  handleform=()=>{
//     let  names= forms.current.value;
//     console.log(names);
    
//    divs.current.innerHTML=names
    
//   }


//   return (
//     <div>
//       <label htmlFor="name">USER NAME:</label>
//       <input type="text" name="name" id="name" ref={forms} />
//       <button onClick={handleform}>submit</button>
     
  
//     <h1 ref={divs}> </h1>
   
//     </div>
//   )
// }
//  export default App;




// import React, { Component, createRef, useState } from 'react'

//  class App extends Component {
//    constructor(){
//    super()
//    let data=createRef();
//    }

//   handleform=()=>{
//  let name=data.current.value;
//  console.log(name);
 
//   }

//   render() {
//     return (
//       <div>
//         <div>
//        <label htmlFor="name">USER NAME:</label>
//        <input type="text" name="name" id="name"  />
//        <button onClick={handleform()}>submit</button>

//      </div>
//       </div>
//     )
//   }
// }
// export default App;




import React, { useState } from 'react'

const App = () => {
  let [state,setState]=useState("DARSHAN")
  let [value, setvalue]=useState(0)

  let change=()=>{
      setState("ganapathi")
  }

  let add=()=>{
    setvalue=(value++)
    console.log(setvalue);
    
}
let sub=()=>{
  setvalue=value-1
  console.log(setvalue);
  
}
  return (
    <div>
      {state}
      
      <button onClick={change}>click</button>
      <div>
        <h1>{value}</h1>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </div>
  )
}

export default App