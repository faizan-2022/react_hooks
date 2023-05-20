import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const diffToast = () =>{
      toast.success("Login Successful!", {
        position:"top-center",
        theme:"colored"
      });
    }

  return (
    <>
    <div className='begin'>
      <h1>Welcome to login Page</h1>
      <button className='btn btn-primary' onClick={diffToast}>Login</button>
    </div>

    <ToastContainer />
    </>
  )
}

export default Login
