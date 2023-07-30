import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [headingText, setHeadingText] = useState("");
  function handleChange() {
    setName(event.target.value);
  }
  function handleClick() {
    setHeadingText(name);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div>
      <h1>Hello {headingText}</h1>
      <form onClick={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleChange}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
