import React from 'react'
import "../styles/item.css"
export default function Item({name, ...props}) {
  return (
    <li className='item-style'><p>{name}</p></li>
  )
}
