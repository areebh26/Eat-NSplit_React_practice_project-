import { useState } from "react"
import AddFriendForm from "./components/addFriendForm.jsx";
import FriendList from "./components/friendList.jsx";



function App() {
  let [friends,setFriend]=useState([]);
  let [id,setID]=useState("");
  function addFriend(newFriend){
    setFriend([...friends,newFriend])
  }
  function getID(num){
    setID(num)
  }
  return (
    <div>
      <FriendList getID={getID}></FriendList>
      <AddFriendForm addFriendFunction={addFriend}></AddFriendForm>
    </div>
  )
}

export default App
