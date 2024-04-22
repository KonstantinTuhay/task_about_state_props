import React from "react";

const Abbr = ({ showFirstLetters, setShowFirstLetter }) => {
  const showFirstLetter = () => {
    setShowFirstLetter(!showFirstLetters);
  };

  return (
    <button
      onClick={(event) => {
        event.stopPropagation(); //почему не срабатывает отмена повторного нажатия
        showFirstLetter();
      }}
    >
      Аббревиатуру
    </button>
  );
};

export default Abbr;
