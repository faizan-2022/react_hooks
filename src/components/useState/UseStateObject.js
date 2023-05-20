import React, { useState } from 'react'
import "../App.css"

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        myName: "Muhammad Faizan", myAge: 20, myDegree: "BSCS"
    })

    const changeObject = () =>{
        setMyObject({...myObject, myName:"Muhammad Roohan"})
    }

  return (
    <div className='begin'>
      <h1>Name: {myObject.myName} & Age: {myObject.myAge} & Degree: {myObject.myDegree}</h1>
      <button className='btn' onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject
