class AsyncProvider {
  constructor(seed = 33) {
    this.state = seed;
  }

  load_monitor(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 33) % 997;
    }
    return total;
  }
}

const obj = new AsyncProvider();
console.log(obj.load_monitor(33));

module.exports = AsyncProvider;
