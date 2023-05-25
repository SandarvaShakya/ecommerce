import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Signout from './Signout'
import { CartContext } from "../utils/CartProvider"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentPath = window.location.pathname.toLowerCase()

    const { numberOfItems } = useContext(CartContext)
    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-container">
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <img src="/icons/hamburger.svg" alt="hamburger with three dots" />
                    </div>
                    <div className="nav-content">
                        <h1 className="logo">The Online Shop</h1>
                        <ul className={isOpen ? "nav-list nav-list-open" : "nav-list"}>
                            <Link to="/" className="nav-link">
                                <li className={currentPath === '/' ? "nav-item active" : "nav-item"}>Home</li>
                            </Link>
                            <Link to="/products" className="nav-link">
                                <li className={currentPath === '/products' ? "nav-item active" : "nav-item"}>Products</li>
                            </Link>
                            <Link to="/categories" className="nav-link">
                                <li className={currentPath === '/categories' ? "nav-item active" : "nav-item"}>Categories</li>
                            </Link>
                            <Signout className="nav-item signout signout-m"/>
                        </ul>
                    </div>
                    <div className="nav-left">
                        <Signout className="nav-item signout signout-d"/>
                        <div className="cart">
                            <span className="cart-number">{numberOfItems}</span>
                            <img src="/icons/bag.svg" alt="bag" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar