import React, {Component} from 'react'
import Header from './components/Header'
import Pantry from './components/Pantry'
import FoodItems from './components/FoodItems'
import AddForm from './components/AddForm'
import Edit from './components/Edit'

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
      <FoodItems />
      <AddForm />
      <Edit />
    </div>
  )
}

}

export default App