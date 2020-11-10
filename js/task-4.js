const counter = {
  value: 0,
  increment () {
    this.value += 1;
  },
  decrement () {
    this.value -= 1
  },
};

const incrementBt = document.querySelector('[data-action="increment"]')
const decrementBt = document.querySelector('[data-action="decrement"]')
const valueBt = document.querySelector('#value')

incrementBt.addEventListener('click', function(){
  counter.increment();
  valueBt.textContent = counter.value;
});

decrementBt.addEventListener('click', function(){
  counter.decrement();
  valueBt.textContent = counter.value;
});
