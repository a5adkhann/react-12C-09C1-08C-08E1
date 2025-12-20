import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-blue-900 text-white p-3'>
            <div>
                Logo
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
