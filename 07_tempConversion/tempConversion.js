const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * 5 / 9;
  return helper(convertedTemp);
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = temp * 9 / 5 + 32;
  return helper(convertedTemp);
};

const helper = function(temp) {
  if (Number.isInteger(temp)) {
    return temp;
  }
  else {
    return parseFloat(temp.toFixed(1));
  }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
