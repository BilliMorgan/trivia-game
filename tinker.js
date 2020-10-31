// const shuffleArray = (array) => {
//   let currentIndex = array.length,
//     temporaryValue,
//     randomIndex;
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// };

// let arr = [
//   {
//     question: "What was Tandem previous name?",
//     incorrect: ["Tandem", "Burger Shack", "Extraordinary Humans"],
//     correct: "Devmynd",
//   },
// ];
// let x = arr[0]["incorrect"];
// console.log(x);
// let y = arr[0]['correct'];
// console.log(y);
// x.push(y);
// console.log(x);

// // console.log(shuffleArray(arr))




// function getRandomInt(max, arr) {

//   return Math.floor(Math.random() * max) + 1;
// }

// function generateRandom(min, max, failOn) {
//   let y = max - 1
//   failOn = Array.isArray(failOn) ? failOn : [failOn];
//   let num = Math.floor(Math.random() * (y - min + 1)) + min;
//   return failOn.includes(num) ? generateRandom(min, max, failOn) : num;
// }

// console.log(generateRandom(0, 3, [1]))
