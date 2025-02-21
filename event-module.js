const EventEmitter = require('node:events');
const util = require('node:util');

// Define a Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Inherit EventEmitter to Person
util.inherits(Person, EventEmitter);

// Create instances of Person
const james = new Person('James', 23).on;
const mary = new Person('Mary', 23);
const ryu = new Person('Ryu', 23);

// Array of people
const people = [james, mary, ryu];

// Attach event listeners to each person
people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said: ${msg}`);
    });
});

// Emit the 'speak' event for James
james.emit('speak', 'hey dudes');

