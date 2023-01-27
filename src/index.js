module.exports = function reverse (n) {
  let val = String(Math.abs(n));
  return val.split("").reverse().join("")
}
