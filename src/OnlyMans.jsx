import React from "react";

const OnlyMans = ([
  hideMans,
  onlyMans,
  sortPeople,
  sortAllPeople,
  listPeople,
]) => {
  return (
    <>{(hideMans && onlyMans) || (sortPeople && sortAllPeople) || listPeople}</>
  );
};

export default OnlyMans;
