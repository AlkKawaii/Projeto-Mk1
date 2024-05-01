/*
Counter
*/

// let count = 0;

// const counter = document.getElementById("counter");

// document.getElementById("id1").onclick = () => {
//     count++;
//     counter.textContent = count;
// };

// document.getElementById("id2").onclick = () => {
//     count = 0;
//     counter.textContent = count;
// };

// document.getElementById("id3").onclick = () => {
//     count--;
//     counter.textContent = count;
// };

// document.getElementById("submit-test").onclick = () => {
//     document.getElementById("p-test").textContent = document.getElementById("input-test").value;
// }

/*
Get input
*/

// const inputAge = document.getElementById("age");
// const submit = document.getElementById("submit");
// const result = document.getElementById("result");
// let age;

// submit.onclick = () => {
//     age = inputAge.value;

//     if (age >= 18) {
//         result.textContent = `Já que sua idade é maior que 18, pode usar este site`;
//     } else if (age == 0) {
//         result.textContent = `Já que sua idade é 0, você acabou de nascer`;
//     } else if (0 < age < 18) {
//         result.textContent = `Já que sua idade é menor que 18, não pode usar este site`;
//     }
// };

/*
Checked
*/

// const checkbox = document.getElementById("check");
// const radiochk1 = document.getElementById("radiochk1");
// const radiochk2 = document.getElementById("radiochk2");
// const radiochk3 = document.getElementById("radiochk3");
// const submit = document.getElementById("submit");
// const result1 = document.getElementById("result1");
// const result2 = document.getElementById("result2");

// submit.onclick = () => {
//     if (checkbox.checked) {
//         result1.textContent = `Você está inscrito`;
//         if (radiochk1.checked) {
//             result2.textContent = `Você selecionou Visa`;
//         } else if (radiochk2.checked) {
//             result2.textContent = `Você selecionou Mastercard`;
//         } else if (radiochk3.checked) {
//             result2.textContent = `Você selecionou Pix`;
//         } else {
//             result2.textContent = `Você não selecionou um método de pagamento`;
//         }
//     } else {
//         result1.textContent = `Você não está inscrito`;
//         result2.textContent = ``;
//     }
// };

/*
Adivinhe o número
*/

// const input = document.getElementById("input");
// const btn = document.getElementById("submit");
// const result = document.getElementById("result");
// const reset = document.getElementById("reset");
// let guessNum = Math.floor(Math.random() * 100 + 1);
// let numValue;

// reset.onclick = () => {
//     guessNum = Math.floor(Math.random() * 100 + 1);
//     result.innerHTML = "";
// };

// btn.onclick = () => {
//     numValue = Number(input.value);
//     if (numValue === guessNum) {
//         window.alert(`Você acertou o número! Ele era: ${guessNum}`);
//         guessNum = Math.floor(Math.random() * 100 + 1);
//         result.innerHTML = "";
//     } else if (numValue > 100 || numValue < 1) {
//         window.alert("Número inválido, digite algo entre 1 a 100");
//     } else if (numValue > guessNum) {
//         result.innerHTML += `${numValue} é muito alto <br>`;
//     } else if (numValue < guessNum) {
//         result.innerHTML += `${numValue} é muito baixo <br>`;
//     } else {
//         result.innerHTML += 'Uh, como você chegou nesse erro? <br>'
//     }
// };

/*
Conversor
*/

// const input = document.getElementById("input");
// const celsiusF = document.getElementById("temperature1");
// const fahrenheitC = document.getElementById("temperature2");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//     temp = Number(input.value);
//     if (celsiusF.checked) {
//         temp = (temp * 9) / 5 + 32;
//         result.innerHTML = `A temperatura em Fahrenheit é: <br> ${temp.toFixed(2)}°F`;
//     } else if (fahrenheitC.checked) {
//         temp = ((temp - 32) * 5) / 9;
//         result.innerHTML = `A temperatura em Celsius é: <br> ${temp.toFixed(2)}°C`;
//     } else {
//         result.innerHTML = "Como raios você conseguiu esse erro";
//     }
// }

/*
Spread operator and Rest Parameter
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maximum = Math.max(...numbers)

// console.log(maximum)

// const slkmermao = (...sim) => {
//     console.log(sim)
// }

// slkmermao(2, 3, 'sim')

/* 
Dice
*/

// function rollDices() {
//     const dicesNum = Number(document.getElementById("input").value);
//     const result = document.getElementById("result");
//     const imageContainer = document.getElementById("imagesContainer");
//     let dicesValue = [];
//     let diceFaces = [];
//     for (let i = 0; i < dicesNum; i++) {
//         const diceValue = Math.floor(Math.random() * 6 + 1);
//         dicesValue.push(diceValue);
//         diceFaces.push(`<img src="diceFaces/Alea_${diceValue}.png" alt="dice face ${diceValue}">`)
//     }
//     result.innerHTML = `Dados: ${dicesValue.join(", ")}`;
//     imageContainer.innerHTML = diceFaces.join("")
// }

/*
Random Password
*/

// function passGen(length = 10, low = true, upper = false, nums = false, symbols = false) {
//     const lowS = "abcdefghijklmnopqrstuvwxyz";
//     const upperS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numsS = "0123456789";
//     const symbolsS = "!@#$%^&*()_+-=";

//     let tempPass = "";
//     let password = "";

//     tempPass += low ? lowS : "";
//     tempPass += upper ? upperS : "";
//     tempPass += nums ? numsS : "";
//     tempPass += symbols ? symbolsS : "";

//     if (length <= 0) {
//         console.log("O tamanho deve ser maior ou igual a 1");
//     } else if (tempPass.length === 0) {
//         console.log("Tem que ter pelo menos um tipo de chat selecionado");
//     } else {
//         for (let i = 0; i < length; i++) {
//             const randomChar = Math.floor(Math.random() * tempPass.length);
//             const char = tempPass[randomChar];
//             password += char;
//         }
//     }

//     return password;
// }

// console.log(passGen(10, true, true, true, true))

/*
Callbacks
 */

// function hello(callback) {
//     console.log("slk mermao eae mano");
//     callback();
// }

// function bye() {
//     console.log("olha a hora maluco, flw ae");
// }

// hello(bye);

/*
 forEach 
 */

// function print(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// }

// const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// myArray.forEach(print);

/*
map
*/

// const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// function double(value, index, array) {
//     return (array[index] = value * 2);
// }

// let doubles = myArray.map(double);

/**
 * filter
 */

// const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// function isEven(element) {
//         return element % 2 === 0;
//     }

//     const noon = myArray.filter(isEven);

/**
 * reduce
 */

// const myArray = [1, 2, 3, 4, 4, 5, 8, 6, 6, 7, 7];

// const total = myArray.reduce((a,b) => a + b, 0);

// const max = myArray.reduce((a,b) => Math.max(a,b), 0)

/**
 * Objects
 */

// const person = {
//     name: "Aroldo",
//     lastName: "Jorge",
//     age: 86,
//     isEmployed: false,
//     funFact: "Aroldo ama Aroldo Jorge (É ele mesmo))",
//     saySomething: (thing = "aha") => {
//         console.log(`OIiiiiii eu sou o Aroldo Jorge, ${thing}`);
//     },
//     saySomethingThis: function (thing = "aha") {
//         console.log(
//             `OIiiiiii eu sou o ${this.name} ${this.lastName}, ${thing}`
//         ); // This só funciona com a palavra function e não com arrow functions
//     },
// };

// person.saySomething(":OOOO");
// person.saySomethingThis(":OOOOOO");

// Construtores

// function car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// const camaro = new car('Chevrolet', 'Camaro', 2000, 'yellow');

/**
 * Classes
 */

// class Product {
//     constructor(name = "", price = 10, kg = 1) {
//         this.name = name;
//         this.price = price * kg;
//         this.kg = kg;
//     }

//     buy(money) {
//         if (money >= this.price) {
//             window.alert(
//                 `Você comprou ${this.name} por R$${this.price.toFixed(
//                     2
//                 )}, você deu R$${money.toFixed(2)}, recebendo assim, R$${(
//                     money - this.price
//                 ).toFixed(2)} de troco`
//             );
//         } else {
//             window.alert("Você não tem dinheiro para isso.");
//         }
//     }
// }

// const bestSword = new Product("Best Sword", 1000, 10);

/**
 * Static
 */

// class CircleUtil {
//     static PI = Math.PI;

//     static diameter(radius) {
//         return radius * 2;
//     }

//     static circumference(radius) {
//         return Number((2 * this.PI * radius).toFixed(2));
//     }

//     static area(radius) {
//         return Number((this.PI * radius ** 2).toFixed(2));
//     }
// }

/**
 * Inheritance
 */

// class Animal {
//     alive = true;

//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

// class Fish extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

/**
 * Getters and setters
 */

// class rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }

//     set width(width) {
//         if (width > 0) {
//             this._width = width;
//         } else {
//             console.error("Tem que ser maior que 0 né maluco");
//         }
//     }

//     set height(height) {
//         if (height > 0) {
//             this._height = height;
//         } else {
//             console.error("Tem que ser maior que 0 né maluco");
//         }
//     }
//     get width() {
//         return this._width;
//     }

//     get height() {
//         return this._height;
//     }
// }

/**
 * sorting
 */

// let nums = [40, 100, 1, 5, 25, 10, 40, 100, 1, 5, 25, 10, 40, 100, 1, 5, 25, 10, 40, 100, 1, 5, 25, 10,];

// nums.sort((a, b) => 0.5 - Math.random());

// console.log(nums);

// shuffle(nums);

// console.log(nums);

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const rand = Math.floor(Math.random() * (i + 1));

//         [array[i], array[rand]] = [array[rand], array[i]];
//     }
// }

/**
 * Date !!!
 */

// const date1 = new Date();
// const date2 = new Date(2023, 2, 12, 9, 34, 10, 100);

// const difference = date1 - date2;

// console.log(difference / 1000 / 60 / 60 / 24)

/**
 * Closures
 */

// function outer() {
//     let message = "Hello";
//     function inner() {
//         message += " World!";
//         console.log(message);
//     }
//     inner();
// }

// function counterCreate() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     return { increment: increment };
// }

// const counter = new counterCreate();
// const counter2 = new counterCreate();

/**
 * Set Timeout
 */

// let timeID;

// function startTimer() {
//     console.info('Timer iniciado')
//     timeID = setTimeout(() => {
//         window.alert("Slk");
//     }, 3000);
// }

// function stopTimer() {
//     console.info('Timer cancelado')
//     clearTimeout(timeID);
// }

/**
 * console time
 */

// console.time("Inicio");
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }
// console.timeEnd("Inicio");

/**
 * Currency
 */

// let dindin = 19292929.98

// dindin = dindin.toLocaleString(undefined, {style: 'currency', currency: 'BRL'})

/**
 * juros compostos
 */

// function calc() {
//     const invest = document.getElementById("invest");
//     const rate = document.getElementById("rate");
//     const years = document.getElementById("years");
//     const result = document.getElementById("result");

//     // values
//     let investValue = Number(invest.value);
//     let rateValue = Number(rate.value) / 100;
//     let yearsValue = Number(years.value);

//     if (investValue < 0 || isNaN(investValue)) {
//         investValue = 0;
//         invest.value = 0;
//     }
//     if (rateValue < 0 || isNaN(rateValue)) {
//         rateValue = 0;
//         rate.value = 0;
//     }
//     if (yearsValue < 0 || isNaN(yearsValue)) {
//         yearsValue = 0;
//         years.value = 0;
//     }

//     const amount = investValue * Math.pow(1 + rateValue / 1, 1 * yearsValue);
//     result.innerHTML = `Total: <span>${amount.toLocaleString(undefined, {
//         style: "currency",
//         currency: "BRL",
//     })}</span>`;
// }

/**
 * relógio
 */

// function clock() {
//     const date = new Date();
//     let hours = date.getHours().toString().padStart(2, 0);
//     let minutes = date.getMinutes().toString().padStart(2, 0);
//     let seconds = date.getSeconds().toString().padStart(2, 0);
//     const time = `${hours}:${minutes}:${seconds}`
//     document.getElementById('clock').innerHTML = `<span>${time}</span>`
// }

// clock()

// setInterval(clock, 500)

/**
 * Cronômetro
 */

// const clock = document.getElementById("clock");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");
// let timer;
// let startTime;
// let elapsed = 0;

// function start() {
// 	startTime = Date.now() - elapsed;
// 	timer = setInterval(update, 10);
// 	startBtn.disabled = true;
// 	stopBtn.disabled = false;
// 	resetBtn.disabled = false;
// }

// function stop() {
// 	clearInterval(timer);
// 	elapsed = Date.now() - startTime;
// 	startBtn.disabled = false;
// 	stopBtn.disabled = true;
// 	resetBtn.disabled = false;
// }

// function reset() {
//     clearInterval(timer);
// 	elapsed = 0;
// 	startTime = 0;
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
// 	resetBtn.disabled = true;
//     clock.innerHTML = `00:00:00:00`;
// }

// function update() {
// 	const current = Date.now();
// 	elapsed = current - startTime;
// 	let milli = Math.floor((elapsed % 1000) / 10);
// 	milli = String(milli).padStart(2, 0);
// 	let secs = Math.floor((elapsed / 1000) % 60);
// 	secs = String(secs).padStart(2, 0);
// 	let minutes = Math.floor((elapsed / (1000 * 60))  % 60);
// 	minutes = String(minutes).padStart(2, 0);
// 	let hours = Math.floor(elapsed / (1000 * 60 * 60));
// 	hours = String(hours).padStart(2, 0);
// 	clock.innerHTML = `${hours}:${minutes}:${secs}:${milli}`;
// }

/**
 * modules
 */

// import {PI, circumference} from "./utils.js";


// console.log(circumference(1000000).toLocaleString(undefined))

/**
 * 
 */