array = [3, 5, 10, 11, 15];
console.log(binarySearch(1, array));
//console.log(Math.floor(2 / 2));
function binarySearch(num, arr) {
  let start = 0;
  let end = arr.length - 1;
  let length = arr.length;
  let i = Math.floor(end / 2);

  while (num !== arr[i] && length >= 2) {
    if (num < arr[i]) {
      end = i - 1;
    } else {
      start = i + 1;
    }
    length = end - start + 1;
    i = start + Math.floor(length / 2);
  }
  return num === arr[i] ? arr[i] : "NOT PRESENT";
}

function recBinSearch(num, arr){
  
}
