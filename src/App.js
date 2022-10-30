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
    <section className='columns-section'>
      <div className="App">
        {users}
      </div>
      <input placeholder="Enter New User..." className='add-user-input' ref={userName}></input>
      <button onClick={addUser} className='add-user-btn'>New User</button>
    </section>
  );
}

export default App;
