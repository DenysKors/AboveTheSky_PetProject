import { useState } from "react";

import { questionsData } from "../data/questions";
import { useUser } from "../hooks/useContext";

let scoreSummary = 0;

function Quiz({ setShowScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { addScore } = useUser();
  const questionAmount = questionsData.length;

  const handleBtnClick = (score) => {
    const nextQuestion = currentQuestion + 1;
    scoreSummary = scoreSummary + score;
    console.log(score);
    if (nextQuestion < questionAmount) {
      setCurrentQuestion(nextQuestion);
    } else {
      addScore(scoreSummary);
      setShowScore(true);
    }
  };

  return (
    <>
      <span className="font-main text-base md:text-lg lg:text-xl text-balance">
        {`Question ${currentQuestion + 1}/${questionAmount}`}
      </span>
      <div className="mt-4 flex flex-row gap-2">
        <p className="basis-1/2 font-text md:text-base lg:text-lg select-none">
          {questionsData[currentQuestion].question}
        </p>
        <div className="basis-1/2 flex flex-col gap-2 md:gap-4">
          {questionsData[currentQuestion].answerOptions.map(
            ({ answer, score }, idx) => (
              <button
                key={idx}
                className=" px-4 py-2 font-text md:text-base lg:text-lg select-none bg-yellow-100 rounded-lg"
                onClick={() => handleBtnClick(score)}
              >
                {answer}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;
