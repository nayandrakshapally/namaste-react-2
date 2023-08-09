import React from "react";
import ReactDOM from "react-dom/client" 

console.log(document.getElementById('root'));

const heading = React.createElement(
  "h1",
  { id: "firstHeading" },
  "This is first react app!"
);
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is nested element1"),
    React.createElement("h2", {}, "This is nested element2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
