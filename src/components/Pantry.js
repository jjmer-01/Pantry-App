import React, {Component} from 'react'
import FoodItems from './FoodItems'
import Edit from './Edit'
import AddForm from './AddForm'

import axios from 'axios'

import '../App.css'

class Pantry extends Component {
    constructor() {
        super()
        this.state = {foodArr: []}
    }

    componentDidMount() {
        axios.get('/api/pantry').then(res => {
            this.setState({foodArr: res.data})
        })
    }

    returnAddedFood() {
        axios.post('/api/pantry').then(res => {
            this.setState({})
        })
    }


     render() { 
        const foodList = this.state.foodArr.map(element => {
            return(
                <FoodItems 
                name={element.foodName}
                percent={element.foodPercentage}
                />
            )
    
         })

     return (
            <div className="Pantry">
                {foodList}
                <Edit />
                <AddForm />
            </div>
        )
   
}
}


export default Pantry