// import React from 'react'
// import Nav from './Nav'
// import "./App.css"

// const App = () => {
//   return (
//     <div>
//       <Nav></Nav>
//     </div>
//   )
// }

// export default App
// import React, { Component } from 'react'
// import Props from './Props'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.name="manoj"


//   }
//   render() {
//     return (
//       <div>
//         <Props max={this.name}></Props>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Data from './Data'
// import Props from './Props'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.name="manoj"
//   }
//   render() {
//     return (
//       <div>
//        <Props max={ <Data></Data>}></Props>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import Props from './Props'
// import Data from './Data'
// import JSON from './Data.Json'


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//        <Props magic={<Data mad={JSON}></Data>}></Props>
//       </div>
//     )
//   }
// }
//----------------------------------------fbc-----------------------------





// import React from 'react'
// import Props from './Props'

// const App = () => {
//   return (
//     <div>
//       <Props para="gana"></Props>

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Props from './Props'

// const App = () => {
// let name="Ganapathi"

//   return (
//     <div>
//       <Props para={name}></Props>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Props from './Props'
// import Data from './Data'

// const App = () => {
//   let name="GanaG"
//   return (
//     <div>
//       <Props para={<Data max={name}></Data>}></Props>

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Props from './Props'
// import Data from './Data'
// import JSON from './Json'




// const App = () => {

//   return (
//     <div>
//       <Props para={<Data max={<JSON pp={JSON}></JSON>}></Data>}></Props>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Navitem1 from './Navitem1'
// import Navitem2 from './Navitem2'

// const App = () => {
//   let name=" goodBoyGanapathi"
//   return (
//     <div>
//       <Navitem1 item1={<Navitem2 item2={name}></Navitem2>} ></Navitem1>
//     </div>
//   )
// }

// export default App



import React, { Component } from 'react'
import Theme from './Theme'
import './App.css'
import Logo from './Logo'


export default class extends Component {
  render() {
    return (
      <div>
     
      <Theme></Theme>
      
      </div>
    )
  }
}
