const _array = new WeakMap();

class Stack {
  constructor() {
    _array.set(this, []);
  }

  get count() {
    return _array.get(this).length;
  }

  peek() {
    // if count =0 new Error('Stack is empty')
    if (this.count === 0) throw new Error("Stack is empty");
    return _array.get(this)[this.count - 1];
  }
  pop() {
    if (this.count === 0) throw new Error("Stack is empty");
    return _array.get(this).pop();
  }
  push(value) {
    // array.push
    _array.get(this).push(value);
  }
}

const s = new Stack();
console.log(s);
