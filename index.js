// Code your solutions in this file
// index.js

// Function to generate thank you messages for each name provided
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Function to count down from a given number to zero and log each number
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

module.exports = {
  writeCards,
  countDown
};
