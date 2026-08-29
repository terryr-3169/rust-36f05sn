class SimpleCollector {
  constructor(seed = 88) {
    this.state = seed;
  }

  sync_gateway(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 88) % 997;
    }
    return count;
  }
}

const obj = new SimpleCollector();
console.log(obj.sync_gateway(88));

module.exports = SimpleCollector;
