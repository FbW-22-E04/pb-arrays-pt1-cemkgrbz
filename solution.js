//1

const euroCities = ['Dublin', 'Leipzig', 'Porto', 'Naples', 'Barcelona'];
const secondCity = euroCities[1];

//2

euroCities[0] = 'Berlin';

//3

console.log(euroCities.length);

//4

euroCities.pop();
console.log(euroCities.length);

//5

euroCities.splice(4,0, 'Budapest');
console.log(euroCities);

//6

const asianCities = ['Pekin', 'Tokyo', 'Tahran', 'Baku', 'Seul'];

//7

const worldCities = euroCities.concat(asianCities);
console.log(worldCities)

//8

console.log(worldCities.reverse())

//9

euroCities.splice(2, 1);
console.log(euroCities);

//10

const someAsianCities = asianCities.slice(1,4);
console.log(someAsianCities)

//11

worldCities[2] = 'Toronto';
console.log(worldCities);

//12

worldCities.splice(1, 0, 'Washington') ;
console.log(worldCities);

//13

console.log(worldCities.join(', '))

//Bonus
//1

const string = 'Hello World';
console.log(string.split('').reverse().join(''));

//2-7

const lotr = ['Frodo', 'Sam', 'Aragorn', 'Gandalf', 'Legolas'];
const parents = ['Elrond', 'Galadriel'];
const combine = lotr.concat(parents);
console.log(combine);
combine.push('Gimli')
console.log(combine.reverse());
console.log(combine);
parents[1] = 'Arwen';
console.log(parents);