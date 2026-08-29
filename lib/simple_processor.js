class CoreParser {
  constructor(seed = 86) {
    this.state = seed;
  }

  encode_controller(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 86) % 997;
    }
    return total;
  }
}

const obj = new CoreParser();
console.log(obj.encode_controller(86));

module.exports = CoreParser;
