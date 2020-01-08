## JAVASCRIPT ADVANCED EXAMPLE

### 1.CLASS

`Class` disebut juga sebagai `Blue Print` atau `Parent Class` dimana sebuah metode yang digunakan untuk menciptakan suatu instant dari object itu sendiri dan `Class` juga merupakan grup dari suatu object dengan kemiripan attributes/properties, method dan bisa berelasi ke object turunannya, berikut adalah contoh pengunaan `Class` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**CLASS NOT CONSTRUCTOR**

```javascript
class Person {
  
  name = 'Restu Wahyu Saputra';
  age = 23
  
}
console.log(Person.name);
```

**CLASS WITH CONSTRUCTOR**

```javascript
//Class Dengan Constructor
class Person {
  
  name;
  age;
  
   constructor(name, age) {
     
      this.name = name;
      this.age = age;
   }
  
}

const data = new Person('restu wahyu',23);
console.log(data.name);
```

**CLASS CONSTRUCTOR WITH METHOD**

```javascript
class Person {
  
  name;
  age;
  
   constructor(name, age) {
     
      this.name = name;
      this.age = age;
   }

   resultOne() {
      
       return this.name +'\n'+ this.age
        
    }

    resultTwo() {

      return `${this.name} \n ${this.age}`
    }
  
    resultThree() {
      
       return {
         
          name: this.name,
          age: this.age
       }
    }
  
}

const data = new Person('restu wahyu',23);
console.log(data.resultThree().name);
````

**CLASS WITH STATIC METHOD**

```javascript
class Person {
  
  name;
  age;
  
   static resultData(name, age) {
      
        return {
          
           name: name,
           age: age
        }   
    }
}

const data = Person.resultData('Restu Wahyu',23);
console.log(data.name);
````

### 2.INHERITANCE

`Inheritance` adalah suatu metode yang digunakan untuk mewarisi sifat asli dari sebuah nilai yang dimiliki oleh `Parent Class` yang 
kemudian diwariskan ke `Child Class`, berikut adalah contoh pengunaan `Inheritance` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

```javascript
class Person {
  
  name;
  age;
  
   constructor(name, age) {
     
      this.name = name;
      this.age = age;
   }
}

class Address extends Person {
  
  alamat;
  kodepos;
  kota;
  provinsi;
  
  constructor(name, age, alamat, kodepos, kota, provinsi) {
    
     super(name, age);
    
     this.alamat = alamat;
     this.kodepos = kodepos;
     this.kota = kota;
     this.provinsi = provinsi;
  }
  
}

const data = new Address('Restu','23','jl.kpbaru',14336,'depok','jawa barat');
console.log(data);
```

### 3.CALLBACK

`Callback` adalah sebuah metode untuk melakukan sebuah panggilan balik dari sebuah function, berikut adalah contoh pengunaan `Callback` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**REGULER CALLBACK**

```javascript
function parsingData (name, age, callback) {
  
  callback(name, age)
  
  return {

     name: name,
     age: age
   }
}

parsingData('Restu Wahyu Saputra', 23,(name, age)=> {
  
      console.log(name);
});

```

**CALLBACK HELL (NESTED CALLBACK)**

```javascript
function parsingData (name, age, callback) {
  
  callback(name, age)
  
  return {

     name: name,
     age: age
   }
}

parsingData('Restu Wahyu Saputra', 23,(name, age)=> {
  
      console.log(name);
});
```

### 4.PROMISE

`Promise` adalah sebuah metode yang digunakan untuk menangani operasi `Asyncronus` dalam JavaScript, mereka mudah digunakan ketika berhadapan dengan beberapa operasi `Asyncronus` dimana panggilan balik dapat membuat panggilan balik yang mengarah ke kode yang tidak dapat dieksekusi, berikut adalah contoh pengunaan `Promise` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.


```javascript
new Promise((resolve, reject) => {
  
  function parsingData (name, age) {
      
      resolve({

        name: name,
        age: age
     })
  }
    
  //init function dan callback dengan promise
  parsingData('Restu Wahyu Saputra', 23);
  
})
.then(result => {
  
    console.log(result);
})
.catch((err) => {
  
    reject(new Error(err));
});
```

### 4.HIGH ORDER FUNCTION

`High Order Function` adalah sebuah metode yang digunakan untuk mengambil sebuah fungsi lain sebagai argumen dan mengembalikan fungsi tersebut sebagai hasilnya, berikut adalah contoh pengunaan `HOF` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.


**MAP**

```javascript
const mahasiswa = [{
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   fak: 'Tehnik Informatika'
  
},{
  
   name: 'Rima Triana',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Irfan Rotor',
   age: 24,
   fak: 'Tehnik Kendaraan Ringan'
  
}];


mahasiswa.map((value, index) => {
  
    console.log(value);
});
```

**FOREACH**

```javascript
const mahasiswa = [{
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   fak: 'Tehnik Informatika'
  
},{
  
   name: 'Rima Triana',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Irfan Rotor',
   age: 24,
   fak: 'Tehnik Kendaraan Ringan'
  
}];

mahasiswa.forEach((value, index) => {
  
    console.log(value);
});
```

**FILTER**

```javascript
const mahasiswa = [{
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   fak: 'Tehnik Informatika'
  
},{
  
   name: 'Rima Triana',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Irfan Rotor',
   age: 24,
   fak: 'Tehnik Kendaraan Ringan'
  
}];

mahasiswa.filter((data) => {
  
     (data.age < 24) ? console.log(data) : '';
});
```

**REDUCE**

```javascript
const mahasiswa = [{
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   fak: 'Tehnik Informatika'
  
},{
  
   name: 'Rima Triana',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Irfan Rotor',
   age: 24,
   fak: 'Tehnik Kendaraan Ringan'
  
}];

mahasiswa.reduce((x, y) => {
  
    console.log(x.age + y.age);
});
```

### 6.DESTRUCTURING

`Destructuring` adalah sebuah metode ekspresi javascript yang memungkinkan anda untuk membagi atau memecah sebuah nilai dari sebuah `Array`atau `Object` ke dalam bentuk variabel yang berbeda, berikut adalah contoh pengunaan `Destructuring` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**ARRAY NOT DESTRUCTURING**

```javascript
const days = ['senin','selasa','rabu'];
console.log(days[0]);
```

***ARRAY WITH DESTRUCTURING***

```javascript
const days = ['senin','selasa','rabu'];
const [senin, selasa, rabu] = days;

console.log(selasa);
```

**OBJECT NOT DESTRUCTURING**

```javascript
const person = {
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}
console.log(`Nama Saya: ${person.name}\n Umur Saya: ${person.age}\n Alamat: ${person.alamat}\n Kota: ${person.kota}\n Provinsi ${person.prov}`);
````

**OBJECT WITH DESTRUCTURING**

```javascript
const person = {
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}

const {name, age, alamat, kota, prov} = person;
console.log(`Nama Saya: ${name}\n Umur Saya: ${age}\n Alamat: ${alamat}\n Kota: ${kota}\n Provinsi ${prov}`);
````

### 7.TEMPLATE STRING

`Template Literal` adalah sebuah metode yang digunakan untuk membuat `Literal String`, yang memungkinkan anda dapat menambahkan sebuah ekspresi didalam sebuah string, berikut adalah contoh pengunaan `Template Literal` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

```javascript
const hello = 'Hello Wordl';

console.log(`Selamat Datang: ${hello}`);
```

### 8.TEMPLATE STRING

`Spread Operator` adalah dimana sebuah metode untuk memecah sebuah bilangan `Array` atau `Array Object` menjadi bagian - bagian terkecil, berikut adalah contoh pengunaan `Spread Operator` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**SPREAD WITH ARRAY**

```javascript
const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

console.log(...days);
```

**SPREAD WITH ARRAY OBJECT**

```javascript
const mahasiswa = [{
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   fak: 'Tehnik Informatika'
  
},{
  
   name: 'Rima Triana',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Irfan Rotor',
   age: 24,
   fak: 'Tehnik Kendaraan Ringan'
  
}];

console.log(...mahasiswa)
```

### 9.MODULE ES6

`Module` adalah sebuah metode yang digunakan untuk `meminta` atau `mengirim` sebuah fungsi tertentu, dari sumber yang telah di tentukan, berikut adalah contoh pengunaan `Module` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**MODULE AUTO LOAD**

```javascript
import 'hello.js'
```

**MODULE SINGLE IMPORT**

```javascript
import HelloWord from 'hello.js';
```

**MODULE MULTIPLE IMPORT**

```javascript
import {HelloWordl, HelloWord2, HelloWord3} from 'hello.js'
```

**MODULE ALL IMPORT**

```javascript
import * from 'hello.js';
```

**MODULE RENAME PARAM IMPORT**

```javascript
import HelloWord as helloDunia from 'hello.js';
```

**MODULE SINGLE EXPORT**

```javascript
export HelloWord;
```

**MODULE MULTIPLE EXPORT**

```javascript
export {HelloWordl, HelloWord2, HelloWord3};
```

**MODULE RENAME PARAM EXPORT**

```javascript
export {HelloWordl as dunia1, HelloWord2 as dunia2, HelloWord3 as dunia3};
```

**MODULE DEFAULT EXPORT**

```javascript
export default HelloWord;
```