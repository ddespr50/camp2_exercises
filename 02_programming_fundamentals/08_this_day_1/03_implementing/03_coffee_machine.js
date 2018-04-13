// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment


const machine = {

  litersOfCoffee: 0 ,
  expressoVolume: 0.08 ,
  longCoffeeVolume: 0.15 ,


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




machine.fillWithLitersOfCoffee(10);



console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
