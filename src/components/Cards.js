import React from "react";
import CardUI from "./CardUI";
import mike from "../assets/michael.jpg";
import dwight from "../assets/dwight.jpg";
import jim from "../assets/jim.png";

function Cards() {
  return (
    <div className="home-container d-flex justify-content-around">
      <div className=" d-flex col-md-4 justify-content-center">
        <CardUI
          title="Michael Scott"
          img={mike}
          text="“You miss 100% of the shots you don’t take – Wayne Gretzky – Michael Scott”"
        />
      </div>

      <div className="col-md-4 d-flex justify-content-center">
        <CardUI
          title="Jim Halpert"
          img={jim}
          text="“So this is my life. Until I win the lottery. Or Pam finally writes that series of young adult books.”"
        />
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <CardUI
          title="Dwight Schrute"
          img={dwight}
          text='"I am faster than 80% of all snakes"
          '
        />
      </div>
    </div>
  );
}

export default Cards;
