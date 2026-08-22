import React , {useState} from 'react'

const App = () => {

  const [state, setState] = useState("");

  console.log(state);

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4 text-2xl">
      <input type="text" value={state} placeholder="Enter your name..." className="text-2xl border-3 rounded-md" onChange={(e)=>{
          setState(e.target.value);
      }}/>

      <button onClick={()=>setState("")} className="rounded-full border-3 py-2 px-10 !bg-black/50 cursor-pointer">Clear</button>
      <h2>{state}</h2>
    </div>
  )
}

export default App


