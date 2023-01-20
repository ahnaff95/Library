"use strict";

const person = function (name, age) {
  this.name = name;
  this.age = age;
};

// Object Constructor - function to initialize new objects

const me = new person("Ahnaf", "15");
console.log(me);

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Here the 'this' keyword is pointing to the new object being created using this book.prototype

const deepWork = new book("Deep Work", "Cal Newport", "306", true);
console.log(deepWork);

// Here deepWork.title = this.title = 'Deep Work'

function printStuff(myDocuments) {
  this.documents = myDocuments;
}

printStuff.prototype.print = function () {
  return this.documents;
};

// The obj variable inherits all the properties & methods of printStuff() object.

// Properties being the "this.documents" & method being the 'this.print'

const obj = new printStuff("Files");

// Here the 'obj' object is initialized with the printStuff() constructor, and thus the 'obj' has inherited from the printStuff.prototype (which is its prototype attribute)

console.log(obj);
console.log(obj.print());

// Functions are objects and all the methods and properties (parameters) are inherited when calling that function. This creates the Function.prototype.

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
  return `I am a ${this.name} and my color is ${this.color}`;
};

Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) return "Im Organic!";
};

function fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

fruit.prototype = new Plant();

// The 'fruit' function / prototype is inheriting properties from the 'Plant' object constructor. Basically copying all the plant stuff in the fruit.

// More simply, the fruit constructor inherits all the methods and properties from the plant constructor, so we can access them.

const aBanana = new fruit("banana", "yellow");
console.log(fruit.prototype);
console.log(aBanana.showNameAndColor());
console.log(aBanana.amIOrganic());
console.log(aBanana.country);
console.log(aBanana.toString());
