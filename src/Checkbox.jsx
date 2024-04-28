import React from "react";

const Checkbox = ({ checked, setChecked, filteredMans, users, setUsers }) => {
  if (checked) {
  } else {
    setUsers(users);
  }
  return (
    <label htmlFor="">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />{" "}
      Вывести мальчиков
    </label>
  );
};

export default Checkbox;
