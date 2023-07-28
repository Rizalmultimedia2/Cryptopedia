import React from "react";

function max() {
  const num = [10, 29, 2, 34, 12, 3229, 919];
  let max = num[0];
  for (const n of num) {
    if (n < max) {
      max = n;
    }
  }
  console.log(max);
  return <div>max</div>;
}

export default max;
