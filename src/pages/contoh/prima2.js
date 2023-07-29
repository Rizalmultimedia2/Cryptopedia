import React from "react";

function prima2() {
  const angka1 = 10;
  const angka2 = 50;

  console.log(`Bilangan prima diantara ${angka1} dan ${angka2} :`);

  for (let n = angka1; n < angka2; n++) {
    let prima = 0;

    for (let j = 2; j < n; j++) {
      if (n % j == 0) {
        prima = 1;
        break;
      }
    }

    if (n > 1 && prima == 0) {
      console.log(n);
    }
  }
  return <div>prima2</div>;
}

export default prima2;
