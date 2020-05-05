import React from "react";

import CardList from "./components/cardList/CardList";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="f1 mv5">Pricing Plans</h1>
      <CardList />
    </div>
  );
};

export default App;
