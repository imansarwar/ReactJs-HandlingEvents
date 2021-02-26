import React, { useState } from "react";

const App = () => {
  const purple = "#c6a9a3";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Let's Begin");

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Hello ✨✨ Please, Double Click  ");
  };

  const bgBack = () => {
    setBg(purple);
    setName("Use Of React Hooks ⭐");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};
export default App;
