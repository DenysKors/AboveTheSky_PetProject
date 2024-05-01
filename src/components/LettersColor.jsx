import { Letter } from "./Letter";

export const LettersColor = ({ userString }) => {
  if (typeof userString !== "string") return alert("String require");
  const stringLength = userString.length;
  const lettersArray = userString.split("");

  setInterval(() => {
    const randomIdx = Math.floor(Math.random() * (stringLength - 1));
    const letterByIdx = userString.charAt(randomIdx);
    const danceLetterRef = document.querySelector(
      `[data-span="${randomIdx.toString()}"]`
    );
    const isClass = danceLetterRef.classList.contains("textColorAdd");
    if (
      ((letterByIdx >= "a" && letterByIdx <= "z") ||
        (letterByIdx >= "A" && letterByIdx <= "Z")) &&
      !isClass
    ) {
      danceLetterRef.classList.add("textColorAdd");
    } else if (isClass) {
      danceLetterRef.classList.remove("textColorAdd");
    } else return;
  }, 2000);

  return (
    <div className="mb-2 md:mb-4 lg:mb-6">
      {lettersArray.map((letter, idx) => (
        <Letter key={idx} letter={letter} letterId={idx} />
      ))}
    </div>
  );
};
