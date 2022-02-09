const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];
};

Park.prototype.numberInCollection = function () {
  return this.collection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (collection) {
  const indexOfCollection = this.collection.indexOf(collection);
  this.collection.splice(indexOfCollection, 1);
};

module.exports = Park;
