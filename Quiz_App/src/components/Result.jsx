import React from 'react'

const Result = ({score}) => {
  return (
    <div>
        <h2 className="text-4xl font-bold mb-4 text-center">Result</h2>
        <h4>Your score is: {score}</h4>
    </div>
  )
}

export default Result
