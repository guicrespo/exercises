let count = 0;
const counter = {
  increment() {
    count += 1;
  },
  getCount() {
    return count;
  }
};

const app = counter => {
  counter.increment();
  counter.increment();
};

module.exports = app;