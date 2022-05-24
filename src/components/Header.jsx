import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <nav className="navbar">
            <div>
                <Link to='/'>Home</Link>
            </div>
        </nav>
    )
}

export default Header