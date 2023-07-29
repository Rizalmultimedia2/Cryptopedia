import React from "react";

function average() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = arr.reduce((total, num) => total + num, 0);
  const avrg = sum / arr.length;
  console.log(avrg);
  const acak = Math.random() * (10 - 1) + 1;
  console.log(acak);
  return <div>average</div>;
}

export default average;
