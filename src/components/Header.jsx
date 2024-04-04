import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ authenticated, user, handleLogOut }) => {
    let authOptions
    if (user) {
        authOptions = (
            <nav className='navbar'>
                {/* <Link to="/">Home</Link> */}
                <Link to="/profile/:user_id">Home</Link>
                <Link to='/:user_id/new_item'>Create Item</Link>
                <Link to='/items'>Items List</Link>
                <Link onClick={handleLogOut} to='/'>
                    Sign Out
                </Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/register'>App Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    )

    return (
        <header>
            <div>
                {/* <Link to='/'>Home</Link> */}
                {/* <Link to='/items'>Items</Link>
                <Link to='/new'>Create Item</Link> */}
                {authenticated && user ? authOptions : publicOptions}
            </div>
        </header>
    )
}

export default Header