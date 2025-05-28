import React from 'react'
import axios from "axios";
import api from '../Config/Api'
import { useState } from 'react';
import { useEffect } from 'react';

const Display = () => {
  const [alldata, setAlldata] = useState([])


  const LodadData = async () => {
    const res = await axios.get(`${api}students/display`);
    setAlldata(res.data)
  }

  useEffect(() => {
    LodadData();
  }, [])

  const ans = alldata.map((key) => {
    return (
      <tr>
        <td style={{ padding: " 10px 20px" }}>{key.stuId}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuName}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuCourse}</td>
        <td style={{ padding: " 10px 20px" }}>{key.stuFees}</td>
      </tr>
    )
  })

  return (
    <div style={{ width: "100%", height: "80vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <table border="">
        <tbody>
          <tr >
            <th style={{ padding: " 10px 20px" }}>id</th>
            <th style={{ padding: " 10px 20px" }}>Name</th>
            <th style={{ padding: " 10px 20px" }}>Course</th>
            <th style={{ padding: " 10px 20px" }}>Fees</th>
          </tr>

          {ans}
        </tbody>
      </table>

    </div>
  )
}

export default Display