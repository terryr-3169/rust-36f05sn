class AsyncRegistry {
  constructor(seed = 18) {
    this.state = seed;
  }

  fetch_builder(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 18) % 997;
    }
    return result;
  }
}

const obj = new AsyncRegistry();
console.log(obj.fetch_builder(18));

module.exports = AsyncRegistry;
