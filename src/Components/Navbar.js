import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const routeToFav = () =>{
   navigate('/favourite')
  }

  const routeToHome = () =>{
    navigate('/')
  }
  return (
    <div className='navbar'>
      <h1 onClick={routeToHome}>Book App</h1>
      <h1  onClick={routeToFav}>Your Favorites</h1>
    </div>
  )
}

export default Navbar
