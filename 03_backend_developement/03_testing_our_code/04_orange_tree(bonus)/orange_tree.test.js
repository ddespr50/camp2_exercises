const tree = require("./03_orange_tree");

test("Can i take an orange", function () {
  tree.seed();
  tree.oranges = 10;
  expect(tree.pickAnOrange()).toEqual(true);
  expect(tree.oranges).toEqual(9);
});
