import React, {useState} from "react";
function HookCounter(){
  const [count, setCount] = useState(0) 
  const increment=()=>{
    setCount(count+1)
   }
    return(
        <div>
            {count}
            <button onClick={increment}>
             hookcount {count}
            </button>
        </div>
    )
}
export default HookCounter