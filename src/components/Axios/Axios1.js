import axios from './requestMethods'
import React, { useEffect, useState } from 'react'

const Axios1 = () => {
    const [user,setUser] = useState([]);
    const [error,setError] = useState("");

    useEffect(()=>{
        axios.get("/posts")
        .then((res)=>{
            setUser(res.data)
        }).catch((error)=>{
            setError(error.message);
        })
    },[]);

  return (
    <>
      <h1 className='begin2'>Axios Practice</h1>
      {error != "" && <h2 className='begin2'>{error}</h2>}
      {
        user.slice(0,12).map((curElement)=>{
            const {id, body, title} = curElement;
            return(
            <div className='card' key={id}>
                <h1 style={{fontWeight: "bolder", color:"tomato"}}>{title.slice(0,15).toUpperCase()}</h1>
                <h1>{body.slice(0,100)}</h1>
            </div>
            )
        })
      }
    </>
  )
}

export default Axios1
