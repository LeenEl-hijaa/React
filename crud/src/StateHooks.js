import React, { useState, useEffect } from "react";
function StateHooks(){
    // let counter =0;
    const [counter, setCounter]=useState('a');
    const increment=()=>{
        // counter+=1;
        setCounter(counter+'a');
        console.log(counter);
    }
    // useEffect (()=>{
    //     console.log('use effect ran')
    //     });
    return(
        <div>
            {counter}
           <br></br>
            <button onClick={increment}>increment</button>
        </div>
    );
  
}

export default StateHooks;