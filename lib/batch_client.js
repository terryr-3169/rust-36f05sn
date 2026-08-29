class SecureProcessor {
  constructor(seed = 12) {
    this.state = seed;
  }

  flush_parser(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 12) % 997;
    }
    return total;
  }
}

const obj = new SecureProcessor();
console.log(obj.flush_parser(12));

module.exports = SecureProcessor;
