import React, { createContext } from 'react'

export let ContextApi =createContext();

const MainContextApi = ({children}) => {
  return (
    <div>
      <ContextApi.Provider value={{name:"gana"}}>
        {children}
      </ContextApi.Provider>
    </div>
  )
}

export default ContextApi