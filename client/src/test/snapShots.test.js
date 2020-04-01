import PokeItem from "../components/items/PokeItem";
import PokeFilter from "../components/items/PokeFilter";
import React from "react";
import renderer from "react-test-renderer";

test("Check if filter component is rendering correctly", () => {
  const tree = renderer.create(<PokeFilter />).toJSON();
  expect(tree).toMatchSnapShot();
});

test("Check if pokemon item components are rendering correctly", () => {
  const tree2 = renderer.create(<PokeItem />).toJSON();
  expect(tree2).toMatchSnapShot();
});
