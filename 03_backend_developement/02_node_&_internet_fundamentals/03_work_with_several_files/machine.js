//a tester


const container = require ("./container");
console.log(container);

const machine = {




  fillWithLitersOfCoffee : function (quantityOfCoffee){
    this.litersOfCoffee = this.litersOfCoffee + quantityOfCoffee;
    //this.litersOfCoffee += quantityOfCoffee;
    return this;
  },
  expresso : function (){
    if (this.litersOfCoffee >= this.expressoVolume) {
      this.litersOfCoffee = this.litersOfCoffee - this.expressoVolume;
      //this.litersOfCoffee -= this.expressoVolume;
      return true;
    } else {
      return false;
    }

  },
  longCoffee : function (){
    if (this.litersOfCoffee >= this.longCoffeeVolume) {
      this.litersOfCoffee = this.litersOfCoffee - this.longCoffeeVolume;
      //this.litersOfCoffee -= this.longCoffeeVolume;
      return true;
    } else {
      return false;
    }

  },

};

module.exports = machine;
