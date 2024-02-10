import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/signup">SignUp</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default navbar