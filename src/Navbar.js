import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const itemSelector = useSelector((state) =>state.cart)


    return (
        <React.Fragment>
            <div className='navItems'>
                <span className='logo'>REDUX STORE</span>
                <div>
                    <NavLink to="/" className="navLink">Home</NavLink>
                    <NavLink to="/cart" className="navLink">Cart</NavLink>
                    <span className='cartCount'>Cart Items: {itemSelector.length}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar