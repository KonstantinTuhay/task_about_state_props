import React from "react";

const Hide = ({ hideMans, setHideMan }) => {
  const hideMan = () => {
    setHideMan(!hideMans);
  };

  return <button onClick={hideMan}>Вывести мальчиков</button>;
};

export default Hide;
