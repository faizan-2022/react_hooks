import React, { useState } from 'react'
import "../App.css"

const UseStateArray = () => {

    const [array, setArray] = useState([
        {
            id: 0, name: "Muhammad Faizan", age: 20
          },
          {
            id: 1, name: "Muhammad Roohan", age: 18
          },
        ]
    );

      const deleteElement = () =>{
        setArray([]);
      }

      const delone = (id) =>{
        const newArray = array.filter((curElem)=>{
          return curElem.id !== id
        })
        setArray(newArray);
      }
    
  return (
    <>
      {/* <h1>Hello My name is Muhammad Faizan Naeem</h1> */}
        <div className='container'>
        {array.map((curEle)=>{
            return <h1 className='elem' key={curEle.id}>Name: {curEle.name} && Age: {curEle.age} <button className='btn1' onClick={() => delone(curEle.id)}>remove</button> </h1>
            
        })}
        </div>

        <button className='btn' onClick={deleteElement}>Clear</button>

    </>
  )
}

export default UseStateArray
