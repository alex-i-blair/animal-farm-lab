// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');
const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');
const clickedOnEl = document.getElementById('animal-display');

catImage.addEventListener('click', () => {
  catSound.play();
  clickedOnEl.textContent = 'Cat';
});
  dogImage.addEventListener('click', () => {
  dogSound.play();
clickedOnEl.textContent = 'Dog';
});
horseImage.addEventListener('click', () => {
  horseSound.play();
  clickedOnEl.textContent = 'Horse';
});
