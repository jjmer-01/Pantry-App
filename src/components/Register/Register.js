import React, { useState, useEffect } from 'react'
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

    return (
        <div className="register-comp">
            <h1>Register</h1>
            <label 
                htmlFor='firstName'>First Name</label>
            <input
                type='text'
                name='firstName' />
            <input
                type='text' />
        </div>
    )
}

export default Register