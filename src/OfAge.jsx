import React from "react";

const OfAge = ({ users, ofAges, setOfAges }) => {
  // const [ofAges, setOfAges] = useState("Кликни на кнопку выше");
  const ofAgesPeople = () => {
    setOfAges(users.every((item) => item.age > 18) ? "Да" : "Нет");
  };

  return (
    <>
      {/* <p>{ofAges}</p> */}
      <button onClick={ofAgesPeople}>Совершеннолетние</button>
    </>
  );
};

export default OfAge;
