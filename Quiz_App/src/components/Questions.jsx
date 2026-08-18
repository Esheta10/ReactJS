import React, { useState } from "react";
import questions from "./questions.json";

const Questions = ({setIsOver, setScore}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(questions[currentIndex]);

  const handleClick = (option) => {
       if(option === questions[currentIndex].answer){
            setScore(prev => prev+1);
       }
       if(currentIndex < questions.length-1)
            setCurrentIndex(prev => prev+1)
       else 
            setIsOver(true); 
  }

  return (
    <div className="flex flex-col justify-center gap-4 mt-5 font-bold">
      {questions[currentIndex].question}
      {questions[currentIndex].options.map((option, index) => {
        return (
          <button
            key={index}
            className="bg-blue-300 p-2 border-2 rounded-lg font-medium"
            onClick={()=>handleClick(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Questions;
