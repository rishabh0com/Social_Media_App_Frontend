import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <div><Link to="/">Home</Link></div>
               <div> <Link to="/posts">Posts</Link></div>
               <div> <Link to="/signup">SignUp</Link></div>
        
    </div>
  )
}

export default Navbar;