class FastDispatcher {
  constructor(seed = 65) {
    this.state = seed;
  }

  dispatch_resolver(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 65) % 997;
    }
    return value;
  }
}

const obj = new FastDispatcher();
console.log(obj.dispatch_resolver(65));

module.exports = FastDispatcher;
