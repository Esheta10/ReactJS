import React, {useState, useEffect} from 'react'
import axios from "axios"

const UserProfiles = () => {

  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
    id: null,
    isEditing: false
  })

  const baseUrl = "https://6a8fe1f1ff2484963a5d7834.mockapi.io/users"

  // GET : getting data from server, server se data lana
  const fetchPost = async () => {
    const response = await axios.get(baseUrl);
    setUsers(response.data);
  }

  // Reset form details
  const resetForm = () => {
    setFormDetails({
      name: "",
      age: "",
      id: null,
      isEditing: false
    })
  }

  // POST : naya user add karna
  const postData = async () => {
    await axios.post(baseUrl, {
      name: formDetails.name,
      age: formDetails.age
    });
    resetForm();
    fetchPost();
  }

  // PUT: for editing fields -> name & age
  const updateDetails = async () => {
    await axios.put(`${baseUrl}/${formDetails.id}`, {
      name: formDetails.name,
      age: formDetails.age
    });
    resetForm();
    fetchPost();
  }

  // Input field ki typing update karne ke liye
  const handleChange = (e) => {

    const {name, value} = e.target;

    setFormDetails((prevDetails) => ({
         ...prevDetails,
        [name]: value,
    }
    ))
  }

  // Initial load par data lana
  useEffect(()=>{
    fetchPost();
  }, [])

  // fetchPost       --> for retrieving posts
  // updateDetails   --> for updating details
  // postData        --> for posting data

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20 text-2xl">
        <button onClick={fetchPost} className="px-7 py-3 border-3 rounded-full">Fetch users</button>
        <button onClick={postData} className="px-7 py-3 border-3 rounded-full">Post users</button>


          {
            formDetails.isEditing ? (
                <button onClick={updateDetails} className="px-7 py-3 border-3 rounded-lg mt-10 cursor-pointer">Edit Data</button>
            ) : (
                <button onClick={postData} className="px-7 py-3 border-3 rounded-lg mt-10 cursor-pointer">Save Data</button>
            )
          }

         <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10">

                     {
                        users.map((user) => (
                            <div className="p-10 border-3 rounded-md" key={user.id}>
                                <h1 className="font-bold text-3xl">User Details:</h1>
                                <p>Name: {user.name}</p>
                                <p>Age: {user.age}</p>
                                <button onClick={()=>updateDetails(user)} className="px-7 py-3 border-3 rounded-lg mt-10 cursor-pointer">Edit</button>
                            </div>
                        ))
                    }
         </div>

        {/* Enter name */}
         <input type="text" placeholder="Enter your name..." className="py-3 px-7 border-3 rounded-lg" name="name" 
         value={formDetails.name} onChange={handleChange}/> {formDetails.name}
        {/* Enter age */}
         <input type="number" placeholder="Enter your age..." className="py-3 px-7 border-3 rounded-lg" name="age" 
         value={formDetails.age} onChange={handleChange}/> {formDetails.age}

    </div>
  )
}

export default UserProfiles


