import React, { useState } from "react";

const Abbr = ({ users, abWomans, setAbWomans }) => {
  // const [abWomans, setAbWomans] = useState("Кликни на кнопку выше");
  const showAbbr = () => {
    setAbWomans(
      users
        .filter((item) => !item.isMan)
        .map((item) => item.name[0])
        .join("")
    );
  };
  return (
    <>
      {/* <p>{abWomans}</p> */}
      <button onClick={showAbbr}>Аббревиатуру</button>
    </>
  );
};

export default Abbr;
