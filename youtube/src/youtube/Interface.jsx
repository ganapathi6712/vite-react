import React from 'react'
import VideoIf from './VideoIf';
import VideoList from './VideoList';

const Interface = ({state,play,handleVideo}) => {
    // console.log(state);
    // console.log(play);
   
    
  return (
    <div>
        <section className='interface'>
           <article>
                 <aside className='aside1'>
                 
                  <VideoIf play={play} state={state}></VideoIf>
                </aside>


                <aside className='aside2'>
                  {
                    state.map(data=>{
                      return <VideoList data={data} handleVideo={handleVideo}></VideoList>
                    })
                  }
                  
                </aside>
           </article>
        </section>

    </div>
  )
}

export default Interface;