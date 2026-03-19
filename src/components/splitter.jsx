import { useState } from "react"

function Splitter({friend,message}) {
    let [bill,setBill]=useState("");
    let [yourExpense,setYourExpense]=useState("");
    let [select,setSelect] = useState("You");
    function handleClick(){

        if(select=="You"){
            console.log("before");
            
            console.log(friend);
            
            message((prev)=>{
               return  prev.map((item)=>{
                    return item.id===friend.id ? {...item,message:`${friend.name} owes you ${Number(bill)-Number(yourExpense)}`} : item
                })
            })
            console.log("after");
            
            console.log(friend);
            
        }else if(select==friend.name){
            console.log(friend);
             message((prev)=>{
                return prev.map((item)=>{
                    return item.id===friend.id ? {...item,message:`You owe ${friend.name} ${Number(bill)-(Number(bill)-Number(yourExpense))}`} : item
                })
            })
            console.log(friend);
        }else{
      message("");
    }
  }
  

  return (
    <div className="splitter">
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <div className="form-row">
        <label htmlFor="bill">💰 Bill value</label>
             <input type="text" id="bill" value={bill} onChange={(e)=>(setBill(e.target.value))} />
      </div>
      <div className="form-row">
        <label htmlFor="expense">🧍 Your expense</label>
             <input type="text" id="expense" value={yourExpense} onChange={(e)=>(setYourExpense(e.target.value))} />
      </div>
      <div className="form-row">
            <span>👫 {friend.name}'s expense:</span><span className="expense-value">{Number(bill)-Number(yourExpense)}</span>
      </div>
      <div className="form-row">
        <label htmlFor="select">🤑 Who is paying the bill?</label>
            <select  id="select" value={select} onChange={(e)=>(setSelect(e.target.value))}>
          <option value="You">You</option>
          <option value={friend.name}>{friend.name}</option>
        </select>
      </div>
        <button className="btn" onClick={handleClick}>Split bill</button>
    </div>
  )
}

export default Splitter