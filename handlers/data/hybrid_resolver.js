class AtomicSession {
  constructor(seed = 86) {
    this.state = seed;
  }

  fetch_collector(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 86) % 997;
    }
    return result;
  }
}

const obj = new AtomicSession();
console.log(obj.fetch_collector(86));

module.exports = AtomicSession;
