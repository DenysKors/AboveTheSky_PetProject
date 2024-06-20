import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HandThumbUpIcon, TrophyIcon } from "@heroicons/react/24/outline";

import { useUser } from "../hooks/useContext";
import { questionsData } from "../data/questions";
import Quiz from "./Quiz";

function QuizModal({ isOpen, setIsOpen }) {
  const [showScore, setShowScore] = useState(false);

  const { nickname, addNickname, userScore } = useUser();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const nicknameValue = evt.target.elements.nickname.value;

    if (nicknameValue.trim() === "") {
      return alert("Enter your nickname");
    } else if (nicknameValue.length > 10) {
      return alert("Nickname must be less than 10 characters");
    }

    addNickname(nicknameValue);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => alert("Let`s finish this test!")}
      className="relative z-20"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="p-6 mx-auto max-w-4xl max-h-[95vh] rounded bg-white overflow-y-auto">
          {nickname && !showScore && (
            <div>
              <Dialog.Title className="hidden">Quiz</Dialog.Title>
              <Quiz setShowScore={setShowScore} />
            </div>
          )}
          {!nickname && !userScore && (
            <>
              <Dialog.Title className="font-main text-base md:text-lg lg:text-xl text-balance">
                Welcome, explorer of the Universe!
              </Dialog.Title>
              <Dialog.Description className="mt-4 font-text md:text-base lg:text-lg select-none">
                Let`s take this short quiz on interesting Solar System facts.
              </Dialog.Description>
              <form onSubmit={onFormSubmit} noValidate className="my-4">
                <p>Please, enter your nickname:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="nickname"
                    autoFocus
                    maxLength={10}
                    required
                    className="border-2 border-red-500 p-1"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-main text-xs md:text-sm lg:text-base tracking-wide text-yellow-600 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
                  >
                    START
                  </button>
                </div>
              </form>
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-main text-xs md:text-sm lg:text-base tracking-wide text-yellow-600 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </>
          )}
          {nickname && showScore && (
            <>
              <Dialog.Title className="font-main text-base md:text-lg lg:text-xl text-balance">
                {`Quiz results: ${userScore}/${questionsData.length}`}
              </Dialog.Title>
              {userScore === 0 && (
                <p className="my-4 font-text md:text-base lg:text-lg ">
                  Well, you do not have any right answers. Please study the
                  facts again.
                </p>
              )}
              {userScore > 0 && userScore <= 6 && (
                <>
                  <p className="my-4 font-text md:text-base lg:text-lg ">
                    Good results! You know a lot about our solar system.
                  </p>
                  <HandThumbUpIcon className="m-auto text-yellow-500 w-9 h-9 md:w-11 md:h-11 lg:w-16 lg:h-16" />
                </>
              )}
              {userScore > 6 && userScore <= 9 && (
                <>
                  <p className="my-4 font-text md:text-base lg:text-lg ">
                    Amazing! Your knowledge will surprise even scientists!
                  </p>
                  <TrophyIcon className="m-auto text-yellow-500 w-9 h-9 md:w-11 md:h-11 lg:w-16 lg:h-16" />
                </>
              )}
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-main text-xs md:text-sm lg:text-base tracking-wide text-yellow-600 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default QuizModal;
