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


