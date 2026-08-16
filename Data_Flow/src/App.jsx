import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

const App = () => {

  const [data, setData] = useState("Esheta");

  function kabutar(data){
    setData(data);
  }

  console.log(data);

  return (
    <div>
      <Header data={data} func={kabutar} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  )
}

export default App
