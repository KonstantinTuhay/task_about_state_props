import React, { useState } from "react";
import Abbr from "./Abbr";
import Averageage from "./Averageage";
import OfAge from "./OfAge";
import SortPeople from "./SortPeople";
import Hide from "./Hide";

function App() {
  const arr = [
    { name: "Маша", age: 17, isMan: false },
    { name: "Саша", age: 38, isMan: true },
    { name: "Катя", age: 25, isMan: false },
    { name: "Ваня", age: 30, isMan: true },
    { name: "Максим", age: 40, isMan: true },
  ];
  const [users, setUsers] = useState(arr);
  const [ofAges, setOfAges] = useState("Кликни на кнопку выше");
  const [averageAges, setAverageAges] = useState("Кликни на кнопку выше");
  const [abWomans, setAbWomans] = useState("Кликни на кнопку выше");

  const filteredMans = () => {
    setUsers((prevUsers) => prevUsers.filter((item) => !item.isMan));
  };

  const sortPeople = () => {
    setUsers((prevUsers) => [...prevUsers.sort((a, b) => b.age - a.age)]);
  };

  const resetArr = () => {
    setUsers(arr);
  };

  return (
    <>
      <p>
        {users.map((item) => (
          <p key={crypto.randomUUID()}>
            {item.name} - {item.age} - {item.isMan ? "Муж" : "Жен"}
          </p>
        ))}
      </p>

      <Hide filteredMans={filteredMans} />

      <Abbr users={users} abWomans={abWomans} setAbWomans={setAbWomans} />

      <Averageage
        users={users}
        averageAges={averageAges}
        setAverageAges={setAverageAges}
      />

      <OfAge users={users} ofAges={ofAges} setOfAges={setOfAges} />

      <SortPeople sortPeople={sortPeople} />
      <p>Средний возраст - {averageAges}</p>
      <p>Совершеннолетние - {ofAges}</p>
      <p>Аббревиатура - {abWomans}</p>

      <button onClick={resetArr}>Сбросить</button>
    </>
  );
}

export default App;
