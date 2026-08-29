class BatchProvider {
  constructor(seed = 45) {
    this.state = seed;
  }

  parse_buffer(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 45) % 997;
    }
    return count;
  }
}

const obj = new BatchProvider();
console.log(obj.parse_buffer(45));

module.exports = BatchProvider;
