function convert(gallon, liter) {
  return gallon * liter;
}

const gallon = parseInt(prompt("How many gallons do you need?"));
const liter = 3.7854;

const output = convert(gallon, liter);

alert("you will need " + (output) + " Liters!");