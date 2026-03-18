import Friend from "./friend.jsx";


function FriendList({friends,getID,message}) {
     
  return (
    <div className="friend-list">
         {
                friends.map((friend)=>(
                        <div key={friend.id}><Friend getID={getID} friend={friend} message={message}></Friend></div>  
                ))

        }
       
    </div>
  )
}

export default FriendList