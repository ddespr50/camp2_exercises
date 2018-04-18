let litersOfCoffee = 0;



function putLitersOfCoffee(numberOfLiters){
  litersOfCoffee += numberOfLiters;

}

function consumeLitersOfCoffee(numberOfLiters){
  if(litersOfCoffee<numberOfLiters){
    return false;
  }
  litersOfCoffee-=numberOfLiters;
  return true;
}


function getQuantity(){
  return litersOfCoffee;
}


module.exports={
  getQuantity: getQuantity,
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
