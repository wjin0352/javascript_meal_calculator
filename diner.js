// requirements Create diner objects which represent a single diner.
// Add dishes to a diner's meal
// Total up the cost of all of the diners' meals
// Add a fixed tax percentage to the total bill
// Add a percentage tip to the total bill
// Split the bill fairly among the diners
// Each diner should pay the tax on their own food
// Each diner should pay an equal share of the tip
// If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge.
// Print out a total bill
// Print a breakdown for what each diner owes

var Diner = function(name) {
  this.name = name;
  this.dishes = [];
};

Diner.prototype.addDish = function(dishPrice) {
  this.dishes.push(dishPrice);
};

Diner.prototype.taxes = function(taxRate) {
  return this.dishes.reduce(function(accumulator, dishPrice) {
    return accumulator + taxRate * dishPrice;
  }, 0);
};

Diner.prototype.total = function() {
  return this.dishes.reduce(function(accumulator, dishPrice, index) {
    return dishPrice + accumulator;
  }, 0);
};


module.exports = Diner;
