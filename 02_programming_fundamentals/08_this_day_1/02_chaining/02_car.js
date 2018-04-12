// See Sparta courses for the exercise summary
const car = {

  distanceDone: 0,

  timeOfRoad: 0,

  currentSpeed: 0 ,

  start: function() {
    this.distanceDone = 0;
    return this;
  },
  changeSpeed: function(speed) {
    this.currentSpeed = speed;
    return this;
  },
  drive: function(minutes) {
    this.timeOfRoad = minutes;
    this.distanceDone=this.distanceDone + (this.currentSpeed*this.timeOfRoad/60);
    return this;
  },
  showDistance: function() {
    console.log(this.distanceDone + " Km");
    return this;
  },

};

car.start().changeSpeed(130).drive(42).changeSpeed(10).drive(60).showDistance();
car.changeSpeed(10).drive(60).showDistance();




module.exports = car;

// : (this.changeSpeed()*this.drive())/60;
