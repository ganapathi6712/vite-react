import React from 'react'
import Page1 from './ApiComponent/Page1'
import MainContextApi from './ContextApiFolder/MainContextApi'

const App = () => {
  return (
    <div>
      <MainContextApi>
        <Page1></Page1>
      </MainContextApi>
    </div>
  )
}

export default App