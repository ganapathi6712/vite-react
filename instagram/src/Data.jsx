// import React, { Component } from 'react'

// export default class Data extends Component {
//     constructor(){

//     }
//   render() {
//     return (
//       <div>Data</div>
//     )
//   }
// }
//-----------------------------------fbc---------------

import React, { Fragment } from 'react'

const Data = (props) => {
    console.log(props);
    
  return (
    <div>
        {
            p.map((x,y)=>{
                return<Fragment key={y}>
                    x.avatar_url;
                </Fragment>
            })
        }
    </div>
  )
}

export default Data


