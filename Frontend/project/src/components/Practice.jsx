import React, { useEffect, useState } from "react";

const Practice = () => {
    const [count,setCount]=useState(0)
  useEffect(() => {
    console.log("HEllo");
  }, []);


  return (<>
  <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>count</button>
  </>);
};

export default Practice;
