import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <p className='bg-red-600'>Home</p>

      <br />

      <Link to="/about">Go to About Component</Link>

    </div>
  )
}

export default Home
