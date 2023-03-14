// var number = 10;
// var number1 = 5;

// var total = number * number1;

// console.log(number);
// console.log(number1);
// console.log(total);
// null = isi kosong

// Operasi Math = +, -, /, *, %

// % -> Modulus = Sisa bagi
// 7/3 = 2 sisa 1       => 7 % 3 = 1
// 12 / 5 = 2 sisa 2    => 12 % 5 = 2

// Study case 1
// Hari apa 100 hari dari sekarang.
// Hari ini adalah Selasa.
// 100 % 7 = 2
// Kesimpulan, 100 hari dari sekarang adalah hari Kamis.

var kata1 = "makan";
var kata2 = "malam";
var kata3 = "enak";

// Result: "makan malam enak"

var result = kata1 + " " + kata2 + " " + kata3;
// console.log(result);

var x = 10;
var y = "abc";
// typeof = utk cek tipe / jenis data
// NaN = Not a Number

var total = x - y;
// console.log(typeof total);

// CONDITIONAL

// var number = 1;

// if(number === "1"){
//     console.log("Number is 1");
// } else {
//     console.log("Number is not 1")
// }

// Study case 2
// Cek apakah bilangan ganjil atau genap.
// Genap => habis dibagi 2 atau number % 2 === 0
// Ganjil => tidak habis di bagi 2 atau number % 2 === 1

var number = 5;

if(number % 2 === 0){
    console.log("Angka genap")
} else {
    console.log("Angka ganjil")
}