console.log('Hello World');
// string
let firstName = 'Chris';
// number
let temperature = 100;
// boolean
let sunny = true;

// Array - store a collection of things
// Generally all the same data type (e.g. string)
// Data in an Array is sorted
//               0        1        2
let colors = ['orange', 'teal', 'green'];
// .pop() removes the last item from an array
colors.pop();
// log out the data from our Array
console.table(colors);
// Adds to the end of the Array
colors.push('blue');
console.table(colors);
// Adds to the beginning of the Array
colors.unshift('purple');
console.table(colors);
// Removes from the beginning
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);
console.table(colors);
// Access the first color without removing it
let firstColor = colors[0];
console.log(firstColor);
console.table(colors);

// Loops
// 'for of' loop. Loops over each item in
// an Array and assigns the value to 'item'.
let colorList = document.querySelector('#color-list');
for(let item of colors) {
    // repeated for each item in the Array
    console.log('color: ', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

// traditional for loop
//                       0   1   2    3    4
let temperatureValues = [72, 84, 93, 102, 88];
//      start,      end,       increment
for(let index = 0; index < 10; index += 2) {
    console.log(index);
    // if (index > 100) {
    //     break; // this will exit the loop
    // }
}
// Loop over all temperature values
for(let i = 0; i < temperatureValues.length; i += 1) {
    let temp = temperatureValues[i];
    console.log('temp: ', temp);
}

// while (least common)
let start = 0;
//      end
while (start < 10) {
    console.log(start);
    start += 1; // increment
}
console.log('----for of loop----');
// 'for of' loop
for(let temp of temperatureValues) {
    console.log(temp);
}

// Data you are provided: A list of all item values (cost of items)
// Expected output: Total value of all items. Indication of whether
// the fundraising goal has been achieved.

// What variables and logic would you need for this?
const itemList = [100, 500, 2000, 50, 1000, 750, 10000]; // Array
const fundraisingGoal = 20000; // Number
let currentTotal = 0; // Number
let goalReached = false; // Boolean
// Loop to add all item costs to the total
for(let item of itemList) {
    console.log('for loop', item, currentTotal);
    // Add each item value to the currentTotal
    currentTotal += item;
}
console.log('Final total: ', currentTotal);
if (currentTotal >= fundraisingGoal) {
    // Goal has been reached!!
    goalReached = true; 
}
console.log('goalReached', goalReached);


// Display on the webpage whether goal has been reached
let outputDiv = document.querySelector('#output');
if(goalReached) {
    outputDiv.innerHTML = 'Goal reached!!!';
} else {
    outputDiv.innerHTML = 'Goal not yet reached. Remaining amount: ' + (fundraisingGoal - currentTotal);
}


