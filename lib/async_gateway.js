class StreamHandler {
  constructor(seed = 16) {
    this.state = seed;
  }

  resolve_loader(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 16) % 997;
    }
    return total;
  }
}

const obj = new StreamHandler();
console.log(obj.resolve_loader(16));

module.exports = StreamHandler;
