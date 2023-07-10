import React,{useState} from "react";

const Name =()=>{
    let [curr,setCurr] = useState("");
    function fun(event){
        if (event.target.value==="") {
            setCurr("");
        }
        else
        setCurr("Hello "+ event.target.value+"!");
    }
    return (
        <div>
            <p>Enter your name: </p>
            <input onChange={fun} />
            <p>{curr} </p>
        </div>
    )
}
export default Name;  