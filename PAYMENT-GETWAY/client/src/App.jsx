import axios from "axios";
import {useState} from "react";
import { FiShoppingCart, FiShield, FiTruck, FiCreditCard, FiCheckCircle } from 'react-icons/fi';
import "./App.css";
function App() {
  const [shoe,setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    price: 500,
});

const initPay = (data) => {
  const options = {
    key : "rzp_test_59lGJQaUUkcrsQ",
    amount: data.amount,
    currency: data.currency,
    name: shoe.name,
    description: "Test",
    image:shoe.img,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = "https://localhost:8080/api/payment/verify";
        const {data} = await axios.post(verifyURL,response);
      } catch(error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};


const handlePay = async () => {
  try {
    const orderURL = "http://localhost:8080/api/payment/orders";
    const {data} = await axios.post(orderURL,{amount: shoe.price});
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
};


 return (
    <>
      <h1>RazorPay Payment Gateway Integration</h1>
      <div className="App">
        <div className="shoe_container">
          <img src={shoe.img} alt="shoe_img" className="shoe_img" />
          <div className="product_info">
            <p className="shoe_name">{shoe.name}</p>
            <p className="shoe_creator">{shoe.creator}</p>
            
            <div className="price_container">
              <span className="shoe_price">{shoe.price}</span>
              <span className="discount_badge">20% OFF</span>
            </div>
            
            <button className="buyBtn" onClick={handlePay}>
              <FiShoppingCart />
              Buy Now
            </button>
            
            <div className="payment_features">
              <div className="feature">
                <FiShield />
                <span>Secure Payment</span>
              </div>
              <div className="feature">
                <FiTruck />
                <span>Free Delivery</span>
              </div>
              <div className="feature">
                <FiCreditCard />
                <span>EMI Available</span>
              </div>
              <div className="feature">
                <FiCheckCircle />
                <span>Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default App;
