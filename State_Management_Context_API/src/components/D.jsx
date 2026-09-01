import React, {useContext} from 'react'
import {MyContext} from "../MyContext"

const D = () => {

  const data = useContext(MyContext);

  return (
    <div className="bg-amber-300 p-8 w-full flex flex-col items-center justify-center">
      <p>{data}</p>
      D
    </div>
  )
}

export default D
