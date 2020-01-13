function divide(array) {
  
  let arrayLength = array.length;
  let midElement = Math.floor(arrayLength/2);
  let leftAr = array.slice(0,midElement);
  let rightAr = array.slice(midElement,arrayLength);
  
  if (midElement === 0) {
    return array;
    //console.log(array);
  } else {
    return merge(divide(leftAr),divide(rightAr));
  }
}

function merge(leftAr, rightAr) {
  let outputArray = [];
  let i = 0, j = 0;
  
  while (i < leftAr.length && j < rightAr.length) {
    if (leftAr[i] < rightAr[j]) {
      outputArray.push(leftAr[i]);
      i++;
    } else {
      outputArray.push(rightAr[j]);
      j++;
    }
  } return outputArray.concat(leftAr.slice(i),rightAr.slice(j));
}

let startTime = new Date();
console.log("Output array: " + divide(inputArray));
let finishTime = new Date() - startTime;
console.log("Sort time : " + finishTime + " mss");