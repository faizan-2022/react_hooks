import React, { useEffect, useState } from 'react'

// CleanUp function

const UseEffect2 = () => {
    const [width,setWidth] = useState(window.screen.width);

    const actualWidth = () =>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", actualWidth);

        return(()=>{
            window.removeEventListener("resize", actualWidth);   // A Clean-Up Function
        })
    });

  return (
    <div className='begin'>
        <h1>The Actual Size of the window is:</h1>
        <h1>{width}</h1>
    </div>
  )
}

export default UseEffect2
