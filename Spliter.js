const bill = document.querySelector('#long-input');

const five = document.querySelector('.one');
const ten = document.querySelector('.two');
const fifth = document.querySelector('.three');
const twentyFive = document.querySelector('.four');
const fifty = document.querySelector('.five');
const custom = document.querySelector('.six');

const people = document.querySelector('#long-input-two');
const tipAnswer = document.querySelector('.tip-answer');
const totalAnswer = document.querySelector('.total-answer');
const block = document.querySelector('.block');

tipAnswer.innerHTML = `<h1>$0.00</h1>`;
totalAnswer.innerHTML = `<h1>$0.00</h1>`;

five.addEventListener('click', () => {
  let total = bill.value * five.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});

ten.addEventListener('click', () => {
  let total = bill.value * ten.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});

fifth.addEventListener('click', () => {
  let total = bill.value * fifth.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});

twentyFive.addEventListener('click', () => {
  let total = bill.value * twentyFive.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});

fifty.addEventListener('click', () => {
  let total = bill.value * fifty.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});

custom.addEventListener('click', () => {
  let total = bill.value * custom.value;
  tipAnswer.innerHTML = `<h1>$${total.toFixed(2)}</h1>`;
});


people.addEventListener('input', () => {
  let split = bill.value/people.value;
  totalAnswer.innerHTML = `<h1>$${split.toFixed(2)}</h1>`
});

block.addEventListener('click', () => {
  bill.value = '';
  people.value = '';
  tipAnswer.innerHTML = `<h1>$0.00</h1>`;
  totalAnswer.innerHTML = `<h1>$0.00</h1>`;
});


// if (isNaN) {
//   people.value = 1;
//   let split = bill.vale/people.value;
//   totalAnswer.innerHTML = `<h4>${split}</h4>`;
// }

// totalAnswer.innerHTML = `<h4>${spliting}</h4>`;