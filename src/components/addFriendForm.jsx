import { useState } from "react"

export default function AddFriendForm(){
    let [name,setName] = useState("");
    let [image,setImage] = useState("");
    return (
        <div>
            <div>
                <div>
                    <label for="name">Friend Name : </label>
                    <input type="text" id="name" value={name} onChange={(e)=>(setName(e.target.value))} />
                </div>
                <div>
                    <label for="imageURL">Image URL : </label>
                    <input type="text" id="imageURL" value={image} onChange={(e)=>(setImage(e.target.value))}/>
                </div>
                <button>Add</button>
            </div>
        </div>
    )
}