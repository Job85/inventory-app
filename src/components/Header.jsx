import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <nav className="navbar">
            <div>
                <Link to='/'>Home</Link>
                <Link to='items'>Items</Link>
                <Link to='/new'>Add Item</Link>
            </div>
        </nav>
    )
}

export default Header