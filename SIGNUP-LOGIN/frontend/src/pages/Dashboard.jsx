import React from 'react'
import "../css/Dashboard.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ backgroundColor: "black", width: "100%", height: "40px", color: "#fff", display:"flex",alignItems:"center",justifyContent:"space-around", padding: "4px" }}>

        <h2>
          Welcome Back :
          <span style={{ color: "green", letterSpacing: "1.5px" }}> {userData.userName} </span>
        </h2>

        <span
        style={{cursor:"pointer",backgroundColor:"blue",padding:"4px 8px",borderRadius:"5px"}}
        onClick={()=>{
          localStorage.clear()
          navigate("/home");
        }}  
        >Logout</span>
      </div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard