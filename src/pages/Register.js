import React, { useState } from "react";
import { RegisterUser } from '../services/Auth'
// import RegistrationForm from "../components/RegistrationForm";
{/* <RegistrationForm handleSubmit={handleSubmit} handleChange={handleChange} formValues={formValues} /> */ }

const Register = () => {

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            username: formValues.username,
            password: formValues.password
        })
        setFormValues({
            username: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <div>
            <div>
                <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={handleChange}
                        name='username'
                        type='text'
                        placeholder="Username"
                        value={formValues.username}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder="Password"
                        value={formValues.password}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        onChange={handleChange}
                        name='confirmPassword'
                        type='password'
                        placeholder="Password"
                        value={formValues.password}
                        required
                    />
                </div>
                <button
                    disabled={
                        !formValues.username ||
                        (!formValues.password &&
                            formValues.confirmPassword === formValues.password)
                    }
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register