import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const CheackUserAuthentication = async () => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/user/isauthuser", {}, {
        headers: {
          'auth-token': token
        }
      });
      if (res.status === 200) {
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error checking user authentication:", error);


    }
  }
  useEffect(() => {
    CheackUserAuthentication();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "10px 50px" }}>This is for JWT Token</h1>
    </div>
  )
}

export default Home