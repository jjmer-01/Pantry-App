import React, { useState } from 'react'
import { register } from "../../ducks/userReducer"
import { connect } from 'react-redux'


function Register(props) {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const registerUser = (e) => {
        e.preventDefault()
        props.register(email, firstName, lastName, password)
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        props.history.push('/pantry')
    }

    return (
        <div className="register-comp">
            <h1>Register</h1>
            <form id='register-form'>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    onClick={handleFirstName} />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    onClick={handleLastName} />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onClick={handleEmail} />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onClick={handlePassword} />
                <button onClick={registerUser}>Submit</button>
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