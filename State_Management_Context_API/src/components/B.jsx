import Reac, {useContext} from 'react'
import E from "./E"
import F from "./F"
import {MyContext} from "../MyContext"

const B = () => {

  const data = useContext(MyContext);

  return (
    <div className="bg-green-600 p-8 w-full flex flex-col items-center justify-center">
    <p>{data}</p>
      B
      <E/>
      <F/>
    </div>
  )
}

export default B
