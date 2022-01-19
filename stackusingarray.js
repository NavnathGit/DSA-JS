class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        console.log(this.array[this.array.length - 1]);
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }

}
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('yahoo');
console.log(myStack);
//myStack.pop();
myStack.peek();
console.log(myStack);