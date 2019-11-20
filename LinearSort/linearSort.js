let inputArray = [];
let inputArrayLength = 10000;

function fillInputArray() {
    let multipliers = [-1000,-100,100,1000];
    let multipliersLength = multipliers.length;
    
    for (let i = 1; i < inputArrayLength; i++) {
        let randomMultiplier = Math.floor(Math.random() * multipliersLength);
        let randomNumber = Math.round(Math.random() * multipliers[randomMultiplier]);
        inputArray.push(randomNumber);
    }

    return console.log("Input array: " + inputArray);
}

function getMinItem(array, index) {
    array = array.slice(index);

    let minItem = array.reduce((previousValue, item) => 
                               {if (item < previousValue) return item; 
                               else return previousValue;
                               });
    return minItem;
}

function sort() {
    let startTime = new Date();

    for (let i = 0; i < inputArray.length; i++) {
        let value = getMinItem(inputArray, i);
        let minIndex = inputArray.indexOf(value, i);
    
        inputArray[minIndex] = inputArray[i];
        inputArray[i] = value;
    }
    
    let finishTime = new Date() - startTime;

    return console.log("Output array: " + inputArray + ". \nSort time : " + finishTime + " mss");
}

fillInputArray()
sort();

