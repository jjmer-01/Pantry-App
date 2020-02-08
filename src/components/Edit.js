import React, {Component} from 'react'

import '../App.css'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodName: this.props.editFood.foodName,
            foodPercentage: this.props.editFood.foodPercentage
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
            <div className="Edit">
                <input type="text" onChange={this.handleName} value={this.state.foodName} />
                <input type="range" onChange={this.handlePercentage} value={this.state.foodPercentage} />
                <button onClick={() => {
                    this.props.updateFood(this.props.editFood.id, this.state.foodName, this.state.foodPercentage)
                    this.props.editToggle()
                    }} >Update Food</button>
            </div>
        )
    }
}

export default Edit