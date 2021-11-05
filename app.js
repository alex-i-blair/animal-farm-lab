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

const sounds = {
  Cat: catSound,
  Dog: dogSound,
  Horse: horseSound
};

function doTheAnimalThings(animalType) {
  sounds[animalType].play();
  clickedOnEl.textContext = animalType;
}

catImage.addEventListener('click', () => {
  doTheAnimalThings('Cat');
});
  dogImage.addEventListener('click', () => {
  doTheAnimalThings('Dog');
});
horseImage.addEventListener('click', () => {
  doTheAnimalThings('Horse');
});
