import React from "react";

function max() {
  const num = [10, 29, 2, 34, 12, 3229, 919];
  let max = num[0];
  let min = num[0];
  for (const n of num) {
    if (n > max) {
      max = n;
    } else if (n < min) {
      min = n;
    }
  }
  console.log(max);
  console.log(min);
  return <div>max</div>;
}

export default max;
