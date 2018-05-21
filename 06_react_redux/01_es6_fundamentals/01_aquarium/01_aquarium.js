// Insert code here
class Aquarium {
  constructor(fishes,algaes){
    this.fishes = fishes;
    this.algaes = algaes;
  }
  addFish(fish){
    this.fishes.push(fish);
  }
  addAlgae(algae){
    this.algaes.push(algae);
  }
  endTurn(){
    // console.log(this.algae.length);
    // console.log(this.fish.length);
    this.fishes.forEach(fish => this.timeToDinner(fish));
  }
  // veganFishesEatAlgae(){
  //   if (this.algaes.length > 0){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  veganFishesEatAlgae(){
    return (this.algaes.length > 0);
  }


  // carnivorFishesEatFish(){
  //   if (this.fishes.length > 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  carnivorFishesEatFish(){
    return (this.fishes.length > 0);
  }



  timeToDinner(fish) {
    const {isCarnivor} = fish;
    if(isCarnivor === 0) {
      if (this.carnivorFishesEatFish()) {
        this.fishes.pop();
      }
    } else {
      if (this.veganFishesEatAlgae()) {
        this.algaes.pop();
      }
    }
  }}


class Fish {
  constructor(name,sex, isCarnivor = 0){
    this.name = name ;
    this.sex = sex;
    this.isCarnivor = isCarnivor;
    //this.vegan = vegan dans ce cas, on ajoute vegan en parametre
  }
}

class Algae {
  constructor(size){
    this.size = size;
  }
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};

// const aqua = new Aquarium([new Fish("Nemo", "m")], [new Algae(14)]);
// aqua.addFish(new Fish("toto", "m"));
