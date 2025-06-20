import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Style.css';

const Display = () => {
  const [userData, setUserData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentAuthorId, setCurrentAuthorId] = useState('');
  const [bookData, setBookData] = useState({
    bookName: '',
    bookPrice: ''
  });

  const LoadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/author/display");
      setUserData(res.data.Data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    LoadData();
  }, []);

  const handleAddBook = (authorId) => {
    setCurrentAuthorId(authorId);
    setShowPopup(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/author/addBook/${currentAuthorId}`, bookData);
      setShowPopup(false);
      setBookData({ bookName: '', bookPrice: '' });
      LoadData();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  return (
    <div className="display-container">
      <h1>Author Data</h1>
      <table className="author-table">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Address</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.authorName}</td>
              <td>{item.address}</td>
              <td className="books-cell">
                {item.booksId?.map((book, bookIndex) => (
                  <div key={bookIndex} className="book-item">
                    {book.bookName}
                  </div>
                ))}
              </td>
              <td className="prices-cell">
                {item.booksId?.map((book, bookIndex) => (
                  <div key={bookIndex} className="price-item">
                    ${book.bookPrice}
                  </div>
                ))}
              </td>
              <td>
                <button
                  className="add-book-btn"
                  onClick={() => handleAddBook(item._id)}
                >
                  Add Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Book Name:</label>
                <input
                  type="text"
                  name="bookName"
                  value={bookData.bookName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Book Price:</label>
                <input
                  type="number"
                  name="bookPrice"
                  value={bookData.bookPrice}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" className="submit-btn">Add Book</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;