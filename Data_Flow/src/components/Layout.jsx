import React, {useState} from 'react'
import Hero from './Hero'
import About from './About'

const Layout = (props) => {

  console.log(props);

  const [count, setCount] = useState(10)

  return (
    <div>
        <div className="bg-blue-400 p-[20px]">Layout
                <Hero data={props.data} count={count}/>
                <About data={props.data} count={count}/>
        </div>
    </div>
  )
}

export default Layout
