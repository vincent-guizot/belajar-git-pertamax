// ES6

/**
 * Study Case 1
 * Buatlah sebuah function untuk cek bilangan ganjil genap.
 *
 */

// ES5
function cekGanjilGenap(num) {
  if (num % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
// console.log(cekGanjilGenap(5))

// ES6
const cekGenapGanjil = (num) => (num % 2 === 0 ? "genap" : "ganjil");
// console.log(cekGenapGanjil(3));

/**
 * Study Case 2
 * Jabarkan sebuah kalimat menjadi array.
 * Contoh:
 * let str = "work life balance";
 *
 * Result: ["work","life","balance"]
 */

// ES5
function formatStr(str) {
  let temp = "";
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      temp += str[i];
    } else {
      tempArr.push(temp);
      temp = "";
    }
    if (i === str.length - 1) {
      tempArr.push(temp);
    }
  }
  return tempArr;
}
// console.log(formatStr("work life balance"))

// ES6

const stringFormat = (str) => str.split(" ");
// console.log(stringFormat("work life balance"))

// Template Literal

let kata1 = "saya";
let kata2 = "sudah";
let kata3 = "makan";

//  Result : "saya sudah makan";

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3)

// ES6
// console.log(`${kata1} ${kata2} ${kata3}`)

// High Order Destructuring

// Study Case 3

/**
 * Diberikan sebuah array:
 * let scores = [3,2,5,7,1]
 * Buatlah 3 buah function untuk:
 * a. Untuk membuat tiap isi dari array di pangkatkan 2
 * Result: [9,4,25,49,1]
 * b. Untuk memfilter isi dari array lebih dari sama dengan 5
 * Result: [9,25,49]
 * c. Untuk menampilkan semua isi nya
 * 9
 * 25
 * 49
 */

// ES5
function powerTwo(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i] ** 2);
  }
  return temp;
}
function filterFive(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
function printScores(arr) {
  let pangkat2 = powerTwo(arr);
  let filter5 = filterFive(pangkat2);
  for (let i = 0; i < filter5.length; i++) {
    console.log(filter5[i]);
  }
}
printScores([3, 2, 5, 7, 1]);

// ES6
let scores = [3,2,5,7,1]

scores.map(score => score **2).filter(score => score>= 5).forEach(score => console.log(score))