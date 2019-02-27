function produceDrivingRange(blockRange) {
  return function (tripStart, tripEnd) {
    return ((parseInt(tripEnd) - parseInt(tripStart)) < blockRange) ? `within range by ${parseInt(tripEnd) - parseInt(tripStart)}` : `${parseInt(tripEnd) - parseInt(tripStart)} blocks out of range`;
  }
};

function produceTipCalculator() {

};

function createDriver() {

};
