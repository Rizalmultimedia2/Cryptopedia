const arr = [1, 2, 3, 4, 4, 5];

const num = 5;

//binary search
const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== num && start <= end) {
    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === num ? mid : -1;
};
