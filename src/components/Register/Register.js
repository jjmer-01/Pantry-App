import React, { Component } from 'react'
import axios from 'axios'
import { register } from "../../ducks/userReducer"
import { connect } from 'react-redux'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRegister = (e) => {
        const { email, first_name, last_name, password } = this.state
        axios.post('/api/register', {
            email,
            first_name,
            last_name,
            password,
        })
        .then(res => {
            this.props.history.push('/pantry')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="register-comp">
                <h1>Register</h1>
                <form id='register-form'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        onClick={handleInput} />
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        onClick={handleInput} />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onClick={handleInput} />
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        onClick={handleInput} />
                    <button onClick={handleRegister}>Submit</button>
                    <a href='/'>I already have an account</a>
                </form>
            </div>
        )
    }

}

const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer,
    }
}

export default connect(mapStateToProps, { register })(Register)