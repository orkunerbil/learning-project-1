import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

/** 
function App() {
  const name = "Orkun";

  return (
    <div>
      My Name is : <h1>{name}</h1>
    </div>
  );
}

function App2() {
  const minValue = 5;

  return (
    <input
      type="number"
      min={5}
      max={10}
      style={{ border: "3px solid red" }}
      list={[1, 2, 3]}
    />
  );
}

function App3() {
  const minValue = 5;

  return <textarea autoFocus={true} />;
}

function App4() {
  return <meter optimum={100} />;
}

function App5() {
  return <input spellCheck />;
}

function App6() {
  return <input style={{ textDecoration: "none", padding: "30px" }}></input>;
}

function App7() {
  return <input placeholder="hi orkun" />;
}

*/
