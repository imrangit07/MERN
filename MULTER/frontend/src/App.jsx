import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import cloudinaryAPI from '../config/config'

const App = () => {
  const [upImg, setUpImg] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImg = (e) => {
    setUpImg(e.target.files[0])
    console.log(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", upImg);
    formData.append('upload_preset', 'NEWFORTEST');
    // formData.append('cloud_name','Add-Your-Cloud-Name');
    const res = await axios.post(cloudinaryAPI, formData);
    setImageUrl(res.data.secure_url);
    alert("File Uploaded Successfully");
  }
  return (
    <div>
      <form >
        <input type="file" name="userimg" onChange={handleImg} />
        <button onClick={handleSubmit}>Submit</button>
      </form>


       {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" width="300" />
        </div>
      )}
    </div>
  )
}

export default App