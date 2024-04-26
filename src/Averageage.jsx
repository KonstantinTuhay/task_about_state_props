import React, { useState } from "react";

const Averageage = ({ users }) => {
  const [averageAges, setAverageAges] = useState("Кликни на кнопку выше");
  const averageAgesPeople = () => {
    setAverageAges(
      users.reduce((accum, item) => accum + item.age, 0) / users.length
    );
  };
  return (
    <>
      <p>{averageAges}</p>
      <button onClick={averageAgesPeople}>Средний возраст</button>
    </>
  );
};

export default Averageage;
