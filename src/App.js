import React from 'react'
import './style.css'
import Header from './components/Header'

import Input from './components/Input'
// import { useState } from 'react'


// const Todo = () => {
//   const [inputTask, setInputTask] = useState("");


//   const handleInputChange = (event) => {
//     setInputTask(event.target.value);
//   };

// }
function Todo() {
  return (
    <>
      <Header />
      <Input />


    </>
  )


}

export default Todo
