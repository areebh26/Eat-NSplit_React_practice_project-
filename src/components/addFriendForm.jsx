export default function AddFriendForm(){
    return (
        <div>
            <div>
                <div>
                    <label for="name">Friend Name : </label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label for="imageURL">Image URL : </label>
                    <input type="text" id="imageURL" />
                </div>
                <button>Add</button>
            </div>
        </div>
    )
}