function produceDrivingRange(blockRange) {
  return function (tripStart, tripEnd) {
    return ((parseInt(tripEnd) - parseInt(tripStart)) < blockRange) ? `within range by ${parseInt(tripEnd) - parseInt(tripStart)}` : `${parseInt(tripStart) - parseInt(tripEnd)} blocks out of range`;
  }
};

function produceTipCalculator() {

};

function createDriver() {

};
