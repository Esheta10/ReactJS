import React from 'react'
import axios from "axios"
import AxiosBasics from './AxiosBasics'

const App = () => {

  const fetchData = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json();
    // console.log(data);

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => response.json())
    // .then((data) => console.log(data))

    const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center text-2xl mt-10">
      <button onClick={fetchData} className="border-2 rounded-full px-7 py-3 cursor-pointer">Fetch Posts</button>

      <AxiosBasics/>
      
    </div>
  )
}

export default App
