import React from 'react'
import axios from "axios"

const AxiosBasics = () => {

  const config = {
    baseURL: "https://jsonplaceholder.typicode.com/users"
  }
  const fetchUsers = async () =>{
    const response = await axios(config);
    console.log(response);
  }
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-6 text-2xl">
        <button onClick={fetchUsers} className="border-2 rounded-full px-7 py-3 cursor-pointer">Fetch Users</button>
    </div>
  )
}

export default AxiosBasics
