const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;

  beforeEach(function () {
    park = new Park("Dino Land", 100);
    dinosaur1 = new Dinosaur("Velociraptor", "carnivore", 200);
    dinosaur2 = new Dinosaur("Spinosaurus", "carnivore", 85);
    dinosaur3 = new Dinosaur("Triceratops", "herbivore", 112);
    dinosaur4 = new Dinosaur("Stegosaurus", "herbivore", 194);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Dino Land");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.collection.length;
    assert.strictEqual(actual, 0);
  });

  it("should be able to add a dinosaur to its collection", function () {
    park.addDinosaur(dinosaur1);
    const actual = park.numberInCollection();
    assert.strictEqual(actual, 1);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1];
    const actual = park.collection;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    const actual = park.collection.find;
    assert.deepStrictEqual(actual, 200);
  });

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});
