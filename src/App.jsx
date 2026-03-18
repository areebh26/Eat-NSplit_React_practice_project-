import { useState } from "react"
import AddFriendForm from "./components/addFriendForm.jsx";
import FriendList from "./components/friendList.jsx";
import Splitter from "./components/splitter.jsx";



function App() {
  let [friends,setFriend]=useState([]);
  let [id,setID]=useState("");
  let [message,setMessage]=useState("");
  function addFriend(newFriend){
    setFriend([...friends,newFriend])
  }
  function getID(num){
    setID(num)
  }
  function getMessage(m){
    setMessage(m);
  }
  return (
    <div>
      <FriendList getID={getID} friends={friends}></FriendList>
      <AddFriendForm addFriendFunction={addFriend}></AddFriendForm>
      {id && (<Splitter message={getMessage} friend={()=>{
       let obj= friends.filter((friend)=>(friend.id===id));
       return obj[0];
      }}></Splitter>)}
    </div>
  )
}

export default App
