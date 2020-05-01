import React, {Component} from 'react'

import '../../App.css'

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
                <div className="Inputs">
                    <h2>ADD FOODS</h2>
                    <label>Food Name:
                        <input className="NameInput" type="text" onChange={this.handleName} />
                    </label>
                    <label className="AddLabel">
                        How Full is the Container?
                    </label>
                        <div className="percentDiv">
                        <p>0%</p>
                        <input className="PercentInput" type="range" min="0" max="100" onChange={this.handlePercentage} />
                        <p>100%</p>
                        </div>
                </div>
                <button className="FormButton" onClick={() => 
                    this.props.addFood(this.state.foodName, this.state.foodPercentage)} >Add Food</button>
            </div>
        )
    }
}

export default AddForm
