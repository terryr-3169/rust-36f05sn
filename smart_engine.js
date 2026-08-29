class BatchHandler {
  constructor(seed = 72) {
    this.state = seed;
  }

  decode_client(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 72) % 997;
    }
    return value;
  }
}

const obj = new BatchHandler();
console.log(obj.decode_client(72));

module.exports = BatchHandler;
