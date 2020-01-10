## JAVASCRIPT FUNDAMENTAL EXAMPLE

### 1.VARIABLE 

`Variable` adalah sebuah metode dimana kita bisa memberikan nama pada sebuah nilai yang akan kita tentukan, berikut adalah contoh cara pengunaan variable pada `JavaScript` yang bisa digunakan, dan tidak boleh mengunakan kata reserved keywords contoh seperti `this`,`break`,`continue`,`if`,` for`,`while` dan lain - lain.

* `VAR` adalah sebuah pengunaan variable yang bersifat global tetapi tidak bersifat readonly, yang berarti kita bisa mengakses variable dari block scope mana saja dan bisa membuat variable dengan nama yang sama, berikut adalah perbedaanya.

```javascript
var name = 'John Doe';
var name = 'Jane Doe';
var age;
age = 23;
age = 24

function varData() {
  
   var fakOne = 'Tehnik Informatika';
  
   if(fakOne === 'Tehnik Informatika') {
     
       var fakTwo = 'Tehnik Informatika'
        
   }else{
     
      console.log('Tehnik Industri');
   }
  
    return fakTwo;
}

var result = `Nama: ${name}\nUmur: ${age}\nFakultas: ${varData()}`;

console.log(result);
```

* `LET` adalah sebuah pengunaan variable yang bersifat lokal, yang berarti kita hanya bisa mengakses variable tersebut dari block scope tertentu tetapi, `let` juga bersifat readonly dimana kita tidak bisa melakukan `Overloading` terhadap variable dengan nama yang sama dan hanya boleh 1 kali pengunaan, tetapi bisa menuliskan nama varibale terlebih dahulu lalu diikuti dengan nilainya, berikut adalah perbedaanya.

```javascript
// hapus duplicate nama dan umur lihat perbedaannya

let name = 'John Doe';
let name = 'Jane Doe';
let age;
age = 23;
age = 24

function letData() {
  
   let fakOne = 'Tehnik Informatika';
  
   if(fakOne === 'Tehnik Informatika') {
     
       let fakTwo = 'Tehnik Informatika'
        
   }else{
     
      console.log('Tehnik Industri');
   }
  
    return fakTwo;
}

let result = `Nama: ${name}\nUmur: ${age}\nFakultas: ${letData()}`;

console.log(result);
```

* `CONST` adalah sebuah pengunaan variable yang bersifat lokal, yang berarti kita hanya bisa mengakses variable tersebut dari block scope tertentu `const` juga bersifat readonly dimana kita tidak bisa melakukan `Overloading` terhadap variable dengan nama yang sama dan hanya boleh 1 kali pengunaan, berikut adalah perbedaanya.

```javascript
// hapus duplicate nama dan umur lihat perbedaannya

const name = 'John Doe';
const name = 'Jane Doe';
const age;
age = 23;
age = 24

function letData() {
  
   const fakOne = 'Tehnik Informatika';
  
   if(fakOne === 'Tehnik Informatika') {
     
       const fakTwo = 'Tehnik Informatika'
        
   }else{
     
      console.log('Tehnik Industri');
   }
  
    return fakTwo;
}

const result = `Nama: ${name}\nUmur: ${age}\nFakultas: ${letData()}`;

console.log(result);
```

##### PENULISAN VARIABLE

**VAR**

```javascript
var x = 10;
var z;
z = 10;
var a,b,c;
a = 10;
b = 20;
c = 30
```
**LET**

```javascript
let x = 10;
let z;
z = 10;
let a,b,c;
a = 10;
b = 20;
c = 30
```
**CONST**

```javascript
const x = 10;
```

##### PENULISAN NAMA VARIBALE

```javascript
// berikut adalah contoh penamaan nama variable yang benar

var first_name = 'John Doe'
var firstName = 'John Doe'

// berikut adalah contoh penamaan nama variable yang salah
var first name = 'John Doe'
var 123Name = 'Joh Doe'
````

### 2.TIPE DATA

`Tipe Data` adalah sebuah metode yang digunakan untuk mendefinisikan sebuah nilai sesuai dengan jenis tipe datanya, berikut adalah beberapa contoh tipe data yang boleh digunakan pada `JavaScript`, tipe data tersebut termasuk dalam tipe data `Primitive `dan `Object`, dan tipe data tersebut yang nantinya akan sering sekali digunakan.

**Tipe Data Primitive**
1. `String = 'Hello Wordl'`
2. `Number = 2020`
3. `Boolean = true or false`
4. `Null = 0`
5. `Undefinded = ''`

**Tipe Data Object**
1. `Function = func()`
2. `Array = []`
3. `Object = {}`

**TYPE DATA PRIMITIVE**

```javascript
var name = 'john doe';
var age = 23
var person = [1,2,3,4,5];
var profile = {name: 'john doe', age: 23}
var benar = (profile.name === 'john doe') ? true : false;
```

**TYPE DATA OBJECT**

```javascript
var func = () => { console.log('john doe') }
var person = { name: 'john doe'}
var angka = [1,2,3,4,5]
```
### 3.OPERATOR

`Operator` adalah sebuah metode yang digunakan untuk melakukan sebuah bilangan operasi tertentu pada suatu nilai, berikut adalah beberapa contoh operator pada `JavaScript` yang bisa digunakan, berikut adalah contoh pengunaanya:

**OPERATOR ARITMATIKA**

```javascript
var a = 2 + 2; 
var b = 4 - 2; 
var c = 5 * 5; 
var d = 20 / 4; 
var e = 10 % 2; 
var f = a++ or --a
var g = ++a or --a
```
**OPERATOR PENUGASAN**

```javascript
var a = 4;
var b = 2; 
var c = 25; 
var d = 5; 
var e = 0; 

var a += 5;
var b *= 2;
var c -= 5;
var d /= 1;
var e %= 1;
```
**OPERATOR PERBANDINGAN**

```javascript
var a = 9;
var b = 4; 
var c = 20; 
var d = 1; 
var e = 0;

var a < 6  // dimulai dari angka 5 sebelumnya (apakah A itu lebih kecil dari 6) = false
var a <= 6 // dimulai dari angka 6 (apakah A itu lebih kecil sama dengan dari 6) = false
var b > 4 // dimulai dari angka 5 atau selanjutnya (apakah B itu lebih besar dari 4) = true
var b >= 4 // dimulai dari angka 4 (apakah B itu lebih besar sama dengan dari 4) = true
```

```javascript
var a = 4;
var b = 8
//strict mode one
var tesOne = a === 4;
var tesTwo = a !== 2;

//strict mode two
var tesOne = null === undefined;
var tesTwo = null == undefined;

//non strict mode
var tesOne = a == 8;
var tesTwo = a != 8;
```
**OPERATOR LOGIKA**

* `&& / END` : Jika operasi bilangan itu keduanya benar maka bernilai true dan jika salah satu bilangannya itu ada yang salah maka bernilai false

* `|| / OR`: Jika operasi bilangan itu keduanya true maka bernilai true dan jika salah satu bilangannya itu ada yang salah maka bernilai true

* ` ! / NOT` : Jika sebuah bilangan itu true maka akan menjadi false dan jika sebuah bilangan itu false maka akan menjadi true

```javascript
const a = 50;
const b = 20;
const c = a && b <= 100;

const a = 20;
const b = 1;
const c = a > 10 || b > 10;

const a = 10 * 10;
const b = !a === 100;
````

### 4.PERCABANGAN

`percabangan` adalah sebuah metode yang digunakan untuk menentukan sebuah kondisi pada sebuah nilai, baik itu dalam keadaan benar ataupun salah, berikut adalah contoh beberapa jenis percabangan (pengondisian) pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**IF STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'john') alert(true);

else alert (false);
```
```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'john') {
  
   alert(true)
   
}else{
  
   alert(false)
}
```
**IF ELSE STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'john') {
  
   alert(true)
  
}else if(alertbox === 'doe') {
  
   alert(true);
  
}else{
  
   alert(false)
}
```

**SWITCH STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

switch(alertbox) {
    
  case 'john doe':
    alert(true);
    break;
    
  case 'jane doe':
    alert(true);
    break;
	
  case 'mr x':
    alert(true);
    break;
    
  default:
    alert(false);
}
```

**PERCABANGAN BERSARANG**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'john doe') {
  
    alert(true);
     
}else{
  
   if(alertbox == 'mr x') {
     
       alert(true); 
     
   }else{
     
      if(alertbox === 'jane doe') {
        
        alert (true);
        
      }else {
        
         alert (false);
      }
   }
}
```

**SWITCH BERSARANG**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

switch(alertbox) {
    
  case 'john doe':
  case 'jane doe':
  case 'mr x':
    
    alert(true);
    break;

  default:
    
    alert(false);
}
```

### 4.PERULANGAN

`Perulangan` adalah sebuah metode yang digunakan untuk mengulang sebuah nilai secara berulang - ulang, sesuai dengan ketentuan yang telah ditentukan, berikut adalah contoh pengunaan perulangan pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**PERULANGAN FOR**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

for(let i = 0; i < days.length; i++) {
  
   console.log(days[i]);
}
```

**PERULANGAN WHILE**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];


let i = 0;
while(i < days.length) {
  
  console.log(days[i]);

  i++;
}
```

**PERULANGAN DO WHILE**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

let i = 0;    
do{
  
  console.log(days[i]);
  i++;
  
} while (i < days.length);
```

**PERULANGAN ARRAY ITERATOR**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

for(let i of days) {
  
   console.log(i);
}
```

**PERULANGAN ARRAY ITERATOR OBJECT**

```javascript
const person = [{name: 'john', fak: 'tehnik informatika'}, { name: 'jane', fak: 'sastra inggris' }]

for(let i in person) {
  
   console.log(person[i]);
}
```

### 6.ARRAY

`Array` adalah sebuah tipe data yang biasa digunakan untuk menampung / bekerja dengan banyak nilai dan untuk mengelola nilai tersebut kita bisa mengunakan perulangan baik itu `FOR`, `WHILE` dan `DO WHILE` atau yang lainnya, berikut adalah contoh pengunaan `Array` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**ARRAY REGULER**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

days[1];
```

***ARRAY CONSTRUCTOR***

```javascript
const days  = new Array(['senin','selasa','rabu','kamis','jumat','sabtu','minggu']);

days[0][1];
```

**ARRAY OBJECT**

```javascript
// cara mencetak sebuah array object bisa mengunakan 2 cara yaitu:
// person[0].name atau bisa mengunakan loop array iterator object untuk mengekstrak semua nilainya

const person = [{

	name: 'Restu Wahyu Saputra',
	age: 23,
	fak: 'Tehnik Informatika'
},

{
	name: 'Bagus Budiawan',
	age: 33,
	fak: 'Tehnik Informatika'
},

{
	name: 'Muhammad Ashari',
	age: 35,
	fak: 'Tehnik Informatika'
}];
````

### 7.OBJECT

`Object` adalah sebuah tipe data yang terdiri dari antara `Key` dan `Value`, `Object` juga biasa digunakan untuk menampung / bekerja dengan banyak data dan untuk mengelola data tersebut kita bisa mengunakan `ARRAY ITERATOR OBJECT`, `Map` atau `forEach` berikut adalah contoh pengunaan `Object` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**OBJECT REGULER**

```javascript
// cara mencetak sebuah object bisa mengunakan 2 cara yaitu:

const person = {

	name: 'Jonh Doe',
	age: 23,
	fak: 'Tehnik Informatika'
}

person.name  
person['name'];
```

***OBJECT CONSTRUCTOR***

```javascript
const person = new Object;

person.name = 'John doe'; 
person.age = 23;
person.fak = 'Tehnik Informatika';

person['name']: 'John Doe'; 
person['age'] = 23;
person['fak'] = 'Tehnik Informatika'
````

**OBJECT SPECIAL METHOD**

* `Object Assign`: adalah sebuah method yang biasa digunakan untuk menambahkan sebuah Object baru dari Object yang sudah ada.

* `Object Create`: adalah sebuah method yang biasa digunakan untuk membuat sebuah Object baru dari Object yang sudah ada.

* `Object Keys`: adalah sebuah method yang biasa digunakan untuk mengambil semua keys dari Object yang sudah ada.

* `Object Values`: adalah sebuah method yang biasa digunakan untuk mengambil semua value dari Object yang sudah ada.

* `Object Entries`: adalah sebuah method yang biasa digunakan untuk membuat sebuah keys dan value menjadi sebuah nilai Array


**OBJECT ASSIGN**

```javascript
const person = {

  name: 'Jonh Doe',
  age: 23,
  fak: 'Tehnik Informatika'
}

const result = Object.assign({prov: 'depok'}, person);

console.log(result);
````

**OBJECT CREATE**

```javascript
const person = {

  name: 'Jonh Doe',
  age: 23,
  fak: 'Tehnik Informatika'
}

console.log(person);


const newObject = Object.create(person);
newObject.name = 'Adung';
newObject.age = 25;
newObject.fak = 'Tehnik Elektro';
newObject.state = 'Jakarta';
newObject.country = 'Indonesia';

const result = newObject;

console.log(result);
````

**OBJECT KEYS**

```javascript
const person = {

  name: 'Jonh Doe',
  age: 23,
  fak: 'Tehnik Informatika'
}

const result = Object.keys(person);

console.log(result);
````

**OBJECT VALUES**

```javascript
const person = {

  name: 'Jonh Doe',
  age: 23,
  fak: 'Tehnik Informatika'
}

const result = Object.values(person);

console.log(result);
````

**OBJECT ENTRIES**

```javascript
const person = {

  name: 'Jonh Doe',
  age: 23,
  fak: 'Tehnik Informatika'
}


console.log(Object.entries(person));
````

### 8.FUNCTION

`Function` adalah sebuah metode dimana kita bisa membuat sebuah fungsi tersendiri, untuk masing - masing perintah yang telah kita tentukan, contoh yang paling umum adalah ketika kita ingin membuat sebuah fungsi dari masing - masing operasi pada `MySQL`, berikut adalah contoh pengunaan `Function` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**REGULAR FUNCTION**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

function allDaysReg() {
  
   for(let i of days) {
     
     console.log(i)
   }
  
}

//init function
allDaysReg();
```

**EXPRESSION FUNCTION**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

const allDaysExp = function() {

	 for(let i of days) {
     
     console.log(i)
   }

}

//init function
allDaysExp();
```

**INVOKED FUNCTION**

```javascript
(function () {
 
 const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
  
   for(let i of days) {
     
     console.log(i)
   }
  
}());
```

**ARROW FUNCTION**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

const allDaysArrw = () => {

	 for(let i of days) {
     
     console.log(i)
   }

}

//init function
allDaysArrw();
```

**ASYNC FUNCTION**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

//(bisa mengunakan cara reguler function / exression function)
const allDaysAsync = async () => {

	 for(let i of days) {
     
     await console.log(i)
   }

}

//init function
allDaysAsync();
```

**CONSTRUCTOR FUNCTION**

```javascript
function person(name, age, fak) {
  
   this.name = name;
   this.age = age;
   this.fak = fak;
}

const result = new person('John Doe',23,'Tehnik Informatika');

console.log(result);
```

**PARSING DATA WITH PARAMETER**

```javascript
function parsingData (name, age) {
   return {

     name: name,
     age: age
   }
}

const result = parsingData('Jon Doe', 23);

console.log(result);
```

**PARSING DATA WITH ARROW FUNCTION**
```javascript
// cara kesatu
const person = name => console.log(name);
person('Johh Doe');


//cara kedua
const person = (name, age) => console.log(`nama: ${name} dan umur: ${age}`);
person('Jon Doe', 23);

//cara ketiga
const person = (name, age, fak) => {

    console.log(`nama: ${name}\numur: ${age}\nfakultas: ${fak}`);
}
````

**FUNCTION SPECIAL METHOD**

* `Call`: adalah sebuah method yang biasa digunakan untuk mengambil sebuah function dari function lain.

* `Apply`: adalah sebuah method yang biasa digunakan untuk bekerja dengan sebuah nilai `Array`.

* `Bind`: adalah sebuah method yang biasa digunakan untuk mengikat sebuah nilai dari nilai yang sudah ditentukan.

**CALL**

```javascript
function tabungan (bank, saldo) {
  
     return {

      bankName: bank,
      sisalSaldo: saldo
   }
}


function atm() {
  
  const pinNumber = prompt('masukan pin anda', '');
        
  if (pinNumber) {
  
  const tarikTunai = prompt('Berapa jumlah uang yang mau anda tarik ?', '');
  
      return {
    
       tarikTunai: tabungan.call(null, 'BCA', 13000000 -  tarikTunai)
      }
  }
  
}

console.log(atm());
```

**APPLY**

```javascript
function days(...args) {
  
    for(let i of args) {
      
      console.log(i);
    }
}

days.apply(null, ['senin','selasa','rabu','kamis','jumat','sabtu','minggu']);
```

**BIND**

```javascript
function days(name, age) {
  
     return {
       
        name: name,
        age: age
     }
}

const setData = days();
const getData = days.bind(setData);
const resultData = getData('John Doe', 23)

console.log(resultData);
```