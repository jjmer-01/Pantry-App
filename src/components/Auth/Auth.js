import React, { useState } from 'react'
import { register, login, logout } from "../../ducks/userReducer"
import { connect } from 'react-redux'

function Auth(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="auth-comp">
            <h1>Pantry App</h1>
            {!props.userReducer.user.email}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer,
    }
}

export default connect(mapStateToProps, { register, login, logout })(Auth)