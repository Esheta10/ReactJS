import React, {useContext} from 'react'
import A from "./components/A.jsx"
import B from "./components/B.jsx"
import {MyContext} from "./MyContext.jsx"

const App = () => {

  const data = useContext(MyContext);

  return (
    <div className="bg-red-200 p-10 text-black text-2xl w-fit min-h-screen mt-10 flex flex-col items-center justify-center gap-2 m-auto font-medium">
      <p>{data}</p>
      App
      <A/>
      <B/>
    </div>
  )
}

export default App
