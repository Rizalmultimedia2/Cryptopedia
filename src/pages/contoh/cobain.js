import React from "react";

function cobain() {
  //   const num = 5;
  //   let sum = 1;
  //   for (let n = 1; n <= num; n++) {
  //     sum *= n;
  //   }
  //   console.log(sum);
  const arr = [11, 23, 55, 23, 4, 121, 22, 90];
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let n of arr) {
    if (n > max) {
      max = n;
    } else if (n < min) {
      min = n;
    }
    sum += n;
  }
  const average = sum / arr.length;
  console.log("Nilai maksimal", max);
  console.log("Nilai minimal", min);
  console.log("Rata-ratanya adalah", average);
  return <div>cobain</div>;
}

export default cobain;
