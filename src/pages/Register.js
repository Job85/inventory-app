import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/Auth'

const Register = () => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await registerUser({
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/login')
        console.log('registration successful')
    }

    return (
        <div className='register col'>
            <div className='card-overlay'>
                <form className='col' onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input
                            onChange={handleChange}
                            name='username'
                            type="text"
                            placeholder='Username'
                            value={formValues.username}
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Email</label>
                        <input
                            onChange={handleChange}
                            name='email'
                            type="text"
                            placeholder='example@email.com'
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Password</label>
                        <input
                            onChange={handleChange}
                            name='password'
                            type="password"
                            placeholder='Username'
                            value={formValues.password}
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Confirm Password</label>
                        <input
                            onChange={handleChange}
                            name='confirmPassword'
                            type="password"
                            placeholder='Confirm Password'
                            value={formValues.confirmPassword}
                            required
                        />
                    </div>
                    <button
                        disabled={
                            !formValues.username ||
                            !formValues.email ||
                            (!formValues.password &&
                                formValues.confirmPassword === formValues.password)
                        }
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register