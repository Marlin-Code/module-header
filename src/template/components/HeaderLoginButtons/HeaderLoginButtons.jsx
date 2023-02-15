import React, { useState } from 'react'
import './HeaderLoginButtons.css'


function HeaderLoginButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function handleSignup() {
    console.log("handleSignup")
    return
  }
  function handleLogin() {
    setIsLoggedIn(true)
  }
  function handleLogout() {
    setIsLoggedIn(false)
  }
  if (isLoggedIn) {
    return (
      <div className='header_login_group'>
        <button className="header_login_button" onClick={handleLogout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className='header_login_group'>
        <button className="header_signup_button" onClick={handleSignup}>Sign Up</button>
        <button className="header_login_button" onClick={handleLogin}>Login</button>
      </div>
    )
  }

}
export default HeaderLoginButtons