import React from "react";
import "./Home.scss";
import Colors from "../Colors";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-wrapper__title">Наборы цвета</div>
          <Colors />
        </div>
      </div>
    </div>
  );
};

export default Home;
