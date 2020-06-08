import React, { useState } from 'react'
import { register, login, logout } from "../../ducks/userReducer"
import { connect } from 'react-redux'

function Auth(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registered, setRegistered] = useState(true)

    // console.log('hit props.userReducer', props.userReducer)
    // console.log('hit data', payload.data)

    return (
        <div className="auth-comp">
            <h1>Pantry App</h1>
            {!props.userReducer.user.email ? (
                registered ? (
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            props.login(email, password)
                            setEmail('')
                            setPassword('')
                        }}>
                            <h2>Login</h2>
                            <input
                                type='email'
                                value={email}
                                placeholder='Email'
                                onChange={e => setEmail(e.target.value)} />
                            <input
                                type='password'
                                value={password}
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)} />
                            <button>Login</button>
                        <p>
                            <span onClick={() => setRegistered(false)}>
                                I don't have an account.
                            </span>
                        </p>
                    </form>
                ) : (
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            props.register(firstName, lastName, email, username, password)
                            setFirstName('')
                            setLastName('')
                            setEmail('')
                            setUsername('')
                            setPassword('')
                        }}>
                            <h2>Register</h2>
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
                                placeholder='LastName'
                                onChange={e => setLastName(e.target.value)} />
                            <label htmlFor='email'>Email</label>
                            <input 
                                type='email'
                                value={email}
                                placeholder='Email'
                                onChange={e => setEmail(e.target.value)} />
                            <label htmlFor='email'>Username</label>
                            <input 
                                type='text'
                                value={username}
                                placeholder='Username'
                                onChange={e => setUsername(e.target.value)} />
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password'
                                value={password}
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)} />
                            <button>Register</button>
                        <p>
                            <span onClick={() => setRegistered(true)}>
                                I already have an account.
                            </span>
                        </p>
                    </form>)
                ) : (
                    <div>
                        <h2>{props.userReducer.user.username}</h2>
                        <button 
                            onClick={() => {props.logout()}}>Logout</button>
                    </div>
                )

            }
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer,
    }
}

export default connect(mapStateToProps, { register, login, logout })(Auth)