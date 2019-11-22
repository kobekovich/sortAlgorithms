let inputArray = [];
let inputArrayLength = 10000;
let outputArray = [];

function fillInputArray() {
    let multipliers = [-1000,-100,100,1000];
    let multipliersLength = multipliers.length;
    
    for (let i = 1; i < inputArrayLength; i++) {
        let randomMultiplier = Math.floor(Math.random() * multipliersLength);
        let randomNumber = Math.round(Math.random() * multipliers[randomMultiplier]);
        inputArray.push(randomNumber);
    }

    return inputArray;
}

class Tree {

    constructor(root) {
        this.root = root;
        this.less = null;
        this.greater = null;
    }

    insert(value) {
        if (value <= this.root) {
            if (!this.less) {
                this.less = new Tree(value);
            } else {
                this.less.insert(value);
            }
        } else {
            if (!this.greater) {
                this.greater = new Tree(value);
            } else {
                this.greater.insert(value);
            }
        }
    }

    sortRoots() {
        if (this.less && this.greater) {
            this.less.sortRoots();
            outputArray.push(this.root);
            this.greater.sortRoots();
        } else if (!this.less && this.greater) {
            outputArray.push(this.root);
            this.greater.sortRoots();
        } else if (this.less && !this.greater) {
            this.less.sortRoots();
            outputArray.push(this.root);
        } else {
            outputArray.push(this.root);
        }
    }
}

function insertIntoTree() {
    for (let i = 1; i < inputArray.length; i++) {
        tree.insert(inputArray[i]);
    }
}

function goSort() {
    tree.sortRoots();
}

function showResult() {
    console.log("Input array: " + inputArray);
    console.log("Output array: " + outputArray);
    console.log("Sort time : " + finishTime + " mss");
}

fillInputArray();

let startTime = new Date();
let tree = new Tree(inputArray[0]);
insertIntoTree();
goSort();
let finishTime = new Date() - startTime;

showResult();