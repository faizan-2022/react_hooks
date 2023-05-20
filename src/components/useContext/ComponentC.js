import React, { useContext } from 'react'
import { BioData } from './ComponentA'

const ComponentC = () => {
    const myName = useContext(BioData);

  return (
    <div>
      <h1 className='begin'>Assalam-o-Alaikum, My name is {myName}</h1>
    </div>
  )
}

export default ComponentC
