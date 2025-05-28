import React, { useState } from 'react'
import api from '../Config/Api'
import axios from 'axios';

const Search = () => {

  const [input, setInput] = useState();

  const [searchData, setSearchData] = useState([])

  const HandelSearch = async () => {
    const res = await axios.get(`${api}students/searchData/?rno=${input}`);
    console.log(res.data);
    setSearchData(res.data)
  }

  const ans = searchData.map((key) => {
    return (
      <>
        <h1>Roll NO {key.stuId}</h1>
        <h1>Name {key.stuName}</h1>
        <h1>Course {key.stuCourse}</h1>
        <h1>Fees {key.stuFees}</h1>
      </>
    )
  })

  return (
    <div style={{ width: "100%", height: "80vh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>

      <h1>Search</h1>

      <div className="form-group">
        <label htmlFor="stuId">Student ID:</label>
        <input
          type="text"
          id="stuId"
          name="stuId"
          onChange={(e) => { setInput(e.target.value) }}
          placeholder="Enter student ID"
          required
        />
      </div>

      <button onClick={HandelSearch}>Search</button>


<div>

  {ans}
</div>
    </div>
  )
}

export default Search