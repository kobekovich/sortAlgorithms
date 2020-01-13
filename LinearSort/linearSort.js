function getMinItem(array, index) {
    array = array.slice(index);

    let minItem = array.reduce((previousValue, item) => 
                               {if (item < previousValue) return item; 
                               else return previousValue;
                               });
    return minItem;
}

function sort() {
    for (let i = 0; i < inputArray.length; i++) {
        let value = getMinItem(inputArray, i);
        let minIndex = inputArray.indexOf(value, i);
    
        inputArray[minIndex] = inputArray[i];
        inputArray[i] = value;
    }

    return inputArray;
}

measureTime(sort);

