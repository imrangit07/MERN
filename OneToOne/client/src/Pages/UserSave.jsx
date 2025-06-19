import { useState } from 'react';
import axios from 'axios';
import '../Css/Style.css';

const UserSave = () => {
    const [input, setInput] = useState({
        userName: '',
        userEmail: '',
        firstName: '',
        lastName: ''
    });

    const handelInput = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/usersave', input);
            alert(response.data.msg);
        } catch (error) {
            console.error('Error:', error.response.data.msg || error.message);
        }
    }

    return (
        <div className="user-save-container">
            <h1 className="form-title">User Registration</h1>

            <form className="user-form" onSubmit={handelSubmit}>
                <input 
                    type="text"
                    name="userName"
                    value={input.userName}
                    onChange={handelInput}
                    placeholder="Enter User Name"
                    className="form-input"
                />
                <input 
                    type="email"
                    name="userEmail"
                    value={input.userEmail}
                    onChange={handelInput}
                    placeholder="Enter User Email"
                    className="form-input"
                />
                <input 
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={handelInput}
                    placeholder="Enter First Name"
                    className="form-input"
                />
                <input 
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handelInput}
                    placeholder="Enter Last Name"
                    className="form-input"
                />
                <button type="submit" className="submit-button">Save</button>
            </form>
        </div>
    )
}

export default UserSave;