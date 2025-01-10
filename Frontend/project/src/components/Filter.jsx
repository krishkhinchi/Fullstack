import React, { useEffect, useState } from 'react'

const Filter = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("HEllo")
    },[])

  return (
   <>
   {count}
   <button onClick={()=>setCount(count+1)} >count</button>

   </>

  )
}

export default Filter