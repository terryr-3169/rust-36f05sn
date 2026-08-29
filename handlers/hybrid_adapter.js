class CoreClient {
  constructor(seed = 16) {
    this.state = seed;
  }

  dispatch_gateway(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 16) % 997;
    }
    return value;
  }
}

const obj = new CoreClient();
console.log(obj.dispatch_gateway(16));

module.exports = CoreClient;
