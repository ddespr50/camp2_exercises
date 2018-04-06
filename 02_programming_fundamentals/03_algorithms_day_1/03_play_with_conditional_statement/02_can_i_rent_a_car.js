// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenseIssued = driverData.licenseIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not

let canRentACar = false;
if ( driverData.licenseIssued < 2018){
  console.log("the driver can rent a car");
} else {
  console.log("the driver cannot rent a car");
}

// Your code here:


const driverIsLicenceValid = (driverLicense === "B" || driverLicense ==="B1");
const atLeastTwoYears = (licenseIssued <= 2016);
const isDriverIsSafe = (numberOfAccident === 0 || bonus >= 0.7);

if (driverIsLicenceValid && atLeastTwoYears && isDriverIsSafe){
  canRentACar = true;
}else{
  canRentACar = false;
}
