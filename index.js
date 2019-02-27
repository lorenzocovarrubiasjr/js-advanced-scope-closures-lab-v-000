function produceDrivingRange(blockRange) {
  return function (tripStart, tripEnd) {
    return ((parseInt(tripEnd) - parseInt(tripStart)) < blockRange) ? `within range by ${parseInt(tripEnd) - parseInt(tripStart)}` : false;
  }
};

function produceTipCalculator() {

};

function createDriver() {

};
