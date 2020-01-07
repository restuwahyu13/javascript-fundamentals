## JAVASCRIPT FUNDAMENTAL EXAMPLE

### 1.VARIABLE 

berikut adalah contoh cara pengunaan variable pada JavaScript yang bisa digunakan, dan tidak boleh mengunakan kata reserved keywords contoh seperti `this`,`break`,`continue`,`if`,` for`,`while` dan lain - lain.

**Contoh Pengunaan:**

```javascript

//var sebuah pengunaan variable yang bersifat global yang berarti bisa diakses dari mana saja

var x = 10;
var z;
z = 10;
var a,b,c;
a = 10;
b = 20;
c = 30

//let sebuah pengunaan variable yang bersifat global tetapi tidak bisa di akses didalam scope -scope tertentu

let x = 10;
let z;
z = 10;
let a,b,c;
a = 10;
b = 20;
c = 30

//const sebuah pengunaan variable yang bersifat read only atau tidak bisa diubah

const x = 10;

```
### 2.TIPE DATA

berikut adalah beberapa contoh tipe data yang boleh di gunakan pada JavaScript, tipe data tersebut termasuk dalam tipe data `Primitive `dan `Object`, dan tipe data tersebut yang nantinya akan sering sekali digunakan.

**Tipe Data Primitive **
1. `String = 'Hello Wordl'`
2. `Number = 2020`
3. `Boolean = true or false`
4. `Null = 0`
5. `Undefinded = ''`

**Tipe Data Object **
1. `Function = func()`
2. `Array = []`
3. `Object = {}`

**Contoh Pengunaan:**

```javascript
var name = 'Restu Wahyu Saputra';
var age = 23
var person = [1,2,3,4,5];
var profile = {name: 'Restu Wahyu Saputra', age: 23}
var benar = (profile.name === 'Restu Wahyu Saputra') ? true : false;
```

```javascript
var func = () => { console.log('Restu Wahyu Saputra') }
var person = { name: 'Restu Wahyu Saputra'}
var angka = [1,2,3,4,5]
```
### 3.OPERATOR

berikut adalah beberapa contoh operator pada JavaScript yang bisa digunakan, berikut adalah contoh pengunaanya:

**Operator Aritmatika**
```javascript
var a = 2 + 2; 
var b = 4 - 2; 
var c = 5 * 5; 
var d = 20 / 4; 
var e = 10 % 2; 
var f = a++ or --a
var g = ++a or --a
```
**Operator Penugasan**
```javascript
var a += 5;
var b *= 2;
var c -= 5;
var d /= 1;
var e %= 1;
```
**Operator Perbandingan**

```javascript
var a < 6  // dimulai dari angka 5 sebelumnya (apakah A itu lebih kecil dari 6) = false
var a <= 6 // dimulai dari angka 6 (apakah A itu lebih kecil sama dengan dari 6) = false
var b > 4 // dimulai dari angka 5 atau selanjutnya (apakah B itu lebih besar dari 4) = true
var b >= 4 // dimulai dari angka 4 (apakah B itu lebih besar sama dengan dari 4) = true
```
```javascript
//strict mode
var tesOne = a === 4;
var tesTwo = a !== 2;

//non strict mode
var tesOne = a == 4;
var tesTwo = a !== 2;
```
**Operator Perbandingan**

`&& / END` : Jika operasi  bilangan itu keduanya benar maka bernilai true dan jika salah satu bilangannya itu ada yang salah maka bernilai false

`|| / OR`: Jika operasi bilangan itu keduanya true maka bernilai true dan jika salah satu bilangannya itu ada yang salah maka bernilai true

` ! / NOT` : Jika sebuah bilangan itu true maka akan menjadi false dan jika sebuah bilangan itu false maka akan menjadi true

### 4.PERCABANGAN

`percabangan` adalah suatu metode dimana kita dapat menentukan sebuah kondisi pada sebuah data, baik itu dalam keadaan benar ataupun salah, berikut adalah contoh beberapa jenis percabangan (pengondisian) pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya.

**IF STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'restu') alert(true);
else alert (false);
```
```javascript
if(alertbox === 'restu') {
  
   alert(true)
   
}else{
  
   alert(false)
}
```
**IF ELSE STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'restu') {
  
   alert(true)
  
}else if(alertbox === 'wahyu') {
  
   alert(true);
  
}else{
  
   alert(false)
}
```

**SWITCH STATEMENT**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

switch(alertbox) {
    
  case 'restu':
    alert(true);
    break;
    
  case 'wahyu':
    alert(true);
    break;
	
  case 'saputra':
    alert(true);
    break;
    
  default:
    alert(false);
}
```

**PERCABANGAN BERSARANG**

```javascript
const alertbox = prompt('masukan nama anda ?', '');

if(alertbox === 'restu') {
  
    alert(true);
     
}else{
  
   if(alertbox == 'wahyu') {
     
       alert(true); 
     
   }else{
     
      if(alertbox === 'saputra') {
        
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
    
  case 'restu':
  case 'wahyu':
  case 'saputra':
    
    alert(true);
    break;

  default:
    
    alert(false);
}
```

### 4.PERULANGAN

`Perulangan` adalah suatu metode mengulang sebuah data secara berulang - ulang, sesuai dengan ketentuan yang telah ditentukan, berikut adalah contoh pengunaan perulangan pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya.

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
  
}while (i < days.length);
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
const person = [{name: 'restu', fak: 'tehnik informatika'}, { name: 'bagus budiawan', fak: 'sastra inggris' }]

for(let i in person) {
  
   console.log(person[i]);
}
```

### 6.ARRAY

`Array` adalah sebuah tipe data yang biasa digunakan untuk menampung / bekerja dengan banyak data dan untuk mengelola data tersebut kita bisa mengunakan perulangan baik itu `FOR`, `WHILE` dan `DO WHILE` atau yang lainnya, berikut adalah contoh pengunaan `Array` pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya.

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

//cara mencetak sebuah array object bisa mengunakan 2 cara yaitu:
person[0].name OR bisa mengunakan loop array iterator object untuk mengekstrak semua datanya
````

### 7.OBJECT

`Object` adalah sebuah tipe data yang terdiri dari antara `Key` dan `Value`, `Object` juga biasa digunakan untuk menampung / bekerja dengan banyak data dan untuk mengelola data tersebut kita bisa mengunakan `ARRAY ITERATOR OBJECT`, berikut adalah contoh pengunaan `Object` pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya.

**OBJECT REGULER**

```javascript
const person = {

	name: 'Restu Wahyu Saputra',
	age: 23,
	fak: 'Tehnik Informatika'
}

//cara mencetak sebuah object bisa mengunakan 2 cara yaitu:
person.name || person['name'];
```

***OBJECT CONSTRUCTOR***

```javascript
const person = new Object;
person.name = 'Restu Wahyu Saputra'; OR person['name']: 'Restu Wahyu Saputra'; 
person.age = 23; OR person['age'] = 23;
person.fak = 'Tehnik Informatika' OR person['fak'] = 'Tehnik Informatika'
````

### 8.FUNCTION

`Function` adalah sebuah metode dimana kita bisa membuat sebuah fungsi tersendiri, untuk masing - masing perintah yang telah kita tentukan contoh yang paling umum adalah ketika kita ingin membuat sebuah fungsi dari masing - masing operation pada `MySQL`, berikut adalah contoh pengunaan `Function` pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya.

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

const result = new person('Restu Wahyu',23,'Tehnik Informatika');
console.log(result);
```

**PARSING DATA PARAMETER**

```javascript
function parsingData (name, age) {
   return {

     name: name,
     age: age
   }
}

const data = parsingData('Restu Wahyu Saputra', 23);
console.log(data);
```

**CALLBACK FUNCTION**

```javascript
function parsingData (name, age, callback) {

   callback(name, age);
  
    return {
      
       name: name,
       age: age
    }
}

parsingData('Restu Wahyu Saputra', 23, (name, age) => {
  
     console.log(`Nama: ${name} - Umur: ${age}`);
});
```