// Write your solution in this file!
const leastFavoriteCustomer = "doe";
var customerName = "bob";
var bestCustomer;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(value) {
  bestCustomer = value;
}

function changeLeastFavoriteCustomer(value) {
  leastFavoriteCustomer = value;
}
