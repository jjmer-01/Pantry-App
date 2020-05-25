import React, { useState } from 'react'
// import axios from 'axios'
import { register } from "../../ducks/userReducer"
import { connect } from 'react-redux'


function Register(props) {
 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="register-comp">
            <h1>Register</h1>
            <form 
                id='register-form'
                onSubmit={e => {
                    e.preventDefault()
                    props.register(firstName, lastName, email, password)
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPassword("")
                }}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    value={firstName}
                    placeholder='First Name'
                    onChange={e => setFirstName(e.target.value)} />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={e => setLastName(e.target.value)} />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    value={email}
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)} />
                <button>Register</button>
                <a href='/'>I already have an account</a>
            </form>
        </div>
    )

}

const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer,
    }
}

export default connect(mapStateToProps, { register })(Register)