import React, {useState, useRef} from "react"
import Column from "./components/Column"
import "./styles/main.css"

function App() {
  const userName = useRef(null);
  const [users, setUsers] = useState([]);
  const addUser = event => {
    event.preventDefault();
    if(!userName.current.value){
      alert("You must enter a text here...")
      return
    }
      setUsers(users.concat(<Column key={users.length} name={userName.current.value + "'s Wishlist"} />));
      userName.current.value = ""
 
  };
  return (
    <div>
      <section className='new-user-container'>
         <h4>New Wishlist</h4> 
         <hr/>
         <h5>Number of Users: {users.length}</h5>
         <div className='add-btn-container'>
          <input placeholder="Enter New User..." className='add-item-input' ref={userName}></input>
          <button onClick={addUser} className='add-item-btn'>+</button>
         </div>
      </section>
      <hr style={{border:'1px solid #eee', width:"100%"}}/>
      <section className='columns-section'>
        <div className="App">
          {users}
        </div>
      </section>
    </div>
  );
}

export default App;
