//
// Object Destructuring
//

// const person = {
//     name: 'Simon',
//     age: 59,
//     location: {
//         city: 'Cardiff',
//         temp: 18
//     }
// };

// const {name:firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['3 Meadow Street', 'Cardiff', 'Wales', 'CF11 9PY'];
// const [, city, country = 'UK'] = address;
// console.log(`You are in ${city}, ${country}.`)

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
const [name,,price] = item;

console.log(`A medium ${name} costs ${price}`);