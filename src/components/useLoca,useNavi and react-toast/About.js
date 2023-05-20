import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleShift = (e) =>{
        e.preventDefault();
        navigate("/index")
    }

  return (
    <div className='begin'>
      <h1>Hello, I am {location.pathname.replace("/", "")} Page</h1>
      {
        location.pathname === '/about/faizan' ? 
        <p>Asalam-o-Alaikum, My name is Muhammad Faizan</p> :
        <p>Login to see your files</p>
      }

        <button className="btn-primary btn" onClick={handleShift}>Home</button>

    </div>
  )
}

export default About