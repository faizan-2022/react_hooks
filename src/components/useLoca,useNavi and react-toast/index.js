import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Index = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const goBack = () => {
		navigate(-1);
	}


  return (
    <div className='begin'>
      <h1>Hello, I am {location.pathname.replace("/", "")} Page</h1>
      <button className="btn-primary btn" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default Index
