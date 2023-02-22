import React from 'react';
import './HeaderMenuItem.css';

function HeaderMenuItem({text, index, totalItems}) {
  console.log(index)
  return (
    <div className="header_item" key={index}>
      <span className="header_item_text">{text}</span>
    </div>
  )
}

export default HeaderMenuItem;