import React, {useState} from 'react'

const EarlierMultipleInputFields = () => {

  const [name, setName] = useState('');
  const[email, setEmail] = useState('');

  const nameHandler = (e) =>{
    setName(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  
  const clearHandler = () => {
    setName(""); 
    setEmail("");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
        <input type="text" value={name} placeholder="Enter your name..." className="p-4 border-3 rounded-lg" onChange={nameHandler}/>
        <input type="email" value={email} placeholder="Enter your email..." className="p-4 border-3 rounded-lg" onChange={emailHandler}/>

        <p>{name}</p>
        <p>{email}</p>

        <button onClick={clearHandler} className="px-6 py-3 border-3 rounded-full !bg-green-900 ">Clear</button>
    </div>
  )
}
export default EarlierMultipleInputFields


