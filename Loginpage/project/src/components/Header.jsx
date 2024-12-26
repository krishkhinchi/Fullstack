import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from './Contact'

const Header = ({val }) => {
  return (
    <div>
        {val}
          {

        val>10 ? <Footer/> : <Contact/>    
          }  
    </div>
  )
}

export default Header