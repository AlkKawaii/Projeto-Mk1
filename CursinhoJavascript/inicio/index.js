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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maximum = Math.max(...numbers)

// console.log(maximum)

// const slkmermao = (...sim) => {
//     console.log(sim)
// }

// slkmermao(2, 3, 'sim')

function rollDices() {
    const dicesNum = Number(document.getElementById("input").value);
    const result = document.getElementById("result");
    const imageContainer = document.getElementById("imagesContainer");
    let dicesValue = [];
    let diceFaces = [];
    for (let i = 0; i < dicesNum; i++) {
        const diceValue = Math.floor(Math.random() * 6 + 1);
        dicesValue.push(diceValue);
        diceFaces.push(`<img src="diceFaces/Alea_${diceValue}.png" alt="dice face ${diceValue}">`)
    }
    result.innerHTML = `Dados: ${dicesValue.join(", ")}`;
    imageContainer.innerHTML = diceFaces.join("")
}
