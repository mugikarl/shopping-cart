import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
    return (
        <div className='bg-blue-950 p-6 flex justify-between shadow-xl rounded-b-lg'>
            <div>
                <NavItem text="Shopping Cart" url="/"></NavItem>
            </div>
            <div className='flex flex-row'>
                <NavItem text="Products" url="/products/"></NavItem>
                <NavItem text="Checkout" url="/checkout/"></NavItem>
            </div>
        </div>
    )
}

export default NavBar
