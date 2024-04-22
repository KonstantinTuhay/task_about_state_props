import React, { useState } from "react";
import Abbr from "./Abbr";
import Averageage from "./Averageage";
import OfAge from "./OfAge";
import SortPeople from "./SortPeople";
import Hide from "./Hide";

function App() {
  const arr = [
    { name: "Маша", age: 25, isMan: false },
    { name: "Саша", age: 38, isMan: true },
    { name: "Катя", age: 19, isMan: false },
    { name: "Ваня", age: 30, isMan: true },
    { name: "Максим", age: 40, isMan: true },
  ];

  const listPeople = arr.map((item) => (
    <p>
      {item.name} - {item.age}
    </p>
  ));

  const onlyMans = arr
    .filter((item) => item.isMan === true)
    .map((item) => (
      <p>
        {item.name} - {item.age}
      </p>
    ));

  const abbrevWomans = arr
    .filter((item) => item.isMan === false)
    .map((item) => item.name[0])
    .join("");

  const averageAgesPeople =
    arr.reduce((accum, item) => accum + item.age, 0) / arr.length;

  const ifOfAge = arr.every((item) => item.age > 18);

  const sortAllPeople = arr
    .sort((a, b) => (a.age > b.age ? -1 : 1))
    .map((item) => (
      <p>
        {item.name} - {item.age}
      </p>
    ));
  console.log(sortAllPeople);

  const [hideMans, setHideMan] = useState(false);
  const [showFirstLetters, setShowFirstLetter] = useState(false);
  const [averageAges, setAverageAge] = useState(false);
  const [ofAges, setOfAge] = useState(false);
  const [sortPeople, setSortPeople] = useState(false);

  return (
    <>
      {(hideMans && onlyMans) || (sortPeople && sortAllPeople) || listPeople}

      <Hide hideMans={hideMans} setHideMan={setHideMan} />

      <Abbr
        showFirstLetters={showFirstLetters}
        setShowFirstLetter={setShowFirstLetter}
      />

      <Averageage averageAges={averageAges} setAverageAge={setAverageAge} />

      <OfAge ofAges={ofAges} setOfAge={setOfAge} />

      <SortPeople sortPeople={sortPeople} setSortPeople={setSortPeople} />

      <p>
        <b>
          Аббревиатура -{" "}
          {(showFirstLetters && abbrevWomans) || <>Кликни на кнопку выше</>}
        </b>
      </p>
      <p>
        <b>
          Средний возраст -{" "}
          {(averageAges && averageAgesPeople) || <>Кликни на кнопку выше</>}
        </b>
      </p>
      <p>
        <b>
          Совершеннолетние -{" "}
          {(ofAges && ifOfAge === true ? "Да" : "Нет") || <>Нет</>}
        </b>
      </p>
    </>
  );
}

export default App;
