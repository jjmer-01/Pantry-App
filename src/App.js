import React, {Component} from 'react'
import Header from './components/Header'
import Pantry from './components/Pantry'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

render() {
  return (
    <div className="App">
      <Header />
      <Pantry />
    </div>
  )
}

}

export default App