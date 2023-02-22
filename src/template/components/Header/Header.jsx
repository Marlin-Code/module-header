import React from 'react'
import HeaderLoginButtons from './HeaderLoginButtons/HeaderLoginButtons'
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem'
import './Header.css'

let menuItems = [
  {text: "Archetypes"},
  {text: "Modules"},
  {text: "Docs"},
  {text: "Pricing"},
]

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <span className="header_logo_text">Marlin</span>
      </div>
      <div className='header_whitespace'></div>
      <div className="header_menu">
        {menuItems.map((item, index) => HeaderMenuItem({icon: item.icon, text: item.text, index: index, totalItems: menuItems.length}))}
      </div>
      <HeaderLoginButtons />
    </div>
  )
}

export default Header
