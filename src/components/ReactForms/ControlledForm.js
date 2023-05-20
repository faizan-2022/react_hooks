import React, { useState } from "react";
import "../App.css";

const ReactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [show, setShow] = useState(false);
  const [allElement, setAllElement] = useState([]);

  // const submit = (e) =>{
  //     e.preventDefault();
  //     setShow(true);
  // }

  const submitForm = (e) => {
    e.preventDefault();
    if(email && password){
        const newElement = {id: new Date().getTime().toString(), email, password };

    setAllElement([...allElement, newElement]);

    setEmail("")
    setPassword("")
    }else{
        alert("Enter Username And Password First");
    }
    
  };

  return (
    <>
      <form action="" onSubmit={submitForm} id="loginForm">
        <h1 id="title">Login Form</h1>

        <label className="label" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          value={email}
          name="email"
          type="text"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          value={password}
          name="password"
          type="password"
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {/* <button type='submit' className='btn' onClick={submit}>Submit</button> */}
        <button type="submit" id="button">
          Submit
        </button>

        {/* { show && (
        <div className='para'>
        <h2 className='para'>{input}</h2>
        <h2 className='para'>{password}</h2>
        </div>
    )
    } */}
      </form>

      <div className="show">
        {allElement.map((curElement) => {
            const {id, email, password} = curElement
          return (
            <div className="show-inner" key={id}>
              <p className="para">{email}</p>
              <p className="para1">{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactForm;
