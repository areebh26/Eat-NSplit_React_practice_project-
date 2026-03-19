import { useState } from "react";


function Friend({friend,getID}) {
   
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
    <div className={`friend ${isOpen ? "selected" : ""}`}>
        <img src={friend.picture} alt="profile photo" />
        <div className="friend-info">
            <h3>{friend.name}</h3>
            <p>{friend.message}</p>
        </div>
        <div className="friend-actions">
            <button className="btn" onClick={handleClick}>{isOpen ? "Close" : "Select"}</button>
        </div>
    </div>

  )
}

export default Friend