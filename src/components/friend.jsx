import { useState } from "react";


function Friend({friend,isOpen,getID}) {
   let [message,_setMessage]=useState(`You and ${friend.name} are even`);
  return (
    <div>
        <div>
            <img src={friend.picture} alt="profile photo" />
            <h3>{friend.name}</h3>
            <p>{message}</p>
        </div>
        <div>
            <button onClick={getID(friend.id)}>{isOpen ? "Close" : "Select"}</button>
        </div>
    </div>

  )
}

export default Friend