import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const App = () => {
   const [name,setName]  = useState("jack");

    const sendData = async()=>{
      console.log("click");
      
        const req = await axios.post("http://localhost:3000/home",{Name:name});
        //  console.log(req.data);
         
    }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={sendData}>send</button>
    </div>
  )
}

export default App