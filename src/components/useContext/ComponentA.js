import React, { createContext } from 'react'
import ComponentB from './ComponentB'

/*  If we want to pass props to ComponentC we have to pass 
    props to all the components b/w A and B this problem is
    known as "props drilling". To solve this problem we use
    "context API". In Context API we have three things:

    1. Context
    2. Provider
    3. Consumer

    But because Consumer part has very complex and lengthy code
    we use "useContext hook" instead of "consumer". So, we use:

    1. Context
    2. Provider
    3. useContext Hook
*/

const BioData = createContext();

const ComponentA = () => {
  return (
    <BioData.Provider value={"Muhammad Faizan"}>
      <ComponentB />
      </BioData.Provider>
  )
}

export default ComponentA
export {BioData}