const titulo = document.getElementById('titulo');
console.log(typeof titulo);

const toppings = document.getElementsByClassName('topping');
console.log(toppings[0].id);

const primerTopping = document.querySelector('.topping')

primerTopping.style.backgroundColor = "blue"

console.log(primerTopping.style);