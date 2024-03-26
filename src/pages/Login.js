import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../services/Auth";

const Login = (props) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', formValues.email);
        console.log('Password:', formValues.password);
        try {
            const payload = await signInUser(formValues);
            setFormValues({ username: '', email: '', password: '' });
            localStorage.setItem('user', payload.id);
            props.setUser(payload);
            props.toggleAuthenticated(true);
            console.log(payload.id);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized: Invalid credentials');
            } else {
                console.error('Login failed:', error.message);
            }
        }
        // const payload = await signInUser(formValues)
        // setFormValues({ username: '', email: '', password: '' })
        // localStorage.setItem('user', payload.id)
        // props.setUser(payload)
        // props.toggleAuthenticated(true)
        // console.log(payload.id)
        // navigate('/')
    }

    return (
        <div>
            <div>
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor='username'>Username</label>
                        <input
                            onChange={handleInput}
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
                            onChange={handleInput}
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
                            onChange={handleInput}
                            name='password'
                            type="password"
                            placeholder='Username'
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button
                        disabled={
                            !formValues.username ||
                            !formValues.email ||
                            !formValues.password
                        }
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login