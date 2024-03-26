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

        if (formValues.password !== formValues.confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        try {
            await registerUser({
                username: formValues.username,
                email: formValues.email,
                password: formValues.password
            })
            console.log('password:', formValues.password);
            setFormValues({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            navigate('/login')
            console.log('registration successful');
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    };

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
                        <label htmlFor='email'>Email</label>
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
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            name='password'
                            type="password"
                            placeholder='Password'
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