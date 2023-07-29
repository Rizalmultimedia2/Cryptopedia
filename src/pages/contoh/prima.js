import React, { useState } from "react";

function prima() {
  function isPrima(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  const num = 29;
  const prm = isPrima(num);
  if (prm) {
    console.log(`${num}Prima`);
  } else {
    console.log(`${num} Bukan Prima`);
  }

  return <div>prima</div>;
}

export default prima;
