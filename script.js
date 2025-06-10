let count = 0;

const cookie = document.getElementById('cookie');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

// Increase cookies on click
cookie.addEventListener('click', () => {
  count++;
  counter.textContent = count;


  // Reset the shake animation after it finishes so it can be triggered again
  cookie.addEventListener('animationend', () => {
    cookie.style.animation = ''; // Reset animation
  });
});

// Reset cookies on button click
resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
  document.body.style.animation = ''; // Reset background animation
});
