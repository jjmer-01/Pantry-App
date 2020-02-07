import React, {Component} from 'react'

import '../App.css'

class Edit extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="Edit">
                <input type="text" />
                <input type="range" />
                <button>Update Food</button>
            </div>
        )
    }
}

export default Edit