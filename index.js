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

};
