import Friend from "./friend.jsx";


function FriendList(friends,getID) {
     
  return (
    <div>
         {
                friends.map((friend)=>(
                        <div key={friend.id}><Friend getID={getID} friend={friend}></Friend></div>  
                ))

        }
       
    </div>
  )
}

export default FriendList