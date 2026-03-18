import Friend from "./friend.jsx";


function FriendList(friends,getID) {
     
  return (
    <div>
        <ul>
             {
                friends.map((friend)=>(
                        <li><Friend getID={getID} friend={friend}></Friend></li>
                ))

             }
        </ul>
       
    </div>
  )
}

export default FriendList