import React, {Component} from 'react'

import '../App.css'

class AddForm extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="AddForm">
                <input type="text" />
                <input type="range" />
                <button>Add Food</button>
            </div>
        )
    }
}

export default AddForm
