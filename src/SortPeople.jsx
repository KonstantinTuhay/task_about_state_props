import React from "react";

const SortPeople = ({ sortPeople }) => {
  return (
    <button onClick={sortPeople}>
      Отсортировать всех от старшего к младшему
    </button>
  );
};

export default SortPeople;
