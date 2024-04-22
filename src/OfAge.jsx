import React from "react";

const OfAge = ({ ofAges, setOfAge }) => {
  const ofAge = () => {
    setOfAge(!ofAges);
  };

  return <button onClick={ofAge}>Совершеннолетние</button>;
};

export default OfAge;
