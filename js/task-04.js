const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');
let counterValue = 0;
counterValueEl.textContent = counterValue;

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});