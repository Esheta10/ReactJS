import React, {useState} from 'react'

const LatestMultipleInputFields = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const inputHandler = (e) => {

    const {name, value}  = e.target;
    setData({...data, [name]: value});
  }

  const clearHandler = () => {
    setData({
        name: "",
        email: "",
        phone: ""
    })
  } 
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <input type="text" name="name" value={data.name} placeholder="Enter your name..." className="p-4 border-3 rounded-lg" onChange={inputHandler}/>
      <input type="email" name="email" value={data.email} placeholder="Enter your email..." className="p-4 border-3 rounded-lg" onChange={inputHandler}/>
      <input type="number" name="phone" value={data.phone} placeholder="Enter your phone-number..." className="p-4 border-3 rounded-lg" onChange={inputHandler}/>

    <p>{data.name}</p>
    <p>{data.email}</p>
    <p>{data.phone}</p>

      <button className="!bg-blue-900 px-6 py-3 rounded-full border-3" onClick={clearHandler}>Clear</button>
    </div>
  )
}

export default LatestMultipleInputFields
