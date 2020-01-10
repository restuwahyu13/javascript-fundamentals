// berikut adalah contoh pengunaan variable pada JavaScript yang bisa digunakan 
//dan tidak boleh mengunakan kata reserved keywords contoh this, break, continue, if, for, while dll


//var adalah sebuah pengunaan variable yang bersifat global tetapi tidak bersifat readonly, yang berarti kita bisa 
//mengakses variable dari block scope mana saja dan bisa membuat variable dengan nama yang sama.

var x = 10;
var z;
z = 10;
var a,b,c;
a = 10;
b = 20;
c = 30

//let adalah sebuah pengunaan variable yang bersifat lokal, yang berarti kita hanya bisa mengakses variable tersebut dari block scope tertentu
//tetapi let tidak bersifat readonly dan kita tidak bisa mendekelarasikan ulang dengan nama variable yang sama dan hanya boleh 1 kali pengunaan 

let x = 10;
let z;
z = 10;
let a,b,c;
a = 10;
b = 20;
c = 30

//const adalah sebuah pengunaan variable yang bersifat lokal, yang berarti kita hanya bisa mengakses variable tersebut dari block scope tertentu,
//const juga bersifat readonly dimana kita tidak bisa mendekelarasikan ulang nama variable yang sama dan hanya boleh 1 kali pengunaan.

const x = 10;


//berikut adalah contoh penamaan nama variable yang benar

var first_name = 'Restu Wahyu Saputra'
var firstName = 'Restu Wahyu Saputra'

//berikut adalah contoh penamaan nama variable yang salah

var first name = 'Restu Wahyu Saputra'
