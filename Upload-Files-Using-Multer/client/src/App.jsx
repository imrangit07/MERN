
import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [input, setInput] = useState({});
  const [uploadImg, setUploadImg] = useState("");
  const [allData, setAllData] = useState([])

  const handelInput = (e) => {
    const { name, value } = e.target;
    setInput((Values) => ({ ...Values, [name]: value }));
    console.log(input);
  }
  const handleImg = (e) => {
    setUploadImg(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("age", input.age);
    formData.append("email", input.email);
    formData.append("image", uploadImg);

    const res = await axios.post("http://localhost:3000/upload", formData)
    console.log(res);
    alert(res.data.mes)
  }

  const LoadData = async () => {
    const res = await axios.get("http://localhost:3000/display");
    setAllData(res.data);

  }
  useEffect(() => {
    LoadData()
  }, [allData])
  return (
    <div>
      <form >
        <input type="text" placeholder='Enter' name='name' onChange={handelInput} /><br /><br />
        <input type="text" placeholder='Enter' name='age' onChange={handelInput} /><br /><br />
        <input type="text" placeholder='Enter' name='email' onChange={handelInput} /><br /><br />
        <input type="file" placeholder='Enter' name="image" onChange={handleImg} /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>



      <div style={{marginTop:"40px"}}>

        <table border="">

          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gmail</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((key) => {
              return (

                <tr>
                  <td>
                    <img src={`http://localhost:3000/${key.image}`} alt="img" width="50px" height="50px" />
                  </td>
                  <td>{key.name}</td>
                  <td>{key.age}</td>
                  <td>{key.email}</td>
                </tr>

              )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App