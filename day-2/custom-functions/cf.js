// function definition
function calculateBill() {
  // this is the function body
  console.log("Running Calculate Bill!!");
  const total = 100 * 1.13;
  console.log(total);
  return total;
}
// function call or function invocation
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);

/*
eslint
  no-unused-vars: "off",
  no-console: "off"
*/
