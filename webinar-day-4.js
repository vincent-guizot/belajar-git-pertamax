// Function

function jumlah(x, y) {
  var tambah = x + y;
  return tambah;
}

// console.log(jumlah(5,2))
function cekGanjilGenap(num) {
  if (num % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
// console.log(cekGanjilGenap(2));
// console.log(cekGanjilGenap(5));

/** Study Case 1
 * Buatlah sebuah function untuk mengecek berapa jumlah faktor dari sebuah bilangan
 * Contoh:
 * function cekFaktor(num){
 *  // code here
 * }
 *
 * Jika num = 10
 * Result:
 * 1
 * 2
 * 5
 * 10
 * Jumlah faktor = 4
 */

function cekFaktor(num) {
  var faktor = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      faktor++;
      // console.log(i)
    }
  }
  return faktor;
}

// console.log("Jumlah faktor: ", cekFaktor(10));

/** Study Case 2
 * Buatlah sebuah function untuk cek apakah sebuah bilangan adalah bilangan Prima
 * Contoh:
 * function cekPrima(num){
 *  // code here
 * }
 *
 * Jika num = 17
 * Result: Bilangan Prima
 *
 * Jika num = 10
 * Result: Bukan bIlnagna Prima
 */

function cekPrima(num) {
  let faktor = cekFaktor(num);
  if (faktor === 2) {
    return "Bilangan Prima";
  } else {
    return "Bukan Bilangan Prima";
  }
}

// console.log(cekPrima(5));

/**
 * Study Case 3
 * Buatlah sebuah calculator sederhana;
 * Contoh:
 * simpleCalculator(5,'+',2) // 7
 * simpleCalculator(7,'-',2) // 5
 */

function jumlah(x, y) {
  var tambah = x + y;
  return tambah;
}

function kurang(x, y) {
  var selisih = x - y;
  return selisih;
}

function kali(x, y) {
  var perkalian = x * y;
  return perkalian;
}

function bagi(x, y) {
  var pembagian = x / y;
  return pembagian;
}

function mod(x, y) {
  var modulus = x % y;
  return modulus;
}

function simpleCalculator(x, opr, y) {
  switch (opr) {
    case "+":
      return jumlah(x, y);
    case "-":
      return kurang(x, y);
    case "*":
      return perkalian(x, y);
    case "/":
      return pembagian(x, y);
    case "%":
      return mod(x, y);
  }
}

// console.log(simpleCalculator(5,"+",2))
// console.log(simpleCalculator(7,'-',2))

// Object

var caca = {
  name: "Caca",
  weight: 45,
  height: 155,
  hobbies: ["nonton", "makan"],

  sebutkanHobby: function () {
    console.log("Hobby Caca: ");
    for (var i = 0; i < this.hobbies.length; i++) {
      console.log(i + 1 + ". " + this.hobbies[i]);
    }
  },
};

// caca.sebutkanHobby();
/**
 * Hobby Caca:
 * 1. nonton
 * 2. makan
 */


var vehicle = {
    name: "Civic All new",
    type: "sedan",
    price: 150000000,
    tags: ['lcgc'],
    engine: true,

    describeVehicle: function(){
        console.log(this.name + ", Type: " + this.type + ", Rp. "+ this.price)
    },
    startEngine: function(){
        this.engine = true;
        console.log("Engine is true.")
    },
    stopEngine: function(){
        this.engine = false;
        console.log("Engine is false")
    }

}

// vehicle.describeVehicle()
// console.log(vehicle);
// vehicle.stopEngine()
// console.log(vehicle)
// vehicle.startEngine()
// console.log(vehicle)

// Study Case 1
/** 
 * Buatlah sebuah function utnuk menghitung voting:
 * var votes = [
 *      "vincent","ncent","admin","vincent","admin","vincent"
 * ]
 * 
 * Result: 
 * {
 *      vincent: 3,
 *      ncent: 1,
 *      admin:1
 * }
 * 
 * */

function countVote(arr){
    var result = {
        vincent: 0,
        ncent:0,
        admin:0
    }

    for(var i = 0; i <arr.length; i++){
        if(arr[i] === "vincent") result.vincent++;
        else if(arr[i] === "ncent") result.ncent++;
        else if(arr[i] === "admin") result.admin++;
    }
    
    return result
}

console.log(countVote(["vincent",'ncent','admin','vincent','admin','vincent']))