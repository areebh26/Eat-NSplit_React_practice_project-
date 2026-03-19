import { useState } from "react"
import AddFriendForm from "./components/addFriendForm.jsx";
import FriendList from "./components/friendList.jsx";
import Splitter from "./components/splitter.jsx";



function App() {
  let [friends,setFriend]=useState([]);
  let [id,setID]=useState();
  
  function addFriend(newFriend){
    setFriend([...friends,newFriend])
  }
  function getID(num){
    setID(num)
  }
  
  function getOneFrind(){
      let obj= friends.filter((friend)=>(friend.id==id));
      return obj[0];
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList getID={getID} friends={friends}></FriendList>
        <AddFriendForm addFriendFunction={addFriend}></AddFriendForm>
      </div>
      {id && (<Splitter message={setFriend} friend={getOneFrind()}></Splitter>)}
    </div>
  )
}

export default App
