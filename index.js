function produceDrivingRange(blockRange) {
  return function (tripStart, tripEnd) {
    return ((parseInt(tripEnd) - parseInt(tripStart)) < blockRange) ? `within range by ${parseInt(tripEnd) - parseInt(tripStart)}` : `${(parseInt(tripEnd) - parseInt(tripStart)) - blockRange} blocks out of range`;
  }
};

function produceTipCalculator(percent) {
  return function (amount) {
    return amount * percent;
  }
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }

  }
};
