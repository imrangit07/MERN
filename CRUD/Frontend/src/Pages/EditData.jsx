import React, { useEffect, useState } from 'react'
import axios from "axios";
import api from '../Config/Api'
import { useNavigate, useParams } from 'react-router-dom';


const EditData = () => {
    const {id} = useParams();

    const navigate = useNavigate();
  const [input, setInput] = useState({
    stuId: '',
    stuName: '',
    stuCourse: '',
    stuFees: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${api}students/editsave`, input);
    alert(res.data.message);
    setInput({
      stuId: '',
      stuName: '',
      stuCourse: '',
      stuFees: ''
    });
    navigate("/update")
  }
 const LodadData = async () => {
    const res = await axios.get(`${api}students/editdata/?id=${id}`);
    console.log(res);
    
    setInput(res.data)
  }

  useEffect(() => {
    LodadData();
  }, [])

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stuId">Student ID:</label>
          <input
            type="text"
            id="stuId"
            name="stuId"
            value={input.stuId}
            onChange={handleInput}
            placeholder="Enter student ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stuName">Student Name:</label>
          <input
            type="text"
            id="stuName"
            name="stuName"
            value={input.stuName}
            onChange={handleInput}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stuCourse">Course:</label>
          <input
            type="text"
            id="stuCourse"
            name="stuCourse"
            value={input.stuCourse}
            onChange={handleInput}
            placeholder="Enter course name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stuFees">Fees:</label>
          <input
            type="number"
            id="stuFees"
            name="stuFees"
            value={input.stuFees}
            onChange={handleInput}
            placeholder="Enter fees amount"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default EditData