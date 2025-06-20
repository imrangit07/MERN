import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Style.css';

const Display = () => {
  const [userData, setUserData] = useState([]);
  
  const LoadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/display");
      setUserData(res.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="display-container">
      <h1>User Data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.userId.userName}</td>
              <td>{item.userId.userEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;