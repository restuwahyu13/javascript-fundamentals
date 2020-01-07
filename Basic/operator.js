// berikut adalah contoh tipe operator pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

//OPERATOR ARITMATIKA
var a = 2 + 2; // 4
var b = 4 - 2; // 2
var c = 5 * 5; // 25
var d = 20 / 4; // 5
var e = 10 % 2; // 0
var f = a++ || --x // 4
var g = ++a || --a // 5

//OPERATOR PENUGASAN
a += 5;
b *= 2;
c -= 5;
d /= 1;
e %= 1;

//OPERATOR PERBANDINGAN
a < 6  // dimulai dari angka 5 sebelumnya (apakah A itu lebih kecil dari 6) = false
a <= 6 // dimulai dari angka 6 (apakah A itu lebih kecil sama dengan dari 6) = false
b > 4 // dimulai dari angka 5 atau selanjutnya (apakah B itu lebih besar dari 4) = true
b >= 4 // dimulai dari angka 4 (apakah B itu lebih besar sama dengan dari 4) = true

//strict mode
var tesOne = a === 4;
var tesTwo = a !== 2;

//non strict mode
var tesOne = a == 4;
var tesTwo = a !== 2;

//OPERATOR LOGIKA
//&& / END : jika operasi  bilangan keduanya benar maka bernilai true dan jika salah satu bilangannya ada yang salah maka false
//|| / OR: jika operasi bilangan keduanya true maka bernilai true dan jika salah satu bilangannya ada yang salah maka true
// ! / NOT : jika sebuah bilangan itu true maka akan menjadi false dan jika sebuah bilangan itu false maka akan menjadi true

const a = 50;
const b = 20;
const c = a && b <= 100;

const a = 20;
const b = 1;
const c = a > 10 || b > 10;

const a = 10 * 10;
const b = !a === 100;

//TERNARY OPERATOR (SHORT HAND dari IF STATEMENT)
(10 * 10 === 1000) ? true : false;