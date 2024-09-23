import React from 'react'
import MainContextApi from '../ContextApiFolder/MainContextApi'

const Page1 = () => {
    let {name} = useContext(ContextApi);
  return (
    <div>
        <MainContextApi.Consumer>
            {
                ({name})=>{
                    return<>
                    <h1>{name}</h1></>
                }
            }
        </MainContextApi.Consumer>
    </div>
  )
}

export default Page1