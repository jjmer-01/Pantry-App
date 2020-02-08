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
            <div className="AddForm">
                <input type="text" onChange={this.handleName} />
                <input type="range" onChange={this.handlePercentage} />
                <button onClick={() => this.props.addFood(this.state.foodName, this.state.foodPercentage)} >Add Food</button>
            </div>
        )
    }
}

export default AddForm
