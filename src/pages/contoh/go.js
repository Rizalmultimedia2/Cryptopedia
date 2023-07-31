import React from "react";

function go() {
  //   let found = false;
  //   for (let n of arr) {
  //     if (num == n) {
  //       found = true;
  //       break;
  //     }
  //   }

  //   if (found) {
  //     console.log("Ada dalam array");
  //   } else {
  //     console.log("Tidak ada dalam array");
  //   }
  //   function binarySearch(num, arr) {
  //     let left = 0;
  //     let right = arr.length - 1;
  //     while (left <= right) {
  //       let mid = Math.floor((left + right) / 2);
  //       let numMid = arr[mid];
  //       if (numMid == num) {
  //         return num;
  //       } else if (numMid < num) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     }
  //     return -1;
  //   }
  //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const num = 8;

  //   const result = binarySearch(num, arr);

  //   if (result !== -1) {
  //     console.log("Ada dalam arraay");
  //   } else {
  //     console.log("Tidak ada dalam array");
  //   }

  function bubleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
        }
      }
    }
    return arr;
  }

  const arr = [12, 45, 112, 31, 81, 20, 102];
  const result = bubleSort(arr);
  console.log(result);

  return <div>go</div>;
}

export default go;
