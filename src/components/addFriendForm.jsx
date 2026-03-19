import { useState } from "react"

export default function AddFriendForm({addFriendFunction}){
    let [name,setName] = useState("");
    let [image,setImage] = useState("");
    function clearForm(){
        setName("");
        setImage("");
    }
    return (
        <div className="add-friend-form">
            <div className="form-row">
                <label htmlFor="name">👫 Friend name</label>
                <input type="text" id="name" value={name} onChange={(e)=>(setName(e.target.value))} />
            </div>
            <div className="form-row">
                <label htmlFor="imageURL">🖼️ Image URL</label>
                <input type="text" id="imageURL" value={image} onChange={(e)=>(setImage(e.target.value))}/>
            </div>
            <button className="btn" onClick={()=>{
                addFriendFunction({
                    id:Date.now(),
                    name:name,
                    picture:image,
                    message:`You and ${name} are even`
                });
                
                clearForm();
            }}>Add</button>
        </div>
    )
}