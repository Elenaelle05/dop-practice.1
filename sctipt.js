// напиши функцию , которая принимает массив чисел и возвращает найибольшее парное число с этого массива.Если
// такого числа нет ,возращает 0

// const numbers = [3, 7, 12, 5, 9, 10, 15];

// const getMaxNumber = function (arr) {
//   let maxNumber = 0;
//   for (const item of arr) {
//     if (item % 2 === 0 && item > maxNumber) {
//       maxNumber = item;
//     }
//     console.log(item);
//   }
// return maxNumber;
// };
// console.log(getMaxNumber(numbers));
// console.log(getMaxNumber([3, 11, 55, 43, 17]));

// напиши функцию ,которая принимает массив сток (слов), т возвращает новый массив ,который состоит только из тех слов
// которые име.т непарное кол-во букв

// const words = ["яблоко", "банан","апельсин","персик","слива"];

// console.log(getSelectedWords(words));
// function getSelectedWords(arr){
//     const selectedWords = [];
//     for(const fruit of arr){
//         if(fruit.length % 2 !== 0) {
//             selectedWords.push(fruit);
//         }
//     }
//     return selectedWords;

//     console.log(arr);

// }

// напиши функцию,которая принимает строку (например,текст сообщения или фразу) и возращает
// true ,если строка имеет как минимум 3 слова начинающиеся с буквы "б" ,и false в другом случае

// const text = "Багато буряну бiля будинку.";

// function returnLetter(str, letter) {
//   const arr = str.split(" ");
//   let counter= 0;

//   for (const word of arr) {
//     if (word.toLowerCase().startsWith(letter.toLowerCase())) {
//      counter ++;
//      if( counter >= 3){
//        return true;
//     }
//   }
// }
// return false;

// }

// console.log(returnLetter(text, "б"));

// написать функцию,которая будет удалять из массива все значения ,которые  приводяться к false
// underfined, null, 0 ,"", false, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// console.log(clear(array));

// function clear(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!arr[i]) {
//       console.log(arr[i]);
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };



// создай функцию ,которая принимает  строку и изменяет порядок слов в массиве и объеденяет их создавая новую строку

// const text = 'Это задание для проверки навыков.';


// function reverse(str){
//     return str.split(" ").reverse().join()
// }
// console.log(reverse(text));



// создай функцию ,которая принимает строку и меняет регистр букв таким образом что,мальнькие становятся большими
// а больние маленькими 

// const word = "Hello World";

// function changeRegister(str){
//     let resultStr = ''
// for(const letter of str) {
//      resultStr +=
//       letter.toLowerCase()===letter
//        ? letter.toUpperCase()
//        :letter.toLowerCase() 
//     }
// return resultStr
// }
// console.log(changeRegister(word))


// создай функцию которая будет принимать два парамметра
// 1 массив студентов
// 2 язык программирования который нужно знать 
// функция возвращает массив имен пользователей которые изучают этот язык

// const students =[{
//     name: `Den`,
//     language: `html`
// },{
//     name: `Petro`,
//     language: `css`
// },
// {
//     name: `Egor`,
//     language: `js`
// },
// {
//     name: `Max`,
//     language: `html`
// },
// {
//     name: `Olga`,
//     language: `css`
// },
// {
//     name: `Kate`,
//     language: `js`
// },
// {
//     name: `Ivan`,
//     language: `html`
// },
// ];


// const getUsers = (arr, lang) => {
//     return arr
//       .filter(({ language }) => language === lang)
//       .map(({ name }) => name);
//   };
  
//   console.log(getUsers(students, 'js'));




// пример 1 - введения пользователя и условия 
// используя конструкцию if...else и prompt, напишите код,который будет спрашивать
// "Какое официальное название JavaScript?".Если пользователь вводит ECMAScript, то показывай сообзение "Правильно",
//  в другом случае "Не знаете!ECMAScript?"

// prompt("Какое официальное название JavaScript?");
// let answer = "";
// if(answer === "ECMAScript".toLowerCase()) {
//     prompt("Правильно")
// }else{
//     prompt("Не знаете!?ECMAScript!")
// }
// console.log(prompt);



// let answer = prompt("Какое официальное название JavaScript?");

// if (answer && answer.toLowerCase() === "ecmascript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаете!? ECMAScript!");
// }


// пример 2 -отображение времени 
// напишите скрипт для отображения часов и минут в консоле браузера в виде строки формата "14 год. 26 хв."
// Если значение переменной minutes равно 0 ,то выводите строку "14 год.", без минут 

// const hours = 14;
// const minutes = 26;
// let timestring = `${hours} год. ${minutes} хв.`;

// console.log(timestring);