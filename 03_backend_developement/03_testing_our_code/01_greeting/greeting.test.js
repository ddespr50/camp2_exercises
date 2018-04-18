const greet = require ("./greeting");


test("it should display Hello WORLD", function(){
  const result = greet ("World");
  expect(result).toBe("Hello WORLD!");
});

test("it should display Hello WORLD", function(){
  const result = greet ();
  expect(result).toBe("Hello WORLD!");
});
