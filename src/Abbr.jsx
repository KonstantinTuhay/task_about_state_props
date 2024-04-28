import React from "react";

const Abbr = ({ users, abWomans, setAbWomans }) => {
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
      <button onClick={showAbbr}>Аббревиатура из девочек</button>
    </>
  );
};

export default Abbr;
