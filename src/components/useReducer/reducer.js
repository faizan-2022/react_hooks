import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    if(action.type === "INCREMENT"){
        return state + 1
    }else{
        return state - 1
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='begin'>
      <p>{state}</p>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
    </div>
  )
}

export default Reducer
