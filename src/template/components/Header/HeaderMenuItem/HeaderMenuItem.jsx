import React from 'react';
import './HeaderMenuItem.css';

function HeaderMenuItem({text, key}) {
  return (
    <div className="header_item" key={key}>
      <span className="header_item_text">{text}</span>
    </div>
  )
}

export default HeaderMenuItem;