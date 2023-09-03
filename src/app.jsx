import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // kind of element we're putting
    {}, // atributes -> id, className, etc
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havanese",
      }),
      React.createElement(
        Pet,
        React.createElement(Pet, {
          animal: "Cat",
          name: "Doink",
          breed: "Mixed",
        }),
      ),
      React.createElement(
        Pet,
        React.createElement(Pet, {
          animal: "Bird",
          name: "Pepper",
          breed: "Cockatiel",
        }),
      ),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
