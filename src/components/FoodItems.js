import React, {Component} from 'react'

import '../App.css'

class FoodItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
        return (
            <div className="FoodItemCont">
                <div className="FoodInfo">
                    <h3>{this.props.name}</h3>
                    <div className="ItemPercent">{this.props.percent}%</div>
                </div>
                <div className="FoodItemButtons">
                    <button 
                        className="EditDeleteButt"
                        onClick={() => this.props.editToggle(this.props.id)} >
                            EDIT
                    </button>
                    <button 
                        className="EditDeleteButt" 
                        onClick={() => this.props.deleteFood(this.props.id)} >
                            DELETE
                    </button>
                 </div>
                
            </div>
        )
    }
}

export default FoodItems