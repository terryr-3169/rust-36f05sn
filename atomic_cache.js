class SharedParser {
  constructor(seed = 95) {
    this.state = seed;
  }

  load_engine(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 95) % 997;
    }
    return value;
  }
}

const obj = new SharedParser();
console.log(obj.load_engine(95));

module.exports = SharedParser;
