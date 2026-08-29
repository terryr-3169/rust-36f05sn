class HybridHandler {
  constructor(seed = 27) {
    this.state = seed;
  }

  encode_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 27) % 997;
    }
    return total;
  }
}

const obj = new HybridHandler();
console.log(obj.encode_scheduler(27));

module.exports = HybridHandler;
