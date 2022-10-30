import React from 'react'
import {useState} from 'react'
import "../styles/column.css"
import Item from "./Item"
const props = {
    name: "Talla",
    age: 90
};
export default function Column({name, ...props}) {
    const [items, setItems] = useState([])
    const onAddBtnClick = event => {
        setItems(items.concat(<Item key={items.length} />));
    };
  return (
    <div className='column-container'>
        <h4>{name}</h4> 
        <hr/>
        <ul style={{listStyle:"none", padding:0}}>
           {items}
        </ul>
        <div className='add-btn-container'>
             <button onClick={onAddBtnClick} className='add-item-btn'>+</button>
        </div>
    </div>
  )
}
