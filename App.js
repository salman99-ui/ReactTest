import React from 'react'
import {Provider} from 'react-redux'
import Apps from './src/Components/Main'
import Store from './src/Redux/Store'

const App = () => {
  
  return (
    <Provider store={Store}>
      <Apps />
    </Provider>
  )
}

export default App

