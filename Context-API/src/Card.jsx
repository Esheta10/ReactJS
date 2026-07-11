import {React, useContext} from 'react'
import { data } from '../context/StoryContext';

function Card() {

 const receivedData = useContext(data);

 const {subject, Plotline} = receivedData;
  return (
    <div>
      <h2>{subject}</h2>
      <p>{Plotline}</p>
    </div>
  )
}

export default Card
