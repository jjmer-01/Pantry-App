import React, {Component} from 'react'

import '../App.css'

class FoodItems extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="FoodItemCont">
                 <h3>{this.props.name}</h3>
                 <div className="FoodItemButtons">
                    <button className="EditDeleteButt">Edit</button>
                    <button className="EditDeleteButt">Delete</button>
                 </div>
                
            </div>
        )
    }
}

export default FoodItems