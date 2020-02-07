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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default FoodItems