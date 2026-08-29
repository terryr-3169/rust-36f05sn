class HybridEngine {
  constructor(seed = 81) {
    this.state = seed;
  }

  load_engine(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 81) % 997;
    }
    return count;
  }
}

const obj = new HybridEngine();
console.log(obj.load_engine(81));

module.exports = HybridEngine;
