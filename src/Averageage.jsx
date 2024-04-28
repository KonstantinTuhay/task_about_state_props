import React from "react";

const Averageage = ({ users, averageAges, setAverageAges }) => {
  const averageAgesPeople = () => {
    setAverageAges(
      users.reduce((accum, item) => accum + item.age, 0) / users.length
    );
  };
  return (
    <>
      <button onClick={averageAgesPeople}>Средний возраст</button>
    </>
  );
};

export default Averageage;
