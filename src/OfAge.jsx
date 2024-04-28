import React from "react";

const OfAge = ({ users, ofAges, setOfAges }) => {
  const ofAgesPeople = () => {
    setOfAges(users.every((item) => item.age > 18) ? "Да" : "Нет");
  };

  return (
    <>
      <button onClick={ofAgesPeople}>Совершеннолетние</button>
    </>
  );
};

export default OfAge;
