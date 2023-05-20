import React, { useEffect, useState } from 'react'
import useTitleCount from './useTitleCount (CustomHook)';

const UseEffect1 = () => {
    const [count, setCount] = useState(0)

    useTitleCount(count);

  return (
    <div className='begin'>
      <h1>{count}</h1>
      <button className='btn' onClick={()=>{setCount(count+1)}} >Click Me 🙄</button>
    </div>
  )
}

export default UseEffect1
