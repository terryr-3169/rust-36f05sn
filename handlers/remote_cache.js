class AsyncLoader {
  constructor(seed = 13) {
    this.state = seed;
  }

  render_worker(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 13) % 997;
    }
    return acc;
  }
}

const obj = new AsyncLoader();
console.log(obj.render_worker(13));

module.exports = AsyncLoader;
