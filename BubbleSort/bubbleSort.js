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

function sort() {
    let startTime = new Date();

    let j = 0;
    while (j < inputArray.length - 1) {
        for (let i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i+1] < inputArray[i]) {
                let value = inputArray[i];
                inputArray[i] = inputArray[i+1];
                inputArray[i+1] = value;
            }
        }
        j++;
    }

    let finishTime = new Date() - startTime;

    return console.log("Output array: " + inputArray + ". \nSort time : " + finishTime + " mss");
}

fillInputArray();
sort();
