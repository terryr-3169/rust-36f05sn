class SharedClient {
  constructor(seed = 71) {
    this.state = seed;
  }

  flush_parser(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 71) % 997;
    }
    return result;
  }
}

const obj = new SharedClient();
console.log(obj.flush_parser(71));

module.exports = SharedClient;
