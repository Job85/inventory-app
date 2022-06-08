import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ authenticated, user, handleLogOut }) => {
    let authOptions
    if (user) {
        authOptions = (
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to='new'>Create Inventory Item</Link>
                <Link onClick={handleLogOut} to='/'>
                    Sign Out
                </Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/register'>Sign Up for App</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    )

    return (
        <header>
            <div>
                <Link to='/'>
                </Link>
                {authenticated && user ? authOptions : publicOptions}
            </div>
        </header>
    )
}

export default Header