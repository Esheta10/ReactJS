import React , {useState} from 'react'
import Questions from './components/Questions'
import Timer from './components/Timer'
import Result from './components/Result'


const App = () => {

  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);


  return (
    <div>
      <h1 className="bg-amber-400 p-4 text-4xl flex items-center justify-center font-bold">Quiz App⌛</h1>

       {(!isOver  // agar quiz chal raha hai, toh sirf timer and questions show karo
          ?
            <div>
                <div className="flex items-center justify-center text-2xl p-2">
                    <Timer setIsOver={setIsOver}/>
                </div>
                <div className="flex items-center justify-center text-2xl p-2">
                  <Questions setIsOver = {setIsOver} setScore={setScore} />
                </div>
            </div>
          : // quiz over hone ke baad sirf Result dikhna chahiye
            <div className="flex items-center justify-center text-2xl p-2">
                <Result score={score}/>
            </div>
        )}
    </div>
  )
}

export default App
