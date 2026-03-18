import { useState } from "react";


function Friend({friend,getID}) {
   let [message,_setMessage]=useState(`You and ${friend.name} are even`);
   let [isOpen,setIsOpen]=useState(false);
   function handleClick(){
    if(!isOpen){
      getID(friend.id);
      setIsOpen(!isOpen);
    }else{
      getID("");
      setIsOpen(!isOpen);
    }
   }
  return (
    <div>
        <div>
            <img src={friend.picture} alt="profile photo" />
            <h3>{friend.name}</h3>
            <p>{message}</p>
        </div>
        <div>
            <button onClick={handleClick}>{isOpen ? "Close" : "Select"}</button>
        </div>
    </div>

  )
}

export default Friend