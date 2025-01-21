import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from './Contact'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div> 
      <Link to='/home'>Goto home page</Link>   
      <Link to='/new'>Goto new page</Link>
    </div>
  )
}

export default Header