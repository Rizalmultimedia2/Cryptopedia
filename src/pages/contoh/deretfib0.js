import React from "react";

function deretfib0() {
  const num = 10;
  let a = 0,
    b = 1,
    swap;
  for (let n = 0; n < num; n++) {
    console.log(a);
    swap = a + b;
    a = b;
    b = swap;
  }
  return <div>deretfib0</div>;
}

export default deretfib0;
