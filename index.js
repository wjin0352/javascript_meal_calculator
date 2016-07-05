var Diner = require('./diner');

var names = ['bob', 'jane', 'dough'];

var initializeDiners = function() {
  var diners = [];
  var dinerNum = randomNum(5) + 1;
  for(var i = 0; i < dinerNum; i++) {
    diners.push(createDiner());
  }
  return diners;
};

var createDiner = function() {
  var name = names[randomNum(names.length)];
  var dishNum = randomNum(4) + 1;
  var diner = new Diner(name);
  for(var i = 0; i < dishNum; i++) {
    diner.addDish(randomNum(30) + 1);
  }
  return diner;
};

var main = function() {
  var diners = initializeDiners();
  var total = diners.reduce(function(acc, diner) {
    var total = diner.total();
    return acc + total;
  }, 0);
  var basePortion = total/diners.length;
  var dinerMessages = diners.map(function(diner) {
    var taxes = diner.taxes(0.1);
    return diner.name + ' owes: ' + (basePortion + taxes )
  })
  console.log(total, dinerMessages);
};

var randomNum = function (max) {
  return Math.floor(Math.random() * max);
};

main();
