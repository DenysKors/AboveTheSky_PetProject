export const Letter = ({ letter, letterId }) => {
  return (
    <span
      data-span={letterId}
      className="font-main text-text text-2xl md:text-5xl lg:text-7xl select-none"
    >
      {letter}
    </span>
  );
};
