import { questionsData } from "../data/questions";

function Quiz() {
  return (
    <>
      <span className="font-main text-base md:text-lg lg:text-xl text-balance">
        Question 1/9
      </span>
      <div className="mt-4 flex flex-row gap-2">
        <p className="basis-1/2 font-text md:text-base lg:text-lg select-none">
          {questionsData[0].question}
        </p>
        <div className="basis-1/2 flex flex-col gap-2 md:gap-4">
          {questionsData[0].answerOptions.map(({ answer }, idx) => (
            <button
              key={idx}
              className=" px-4 py-2 font-text md:text-base lg:text-lg select-none bg-yellow-100 rounded-lg"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Quiz;
