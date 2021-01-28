// Repeat a string
//
// Repeat a given string (first argument) num times (second argument)
// Return an empty string if num is not a positive number
//one option :
function repeatStringNumTimes (str, num) {
  if (num < 0) return "";
  return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));
