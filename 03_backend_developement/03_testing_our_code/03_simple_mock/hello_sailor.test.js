const helloSailor = require ("./hello_sailor");


test("console.log returns something", () => {
  console.log = jest.fn();
  helloSailor("buddy");
  expect(console.log).toHaveBeenCalledWith("Howdy buddy!");
});


test("console.log returns something even empty", () => {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
