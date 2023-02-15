import React from 'react'
import './Header.css'

let menuItems = [
  {text: "Hotels"},
  {text: "Dining"},
  {text: "Bars"},
  {text: "Cafes"},
]

function Header() {
  function HeaderMenuItem({text, key}) {
    return (
      <div className="header_item" key={key}>
        <span className="header_item_text">{text}</span>
      </div>
    )
  }
  return (
    <div className="header">
      <div className="header_logo">
        <span className="header_logo_text">Marlin</span>
      </div>
      <div className="header_menu">
        {menuItems.map((item, index) => HeaderMenuItem({icon: item.icon, text: item.text, key: index}))}
      </div>
      <div className='header_login_group'>
        <button className="header_signup_button">Sign Up</button>
        <button className="header_login_button">Login</button>
      </div>
    </div>
  )
}

export default Header