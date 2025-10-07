import React from "react";
import "./App.css";
import eddie from "./images/eddie.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Mac and Cheese",
  "Salmon with Potatoes",
  "Right Food",
  "Tofu with Mash",
  "Asian Poison",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
      <div>
        <h2>Welcome to this beautiful restaurant</h2>
      </div>
      <main>
        <img
          src="https://github.com/SylerEdd.png"
          height={200}
          alt="A photo of a handsome dude"
        />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
