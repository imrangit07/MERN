import { useState } from 'react';
import axios from 'axios';
import '../Css/Style.css';

const UserSave = () => {
    const [input, setInput] = useState({
        authorName: '',
        address: '',
        bookName: '',
        bookPrice: ''
    });

    const handelInput = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/author/save', input);
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
                    name="authorName"
                    value={input.authorName}
                    onChange={handelInput}
                    placeholder="Enter Author Name"
                    className="form-input"
                />
                <input 
                    type="text"
                    name="address"
                    value={input.address}
                    onChange={handelInput}
                    placeholder="Enter Author Address"
                    className="form-input"
                />
                <input 
                    type="text"
                    name="bookName"
                    value={input.bookName}
                    onChange={handelInput}
                    placeholder="Enter Book Name"
                    className="form-input"
                />
                <input 
                    type="text"
                    name="bookPrice"
                    value={input.bookPrice}
                    onChange={handelInput}
                    placeholder="Enter Book Price"
                    className="form-input"
                />
                <button type="submit" className="submit-button">Save</button>
            </form>
        </div>
    )
}

export default UserSave;