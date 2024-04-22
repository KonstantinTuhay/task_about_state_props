import React from "react";

const Averageage = ({ averageAges, setAverageAge }) => {
  const averageAge = () => {
    setAverageAge(!averageAges);
  };

  return (
    <button
      onClick={(event) => {
        event.stopPropagation(); //почему не срабатывает отмена повторного нажатия
        averageAge();
      }}
    >
      Средний возраст
    </button>
  );
};

export default Averageage;
