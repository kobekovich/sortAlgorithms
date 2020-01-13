function bubbleSort() {
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
    } return inputArray;
}

measureTime(bubbleSort);
