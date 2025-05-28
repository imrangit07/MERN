import React from 'react'
import axios from "axios";
import api from '../Config/Api'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const [alldata, setAlldata] = useState([])
  const navigate = useNavigate()

  const LodadData = async () => {
    const res = await axios.get(`${api}students/display`);
    setAlldata(res.data)
  }

  useEffect(() => {
    LodadData();
  }, [])

  const handelDelete = async (id) => {
    console.log(id);
    const deletedData = await axios.delete(`${api}students/datadelete/?myid=${id}`);
    console.log(deletedData);

    LodadData();
  }

  const handelEdit = (id) =>{
     navigate(`/editdata/${id}`)
  }
  const ans = alldata.map((key) => {
    return (
      <tr>
        <td style={{ padding: " 10px 20px" }}>{key.stuId}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuName}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuCourse}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuFees}</td>
        <td style={{ padding: " 10px 20px", color: "blue", textDecoration: "underline" }}
        onClick={()=>{handelEdit(key._id)}}
        >edit</td>
        <td style={{ padding: " 10px 20px", cursor: "pointer", color: "blue", textDecoration: "underline" }}

          onClick={() => { handelDelete(key._id) }}>delete</td>
      </tr>
    )
  })

  return (
    <div style={{ width: "100%", height: "80vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <table border="">
        <tbody>
          <tr >
            <th style={{ padding: " 10px 20px" }}>Roll No.</th>
            <th style={{ padding: " 10px 20px" }}>Name</th>
            <th style={{ padding: " 10px 20px" }}>Course</th>
            <th style={{ padding: " 10px 20px" }}>Fees</th>
            <th style={{ padding: " 10px 20px" }}
            >Edit</th>
            <th style={{ padding: " 10px 20px" }}>Delete</th>
          </tr>

          {ans}
        </tbody>
      </table>

    </div>
  )
}

export default Update