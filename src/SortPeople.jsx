import React from "react";

const SortPeople = ({ sortPeople, setSortPeople }) => {
  const sortPeopl = () => {
    setSortPeople(!sortPeople);
  };

  return (
    <button onClick={sortPeopl}>
      Отсортировать всех от старшего к младшему
    </button>
  );
};

export default SortPeople;
