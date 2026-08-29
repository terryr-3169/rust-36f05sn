class SmartService {
  constructor(seed = 31) {
    this.state = seed;
  }

  decode_gateway(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 31) % 997;
    }
    return acc;
  }
}

const obj = new SmartService();
console.log(obj.decode_gateway(31));

module.exports = SmartService;
