import React, { useRef, useState } from 'react'

const UncontrolledForm = () => {
    const luckyName = useRef(null);
    const [show, setShow] = useState(false);

    const submitForm = (e) =>{
        e.preventDefault();
        const name = (luckyName.current.value);
        name === "" ? alert("Please fill the form") : setShow(true);
    }

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor="luckyName">Enter Your Lucky Name</label>
            <input type="text" id="luckyName" ref={luckyName}/>
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p> {show ? `Your Lucky Name is ${luckyName.current.value}`: ""} </p>
    </div>
  )
}

export default UncontrolledForm
