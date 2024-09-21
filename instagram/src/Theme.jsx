import React, { Component } from 'react'

import Nav from './Nav';



export default class Theme extends Component {
    state={
        colorChange:false,
    }

     blue=()=>{
        //  console.log("this.state");
        //  const change=this.blue;
        
       this.setState({
            colorChange:!this.state.colorChange
            
            
        });
     }

  render() {
    console.log(this.state);
    
    return (
     <>
       
            {
                this.state.colorChange ?<div className="box1">
                    
        
        <Nav/>
                     <button onClick={this.blue} className='Theme'>Theme</button>
                     </div>
                : <div className="box2" >

       
        <Nav/>
                      <button onClick={this.blue} className='Theme'>Theme</button>
                      </div>
               
            }
            
            
            
            </>
        
    
    )
  }
}
