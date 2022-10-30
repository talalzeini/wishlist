import React from 'react'
import {useState, useRef} from 'react'
import "../styles/column.css"
import Item from "./Item"
const props = {
    name: "Talla",
    age: 90
};
export default function Column({name, ...props}) {
    const itemName = useRef(null);
    const [items, setItems] = useState([])
    const addItem = event => {
        event.preventDefault();
        if(!itemName.current.value){
          alert("You must enter an item name here...")
          return
        }
        setItems(items.concat(<Item key={items.length} name={itemName.current.value} />));
        itemName.current.value = ""
    };
  return (
    <div className='column-container'>
        <div className='column'>
        <h4>{name}</h4> 
        <hr/>
        <h5>Number of Items: {items.length}</h5>
        <div className='add-btn-container'>
             <input placeholder="New Item..." className='add-item-input' ref={itemName}/>
             <button onClick={addItem} className='add-item-btn'>+</button>
        </div>
        <ul style={{listStyle:"none", padding:0,  whiteSpace: 'pre-wrap', listStylePosition: "outside"}}>
           {items}
        </ul>
        </div>
    </div>
  )
}
