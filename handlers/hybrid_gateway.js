class FastBuilder {
  constructor(seed = 49) {
    this.state = seed;
  }

  build_loader(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 49) % 997;
    }
    return acc;
  }
}

const obj = new FastBuilder();
console.log(obj.build_loader(49));

module.exports = FastBuilder;
