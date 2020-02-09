import React, {Component} from 'react'

import '../App.css'

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodName: '',
            foodPercentage: 0
        }

    }

    handleName = (e) => {
        this.setState({
            foodName: e.target.value
        })
    }

    handlePercentage = (e) => {
        this.setState({
            foodPercentage: e.target.value
        })
    }



    render() {
        return (
            <div className="AddForm Forms">
                <h2>ADD A FOOD TO YOUR PANTRY</h2>
                <p>Food Name:</p>
                <input className="NameInput" type="text" onChange={this.handleName} />
                <p>How Full is the Container?</p>
                <input className="PercentInput" type="range" min="0" max="100" onChange={this.handlePercentage} />
                <button className="FormButton" onClick={() => this.props.addFood(this.state.foodName, this.state.foodPercentage)} >Add Food</button>
            </div>
        )
    }
}

export default AddForm
