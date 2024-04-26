import React from "react";

const Averageage = ({ users, averageAges, setAverageAges }) => {
  // const [averageAges, setAverageAges] = useState("Кликни на кнопку выше");
  const averageAgesPeople = () => {
    setAverageAges(
      users.reduce((accum, item) => accum + item.age, 0) / users.length
    );
  };
  return (
    <>
      {/* <p>{averageAges}</p> */}
      <button onClick={averageAgesPeople}>Средний возраст</button>
    </>
  );
};

export default Averageage;
