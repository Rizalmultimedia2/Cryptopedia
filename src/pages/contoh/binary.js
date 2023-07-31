import { el } from "date-fns/locale";
import React from "react";

function binary() {
  function binarySearch(arr, num) {
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
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const num = 1;
  const result = binarySearch(arr, num);

  if (result !== -1) {
    console.log(`Angka ${num} ditemukan pada indeks ke-${result}.`);
  } else {
    console.log(`Angka ${num} tidak ditemukan dalam array.`);
  }
  return <div>binary</div>;
}

export default binary;
