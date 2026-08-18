import React, { useState } from "react";
import questions from "./questions.json";

const Questions = ({setIsOver, setScore}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(questions[currentIndex]); 
  
  /** 
   * questions[0] ---> 0th index ka question 
   * Similarly,
   * questions[i] ---> ith index ka question
  */

  const handleClick = (option) => {
       if(option === questions[currentIndex].answer){ // agar selected option --> answer se match kar raha, previous score mein 1 add karo
            setScore(prev => prev+1);
       }
       if(currentIndex < questions.length-1) // agr current question , questions array ke length ke andar hai, then move to next question by incrementing index
            setCurrentIndex(prev => prev+1)
       else 
            setIsOver(true); // reached the limit, saare questions over ho gaye
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
