const toWords = require ("./to_Words");

test("it should display all words separatly of sentence", function(){
  const result = toWords ("the sun is shining");
  expect(result).toEqual(["the","sun","is","shining"]);
});

test("it should display all words separatly of sentence", function(){
  const result = toWords ("the sun is \"shining\"" );
  expect(result).toEqual(["the","sun","is","shining"]);
});
