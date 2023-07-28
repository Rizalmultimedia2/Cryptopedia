import React, { useState } from "react";

function rata() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  // let sum = 0;
  const sum = data.reduce((total, num) => total + num, 0);
  const average = sum / data.length;
  console.log(sum);
  console.log(average);
  return (
    <>
      <div></div>
    </>
  );
}

export default rata;
