
let inputArray = [55, -20, -10, 0, -740, -22222, 22222, 11, -34, 55, -740, 0, 0];
let outputArray = [];

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
}

let tree = new Tree(inputArray[0]);
insertIntoTree();
goSort();
showResult()