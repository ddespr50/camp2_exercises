const container = require("./container");

const machine = {
  expresso: function() {
    return container.consumeLitersOfCoffee(0.08);
  },
  fillWithLitersOfCoffee: function(liters) {
    container.putLitersOfCoffee(liters);
  },
  longCoffee: function() {
    return container.consumeLitersOfCoffee(0.15);
  }
};

module.exports = machine;
