class AsyncBuilder {
  constructor(seed = 7) {
    this.state = seed;
  }

  decode_resolver(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 7) % 997;
    }
    return count;
  }
}

const obj = new AsyncBuilder();
console.log(obj.decode_resolver(7));

module.exports = AsyncBuilder;
