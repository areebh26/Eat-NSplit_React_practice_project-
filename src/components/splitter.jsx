import { useState } from "react"

function Splitter({friend,message}) {
    let [bill,setBill]=useState("");
    let [yourExpense,setYourExpense]=useState("");
    let [select,setSelect] = useState("You");
    function handleClick(){
        if(select=="You"){
            message(`${friend.name} owes you ${Number(bill)-Number(yourExpense)}`);
        }else if(select==friend.name){
             message(` You owe ${friend.name}${Number(bill)-(Number(bill)-Number(yourExpense))}`);
        }else{
            message("");
        }
    }
  return (
    <div>
        <div>
            <div>
                <h2>SPLIT A BILL WITH {friend.name}</h2>
            </div>
            <div>
                 <label for="bill">Bill Value : </label>
                 <input type="text" id="bill" value={bill} onChange={(e)=>(setBill(e.target.value))} />
            </div>
            <div>
                 <label for="expense">Your expense : </label>
                 <input type="text" id="expense" value={yourExpense} onChange={(e)=>(setYourExpense(e.target.value))} />
            </div>
            <div>
                <span>{friend.name}'s Expense : </span><span>{Number(bill)-Number(yourExpense)}</span>
            </div>
            <div>
                <label for="select">Who is going to pay the bill ? </label>
                <select  id="select" value={select} onChange={(e)=>(setSelect(e.target.value))}>
                    <option value="You">You</option>
                    <option value={friend.name}>{friend.name}</option>
                </select>
            </div>
            <div>
                <button onClick={handleClick}>Split Bill</button>
            </div>
        </div>
    </div>
  )
}

export default Splitter