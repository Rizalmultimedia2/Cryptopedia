import React from "react";

function penilaian() {
  function linearSearch(num, arr) {
    for (let n of arr) {
      if (n == num) {
        return true;
        break;
      }
    }
    return false;
  }

  function binarySearch(num, arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let numMid = arr[mid];

      if (numMid == num) {
        return num;
      } else if (numMid < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  const num = 2;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = linearSearch(num, arr);
  if (result) {
    console.log(`${num} ada dalam arrray`);
  } else {
    console.log(`${num} tidak ada dalam arrray`);
  }
  const resultBinary = binarySearch(num, arr);
  if (resultBinary !== -1) {
    console.log(`${num} ada dalam arrray pada index ${resultBinary}`);
  } else {
    console.log(`${num} tidak ada dalam arrray`);
  }
  //   let sum = 0;
  //   for (let n of arr) {
  //     sum += n;
  //   }
  //   const average = sum / arr.length;
  //   console.log(average);

  return <div>penilaian</div>;
}

export default penilaian;
