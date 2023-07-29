import React from "react";

function faktorial() {
  const num = 5;
  if (num < 1) {
    console.log("Harus diatas 1");
  } else if (num == 0) {
    console.log("Hasilnya 1");
  } else {
    let n = 1;
    for (let m = 1; m <= num; m++) {
      n *= m;
    }

    console.log("Hasilnya", n);
  }
  return <div>faktorial</div>;
}

export default faktorial;
