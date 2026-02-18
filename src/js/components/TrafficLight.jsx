import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="traffic-wrapper">
      <div id="trafficTop"></div>

      <div id="container">
        <div
          className={color === "red" ? "light red active" : "light red"}
          style={{
            opacity: color === "red" ? 1 : 0.4,
            boxShadow: color === "red" ? "0px 0px 30px 10px red" : "none"
          }}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={color === "yellow" ? "light yellow active" : "light yellow"}
          style={{
            opacity: color === "yellow" ? 1 : 0.4,
            boxShadow: color === "yellow" ? "0px 0px 30px 10px yellow" : "none"
          }}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={color === "green" ? "light green active" : "light green"}
          style={{
            opacity: color === "green" ? 1 : 0.4,
            boxShadow: color === "green" ? "0px 0px 30px 10px green" : "none"
          }}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;