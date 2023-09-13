import React from "react";
import "../index.css";

setInterval(() => {
  let a = new Date().getFullYear();
  let difference = new Date(`${a + 1}-01-01`) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24) / 30),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  document.getElementById("time").innerHTML =
    timeLeft.months +
    " Months " +
    timeLeft.days +
    " Days " +
    timeLeft.hours +
    " Hours " +
    timeLeft.minutes +
    " Minutes " +
    timeLeft.seconds +
    " Seconds ";
}, 1000);

function Counter() {
  return (
    <div>
      <div id="time">
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
      </div>
    </div>
  );
}

export default Counter;
