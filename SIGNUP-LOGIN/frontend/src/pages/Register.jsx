import React from 'react';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import backendApi from '../config/config';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    Contact: "",
    Email: "",
    Password: ""
  })
  const navigate = useNavigate();
  const HandelonClick = () => {
    navigate("/")
  }

  const HandelInput = (e) => {
    const { name, value } = e.target;
    setUserData(Values => ({ ...Values, [name]: value }));
    // console.log(userData);
  }


  const HandelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendApi}usersignup`, userData)


      setUserData({
        userName: "",
        Contact: "",
        Email: "",
        Password: ""
      });

      toast.success(`SignUp Successfully!`, {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (error) {
      toast.error("Signup failed. Try again.");
      console.log(error);

    }
  }


  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Your Account</h1>
        <p>Join us today! Fill out the form to get started.</p>

        <form className="register-form" onSubmit={HandelSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name='userName'
              value={userData.userName}
              placeholder="Enter your full name"
              onChange={HandelInput}
              required
            />
          </div>

          <div className="form-group">
            <label >Contact</label>
            <input
              type="text"
              id="Contact"
              name='Contact'
              value={userData.Contact}

              placeholder="Enter your email"
              onChange={HandelInput}
              required
            />
          </div>
          <div className="form-group">
            <label >Email</label>
            <input
              type="email"
              id="email"
              name='Email'
              value={userData.Email}

              placeholder="Enter your email"
              onChange={HandelInput}
              required
            />
          </div>

          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              id="password"
              name='Password'
              value={userData.Password}

              placeholder="Create a password"
              onChange={HandelInput}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

          <div className="login-link">
            Already have an account? <span onClick={HandelonClick}>Log in</span>
          </div>
        </form>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Register;