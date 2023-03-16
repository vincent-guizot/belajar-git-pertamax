// Looping
// var num = 10;

// for (var i = 1; i <= num; i++) {
//   console.log(i);
//   console.log("Hello World")
// }

var i = 0;
// while(i < num){
// console.log(i);
// console.log("Hello World.")
// i++
// }

// Study Case 1
/**
 * Buatlah coding untuk mencetak 10 angka pertama ganjil dan genap.
 * Result:
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 * .
 * .
 * 10 adalah genap
 */

// var number = 10;
// for(var i = 1; i < number; i++){
//     if(i % 2 === 0){
//         console.log(i + " adalah Genap")
//     } else {
//         console.log(i + " adalah Ganjil")
//     }
// }

// Study Case 2
// var string = "makan malam";
// Result : MaKaN MaLaM;

// var temp = "";
// for (var i = 0; i < string.length; i++) {
//   if (i % 2 === 0) {
//     temp += string[i].toUpperCase();
//     // console.log(string[i].toUpperCase())
//   } else {
//     temp += string[i];
//     // console.log(string[i])
//   }
// }
// console.log(temp);

// Study Case 3
/**
 * Result:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

// var n = 5;
// var temp = ""
// for(var i = 0; i < n; i++){
//     for(var j= 0; j <= i; j++){
//         temp += j+1
//     }
//     console.log(temp);
//     temp = ""
// }

// Array
 var murid = [
      [1, "Vincent", 3.5],
      [2, "Udin", 3.0],
      [3, "Mamang", 2.1]
]

for(var i = 0; i< murid.length; i++){
    if(murid[i][2] >= 3.0){
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK: " + murid[i][2] + ", Lulus")
    } else {
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK: "+ murid[i][2]+", Tidak Lulus")
        
    }
}


var numbers = [1, 2, 3, 4, 5];

numbers.push(6, 7, 8, 9, 10);
numbers.pop();
numbers.unshift(0);
numbers.shift();
// console.log(numbers)
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// var scores = [
//   [10, 15, 30],
//   [1, 3, 5],
//   [2, 4, 6],
// ];

// for(var i = 0; i < scores.length; i++){
//     for(var j = 0; j< scores[i].length; j++){

//         console.log(scores[i][j])
//     }
// }
// console.log(scores);

// var i = 0;
// var j = 0;
// while (i < scores.length) {
//     j=0
//   while (j < scores[i].length) {
//     console.log(scores[i][j]);
//     j++;
//   }
//   i++;
// }
