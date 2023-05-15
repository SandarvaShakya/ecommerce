import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-container">
                    <div className="nav-header">
                        <p className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                            <img src="/icons/hamburger.svg" alt="menu with three dots" />
                        </p>
                        <h1 className="logo">The Online Shop</h1>
                        <p className="cart-m">
                            <img src="/icons/bag.svg" alt="shopping bag" />
                        </p>
                    </div>
                    <ul className={isOpen ? "nav-list nav-list--front-open" : "nav-list nav-list--front"}>
                        <Link to="/" className="nav-link">
                            <li className="nav-item active">Home</li>
                        </Link>
                        <Link to="/products" className="nav-link">
                            <li className="nav-item">Products</li>
                        </Link>
                        <Link to="/categories" className="nav-link">
                            <li className="nav-item">Categories</li>
                        </Link>
                    </ul>
                    <ul className={isOpen ? "nav-list nav-list--back-open" : "nav-list nav-list--back"}>
                        <Link to="/login" className="nav-link">
                            <li className="nav-item">Login</li>
                        </Link>
                        <Link to="/signup" className="nav-link">
                            <li className="nav-item">Signup</li>
                        </Link>
                        <p className="cart-d">
                            <img src="/icons/bag.svg" alt="shopping bag" />
                        </p>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar