class SmartClient {
  constructor(seed = 26) {
    this.state = seed;
  }

  fetch_factory(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 26) % 997;
    }
    return count;
  }
}

const obj = new SmartClient();
console.log(obj.fetch_factory(26));

module.exports = SmartClient;
