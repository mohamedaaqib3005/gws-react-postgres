import { useState } from "react";

function Counter (){
  const [count,setCount]=useState(0);

  return (
   <div>
    <p>current count:{count}</p>
    <button onClick={()=>setCount(count+1)}>
      + INcrease
    </button>
   </div>
  );
}