import React, { useState } from "react";
import { render } from "react-dom";
import DigitalNumber from "../../src/DigitalNumber";

const theme = [
  {
    color: "#FF0000",
    unActiveColor: "#22221e",
    backgroundColor: "#000",
  },
  {
    color: "#000",
    unActiveColor: "#aaa",
    backgroundColor: "#F17D13",
  },
  {
    color: "#0078D7",
    unActiveColor: "#AAD1F0",
    backgroundColor: "#DD4F43",
  },
  {
    color: "#F17D13",
    unActiveColor: "#FCD8B9",
    backgroundColor: "#92E78C",
  },
];

const App = () => {
  const [nums, setNums] = useState("123");
  const [active, setActive] = useState(0);
  const handleInput = (e) => {
    setNums(e.target.value);
  };
  const handleTheme = (index) => {
    setActive(index);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Digital Number Demo</h1>
      <div style={{ marginBottom: 24 }}>
        <span>Enter number to transfer: </span>
        <input onChange={(e) => handleInput(e)} />
      </div>
      <div style={{ display: "flex", marginBottom: 36 }}>
        <span>choose theme: </span>
        <div style={{ display: "flex", marginLeft: 10 }}>
          {theme.map((item, index) => (
            <div
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
                backgroundColor: item.color,
                transform: `translate(0,${index === active ? "-5px" : 0})`,
                transition: "0.5s",
              }}
              key={item.color}
              onClick={() => handleTheme(index)}
            />
          ))}
        </div>
      </div>
      <DigitalNumber
        nums={nums}
        {...theme[active]}
        transition="1s"
        transform={false}
        transformDuration={600}
      />
    </div>
  );
};
render(<App />, document.getElementById("root"));
