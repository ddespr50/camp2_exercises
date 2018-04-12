// See Sparta courses for the exercise summary
const orangeTree = {
  height : 0,
  age : 0,
  oranges : 0,
  alive : true,

  pickAnOrange: function(){
    if (this.oranges > 0 && this.alive === true) {
      this.oranges--;
      return true;
    } else {
      return false;
    }
  },

  ageOneYear: function(){
    this.age++ ;
    if(this.age<=100 && this.age>=50){
      this.alive=false;
    }
    if (this.age < 10) {
      this.height = this.height + 25;
    } else if (this.age < 20){
      this.height = this.height + 10;
    } else {
      this.height = this.height;
    }
    if (5<=this.age && this.age<10) {
      this.oranges = 10;
    } else if (10<=this.age && this.age<20){
      this.oranges = 20;
    } else if (20<=this.age && this.age<40){
      this.oranges = 5;
    } else {
      this.oranges =0;
    }
  },

  seed: function(){
    this.age=0;
    this.height=0;
    this.oranges=0;
    this.alive=true;
  },


  print: function (){
    console.log(this.age,this.oranges,this.height,this.alive);
  }

};

orangeTree.seed();
for (let i=0;i < 150;i++){
  orangeTree.ageOneYear();
  orangeTree.print();
}

module.exports = orangeTree;
orangeTree.pickAnOrange();
