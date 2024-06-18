import { Dialog } from "@headlessui/react";

import { useUser } from "../hooks/useContext";
import Quiz from "./Quiz";

function QuizModal({ isOpen, setIsOpen }) {
  const { userNickname } = useUser();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const nicknameValue = evt.target.elements.nickname.value;

    if (nicknameValue.trim() === "") {
      return alert("Enter your nickname");
    } else if (nicknameValue.length > 10) {
      return alert("Nickname must be less than 10 characters");
    }

    userNickname(nicknameValue);
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
          {userNickname ? (
            <div>
              <Dialog.Title className="hidden">Quiz</Dialog.Title>
              <Quiz />
            </div>
          ) : (
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default QuizModal;
