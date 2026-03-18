import { useState } from "react"
import AddFriendForm from "./components/addFriendForm.jsx";



function App() {
  let [friend,setFriend]=useState([]);
  function addFriend(newFriend){
    setFriend([...friend,newFriend])
  }
  return (
    <div>
      <AddFriendForm addFriendFunction={addFriend}></AddFriendForm>
    </div>
  )
}

export default App
