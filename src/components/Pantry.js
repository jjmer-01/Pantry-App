import React, {Component} from 'react'
import FoodItems from './FoodItems'
import Edit from './Edit'
import AddForm from './AddForm'

import axios from 'axios'

import '../App.css'

class Pantry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodArr: [],
            isEditing: false,
            editingId: null
        }
        this.addFood = this.addFood.bind(this)
    }

    componentDidMount() {
        axios.get('/api/pantry').then(res => {
            this.setState({foodArr: res.data})
        })
    }

    addFood(name, percentage) {
        axios.post('/api/pantry',{foodName: name, foodPercentage: percentage}).then(res => {
            this.setState({foodArr: res.data})
        })
    }

    editToggle = (id) =>{
        if(id){
            this.setState({
                isEditing: true,
                editingId: id
            }) 
        } else {
            this.setState({
                isEditing: false,
                editingId: null
            })
        }
   
    }

    updateFood = (id, foodName, foodPercentage) => {
        axios.put(`/api/pantry/${id}`).then(res => {
            this.setState({foodArr: res.data})
        })
    }

    deleteFood = (id) => {
        axios.delete(`/api/pantry/${id}`).then(res => {
            this.setState({foodArr: res.data})
        })
    }


     render() { 
        const foodList = this.state.foodArr.map(element => {
            return(
                <FoodItems 
                    id={element.id} 
                    key={element.id}
                    name={element.foodName} 
                    percent={element.foodPercentage} 
                    deleteFood={this.deleteFood}
                    editToggle={this.editToggle}
                />
            )
    
         })

         const editFood =  this.state.foodArr.find(element => {
             return(element.id === this.state.editingId)
         })

     return (
            <div className="Pantry">
                <div className="FoodList">
                    {foodList}
                </div> 
                <div>
                {
                    this.state.isEditing 
                    ?
                    (
                        <Edit
                            editFood={editFood}
                            updateFood={this.updateFood}
                            editToggle={this.editToggle}
                        />
                    ) 
                    :
                    (
                        <AddForm 
                            addFood={this.addFood}
                        />
                        )
                     
                }
                </div>
            </div>
        )
   
}
}


export default Pantry