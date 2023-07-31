import React from "react";

function contohb() {
  const number = [];
  function bubleSorting(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  function linearSearch(num, arr) {
    for (let n of arr) {
      if (num == n) {
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
      let mid = (left + right) / 2;
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

  const arr = [12, 31, 11, 45, 68, 98, 23];
  const sorting = bubleSorting(arr);
  for (let num of sorting) {
    number.push(num);
  }
  const search = 12;
  const searchL = linearSearch(search, sorting);
  const searchB = binarySearch(search, sorting);

  if (searchL) {
    console.log(search, "Ditermukan dalam array");
  } else {
    console.log(search, "Tidak ditermukan dalam array");
  }

  if (searchB !== -1) {
    console.log(search, "Ditermukan dalam array");
  } else {
    console.log(search, "Tidak ditermukan dalam array");
  }

  console.log(number);
  console.log(sorting);
  return <div>contohb</div>;
}

export default contohb;
