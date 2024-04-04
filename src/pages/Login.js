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
        try {
            const { user, token } = await signInUser(formValues);
            setFormValues({ username: '', email: '', password: '' });
            localStorage.setItem('token', token);
            props.setToken(token);

            localStorage.setItem('user', user.id);
            props.setUser(user);
            props.toggleAuthenticated(true);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized: Invalid credentials');
            } else {
                console.error('Login failed:', error.message);
            }
        }
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
                        <label htmlFor='eamil'>Email</label>
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
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleInput}
                            name='password'
                            type="password"
                            placeholder='Password'
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