import { useNavigate } from "react-router-dom"
import "../css/Login.css"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backendApi from "../config/config";
import axios from "axios";

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const HandelRegisterClick = () => {
        navigate("/register")
    }

    const HandelLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${backendApi}userlogin`, { email, password })

            console.log(res.data.myData);
            
            localStorage.setItem("userData",JSON.stringify(res.data.myData))
            
            toast.success(`${res.data.msg}`, {
                position: "top-right",
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate("/dashboard");
            }, 3000);

        } catch (error) {
            toast.error(error.response.data.msg, {
                position: "top-right",
                autoClose: 3000,
            });
        }

    }
    return (
        <div className="login-body" >
            <div className="login-container">
                <h1>Welcome Back</h1>
                <p>Please enter your login details</p>

                <form className="login-form" onSubmit={HandelLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            required />
                    </div>

                    <div className="form-options">
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <span 
                        style={{color:'blue',cursor:"pointer"}}
                        onClick={()=>{localStorage.clear()}}
                        >Logout?</span>
                    </div>

                    <button type="submit" className="login-button" >Log In</button>

                    <div>
                        Don't have an account? <span className="register-link" onClick={HandelRegisterClick}>Register here</span>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Home