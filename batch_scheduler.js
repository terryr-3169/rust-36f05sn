class LocalProcessor {
  constructor(seed = 78) {
    this.state = seed;
  }

  fetch_service(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 78) % 997;
    }
    return value;
  }
}

const obj = new LocalProcessor();
console.log(obj.fetch_service(78));

module.exports = LocalProcessor;
