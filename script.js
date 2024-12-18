// Select the elements
const colorButton = document.getElementById('colorButton');
const dynamicTitle = document.getElementById('dynamicTitle');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random title
function getRandomTitle() {
  const titles = [
    "Welcome to the Color Party!",
    "Change is Beautiful!",
    "Enjoy Randomness!",
    "Brighten Your Day!",
    "Click and See the Magic!"
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

// Add a click event to the button
colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
  dynamicTitle.textContent = getRandomTitle();
});