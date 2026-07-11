import {React, useContext} from 'react'
import { data } from '../context/UserContext';
import Card from './Card';

function App() {

  let recievedName = useContext(data);
  console.log(recievedName);

  return (
    <div>
      <h1>{recievedName}</h1>
      <Card/>
    </div>
  )
}

export default App
