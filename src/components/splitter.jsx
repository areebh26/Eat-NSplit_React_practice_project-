import { useState } from "react"

function Splitter(friend) {
    let [bill,setBill]=useState(0);
    let [yourExpense,setYourExpense]=useState(0);
    let [select,setSelect] = useState("You");
  return (
    <div>
        <div>
            <div>
                <h2>SPLIT A BILL WITH {friend.name}</h2>
            </div>
            <div>
                 <label for="bill">Bill Value : </label>
                 <input type="number" id="bill" value={bill} onChange={(e)=>(setBill(Number(e.target.value)))} />
            </div>
            <div>
                 <label for="expense">Your expense : </label>
                 <input type="number" id="expense" value={yourExpense} onChange={(e)=>(setYourExpense(Number(e.target.value)))} />
            </div>
            <div>
                <span>{friend.name}'s Expense : </span><span>{bill-yourExpense}</span>
            </div>
            <div>
                <label for="select">Who is going to pay the bill ? </label>
                <select  id="select" value={select} onChange={(e)=>(setSelect(e.target.value))}>
                    <option value="You"></option>
                    <option value={friend.name}>{friend.name}</option>
                </select>
            </div>
            <div>
                <button>Split Bill</button>
            </div>
        </div>
    </div>
  )
}

export default Splitter