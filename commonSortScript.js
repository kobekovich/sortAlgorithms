let inputArray = [];
const inputArrayLength = 1000;

function fillInputArray() {
    const multipliers = [-1000,-100,100,1000];
    const multipliersLength = multipliers.length;
    
    for (let i = 1; i < inputArrayLength; i++) {
        let randomMultiplier = Math.floor(Math.random() * multipliersLength);
        let randomNumber = Math.round(Math.random() * multipliers[randomMultiplier]);
        inputArray.push(randomNumber);
    }
  
    return console.log("Input array: " + inputArray);
  }

function measureTime(sortFunction) {
    let startTime = new Date();

    sortFunction();

    let finishTime = new Date() - startTime;
    return console.log("Output array: " + inputArray + ". \nSort time : " + finishTime + " mss");
}

fillInputArray();