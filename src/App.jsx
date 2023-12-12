import React, { useState } from "react";
import Data from "./data";

const App = () => {
  const [para, setPara] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= 8) {
      amount = 8;
    }
    setPara(Data.slice(0, amount));
  }
  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <div className="header">
          <label htmlFor="amount">paragraph: </label>
          <input
            type="number"
            name="amount"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />

          <button type="submit">generate</button>
        </div>
        {para.map((item, index) => {
          return (
            <p key={index} className="text-content">
              {item}
            </p>
          );
        })}
      </form>
    </main>
  );
};
export default App;
