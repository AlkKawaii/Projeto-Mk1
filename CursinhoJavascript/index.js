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

class Product {
    constructor(name = '', price, kg = 1) {
        this.name = name;
        this.price = price * kg;
        this.kg = kg;
    }
}
