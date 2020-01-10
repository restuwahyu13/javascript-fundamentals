## JAVASCRIPT ADVANCED EXAMPLE

### 1.CLASS

`Class` disebut juga sebagai `Blue Print` atau `Parent Class` dimana sebuah metode yang digunakan untuk menciptakan suatu instant dari object itu sendiri dan `Class` juga merupakan grup dari suatu object dengan kemiripan `Attributes` / `Properties`, method dan bisa berelasi ke object turunannya, berikut adalah contoh pengunaan `Class` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**CLASS NOT CONSTRUCTOR**

```javascript
class Person {
  
  name = 'John Doe';
  age = 23
  
}

console.log(Person.name);
```

**CLASS WITH CONSTRUCTOR**

```javascript
class Person {
  
  name;
  age;
  
   constructor(name, age) {
     
      this.name = name;
      this.age = age;
   }
  
}

const data = new Person('John Doe',23);

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

const data = new Person('John Doe',23);

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

const data = Person.resultData('John Doe',23);

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

const data = new Address('John Doe','23','jl.kpbaru',14336,'depok','jawa barat');

console.log(data);
```

### 3.CALLBACK

`Callback` adalah sebuah metode yang digunakan untuk melakukan sebuah panggilan balik dari sebuah `Function`, berikut adalah contoh pengunaan `Callback` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**REGULER CALLBACK**

```javascript
function parsingData (name, age, callback) {
  
  callback(name, age)
  
  return {

     name: name,
     age: age
   }
}

parsingData('John Doe', 23,(name, age)=> {
  
      console.log(name);
});

```

**CALLBACK HELL (NESTED CALLBACK)**

```javascript
function parsingData (x, callback) {
  
   return callback(x);
}


parsingData(10,(x) => {

  setTimeout(() => console.log(x * 1), 1000 )
  
  parsingData(10,(x) =>  setTimeout(() => console.log(x * 2), 2000 ));
  
  parsingData(10,(x) => setTimeout(() => console.log(x * 3), 3000 ));
  
  parsingData(10,(x) => setTimeout(() => console.log(x * 4), 4000 ));
               
  parsingData(10,(x) => setTimeout(() => console.log(x * 5), 5000 ));
  
});
```

### 4.PROMISE

`Promise` adalah sebuah metode yang digunakan untuk menangani operasi `Asyncronus` dalam `JavaScript`, mereka mudah digunakan ketika berhadapan dengan beberapa operasi `Asyncronus` dimana panggilan balik dapat membuat panggilan balik yang mengarah ke kode yang tidak dapat dieksekusi, berikut adalah contoh pengunaan `Promise` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.


```javascript
new Promise((resolve, reject) => {
  
  function parsingData (name, age) {
      
      resolve({

        name: name,
        age: age
     })
  }
    
  //init function dan callback dengan promise
  parsingData('John Doe', 23);
  
})
.then(result => {
  
    console.log(result);
})
.catch((err) => {
  
    reject(new Error(err));
});
```
**PROMISE SPECIAL METHOD**

* `Promise Resolve` adalah sebuah metode yang digunakan untuk menangani sebuah tugas `Asyncronus` untuk mengembalikan sebuah nilai
jika nilai tersebut memenuhi kriteria yaitu sebagai `Array`, `Array Object` dan `Object` akan menolak jika nilai tersebut tidak memenuhi kriteria.

* `Promise Reject` adalah sebuah metode yang digunakan untuk menghentikan sebuah tugas dalam bentuk `Asyncronus` dengan sebuah pesan yang diberikan.

* `Promise All` adalah sebuah metode yang digunakan untuk menangani sebuah tugas `Asyncronus` untuk mengembalikan sebuah nilai secara serentak, jika nilai tersebut memenuhi kriteria yaitu sebagai `Array` atau `Array Object` dan aka menolak jika nilai tersebut tidak memenuhi kriteria.

* `Promise Race` adalah sebuah metode yang digunakan untuk menangani sebuah tugas `Asyncronus` untuk mengembalikan sebuah nilai yang hanya
memenuhi kriteria saja, dalam contoh kasus jika kita mempunyai sebuah 3 data masing - masing data memeliki waktu yang berbeda, maka waktu yang hanya memenuhi kriteria saja yang akan dieksekusi yaitu yang tercepat.


**SINGLE PROMISE RESOLVE**

```javascript
// single promise resolve cara kesatu
const person = {
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
};

const result = Promise.resolve(person);

console.log(result);


// single promise resolve cara kedua
const person = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

const result = Promise.resolve(person);

console.log(result);


// single promise resolve cara ketiga
const person = [{
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
}];

const result = Promise.resolve(person);

console.log(result);
````
**MULTIPLE PROMISE RESOLVE**

```javascript
// multiple promise resolve cara kesatu
const personOne = [{
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
}];

const personTwo = [{
  
  name: 'Jane Doe',
  age: 23,
  fak: 'Tehnik Informatika'
  
}];

const personThree = [{

    name: 'Mr x',
    age: 33,
    fak: 'Tehnik Industri'
  }
];

const result = Promise.resolve([personOne, personTwo, personThree]);

console.log(result);


//mutiple promise resolve with callback cara kedua
const dataOne = new Promise((resolve, reject) => {

  const personOne = {
  
    name: 'John Doe',
    age: 25,
    fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personOne), 1000);
});


const dataTwo = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 2000);
});


const dataThree = new Promise((resolve, reject) => {

    const personThree = {
      
        name: 'Mr x',
        age: 33,
        fak: 'Tehnik Industri'
    };

    setTimeout(() => resolve(personThree), 3000);
});


Promise.resolve([dataOne, dataTwo, dataThree])
.then(result => {

   console.log(result);

})
.catch(err => {

    Promise.reject(err);
});
````

**SINGLE PROMISE REJECT**

```javascript
//single promise reject
const person = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 1000);
});


Promise.reject(person);
````

**MULTIPLE PROMISE REJECT**

```javascript
//multipe promise reject
const dataTwo = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 1000);
});


const dataThree = new Promise((resolve, reject) => {

    const personThree = {
      
        name: 'Mr x',
        age: 33,
        fak: 'Tehnik Industri'
    };

    setTimeout(() => resolve(personThree), 3000);
});


Promise.reject([dataTwo, dataThree]);
````

**PROMISE REJECT IN RACE OR ALL**

```javascript
//promise reject with promise race or all
const dataOne = new Promise((resolve, reject) => {

  const personOne = {
  
    name: 'John Doe',
    age: 25,
    fak: 'Tehnik Informatika'
  };

    setTimeout(() => reject(personOne), 2000);
});


const dataTwo = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 1000);
});


const dataThree = new Promise((resolve, reject) => {

    const personThree = {
      
        name: 'Mr x',
        age: 33,
        fak: 'Tehnik Industri'
    };

    setTimeout(() => resolve(personThree), 3000);
});


Promise.race([dataOne, dataTwo, dataThree])
.then(result => {

   console.log(result);

})
.catch(err => {

    Promise.reject(err);
})
````

**SINGLE PROMISE ALL**

```javascript
// single promise all cara kesatu
const person = ['senin','selasa','rabu','kamis','jumat','sabut','minggu'];

const result = Promise.all(person);
console.log(result);


// single promise all cara kedua
const person = [{
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
}];

const result = Promise.all(person);

console.log(result);
````

**MULTIPLE PROMISE ALL**

```javascript
// multiple promise all cara kesatu
const personOne = [{
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
}];

const personTwo = [{
  
  name: 'Jane Doe',
  age: 23,
  fak: 'Tehnik Informatika'
  
}];

const personThree = [{

    name: 'Mr x',
    age: 33,
    fak: 'Tehnik Industri'
  }
];

const result = Promise.all([personOne, personTwo, personThree]);

console.log(result);


//mutiple promise all with callback cara kedua
const personOne = [{
  
  name: 'John Doe',
  age: 25,
  fak: 'Tehnik Informatika'
  
}];

const personTwo = [{
  
  name: 'Jane Doe',
  age: 23,
  fak: 'Tehnik Informatika'
  
}];

const personThree = [{
  
    name: 'Mr x',
    age: 33,
    fak: 'Tehnik Industri'
  }
]

Promise.all([personOne, personTwo, personThree])
.then(result => {
  
   console.log(result);
})
.catch(err => {
  
    Promise.reject(err);
  
});


// mutiple promise all with callback cara ketiga
const dataOne = new Promise((resolve, reject) => {

  const personOne = {
  
    name: 'John Doe',
    age: 25,
    fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personOne), 500);
});


const dataTwo = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 2000);
});


const dataThree = new Promise((resolve, reject) => {

    const personThree = {
      
        name: 'Mr x',
        age: 33,
        fak: 'Tehnik Industri'
    };

    setTimeout(() => resolve(personThree), 3000);
});


Promise.race([dataOne, dataTwo, dataThree])
.then(result => {

   console.log(result);

})
.catch(err => {

    Promise.reject(err);
});
````

**PROMISE RACE**

```javascript
// multiple promise race with callback
const dataOne = new Promise((resolve, reject) => {

  const personOne = {
  
    name: 'John Doe',
    age: 25,
    fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personOne), 2000);
});


const dataTwo = new Promise((resolve, reject) => {

    const personTwo = {
    
      name: 'Jane Doe',
      age: 23,
      fak: 'Tehnik Informatika'
  };

    setTimeout(() => resolve(personTwo), 1000);
});


const dataThree = new Promise((resolve, reject) => {

    const personThree = {
      
        name: 'Mr x',
        age: 33,
        fak: 'Tehnik Industri'
    };

    setTimeout(() => resolve(personThree), 3000);
});


Promise.race([dataOne, dataTwo, dataThree])
.then(result => {

   console.log(result);

})
.catch(err => {

    Promise.reject(err);
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


mahasiswa.map((value, index, array) => {
  
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

mahasiswa.forEach((value, index, array) => {
  
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
  
   name: 'John Doe',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}

const result = `Nama Saya: ${person.name}\n Umur Saya: ${person.age}\n Alamat: ${person.alamat}\n Kota: ${person.kota}\n Provinsi ${person.prov}`;

console.log(result);
````

**OBJECT WITH DESTRUCTURING**

```javascript
const person = {
  
   name: 'John Doe',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}

const {name, age, alamat, kota, prov} = person;

const result = `Nama Saya: ${name}\n Umur Saya: ${age}\n Alamat: ${alamat}\n Kota: ${kota}\n Provinsi ${prov}`;

console.log(result);
````

### 7.TEMPLATE STRING

`Template Literal` adalah sebuah metode yang digunakan untuk membuat `Literal String`, yang memungkinkan anda dapat menambahkan sebuah ekspresi didalam sebuah string, berikut adalah contoh pengunaan `Template Literal` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

```javascript
const hello = 'John Doe';

console.log(`Selamat Datang: ${hello}`);
```

### 8.SPREAD OPERATOR

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

### 10.HTPP REQUEST

`Http Request` adalah sebuah metode yang digunakan untuk berkomunikasi antara client dan server untuk melakukan pertukaran data, 
berikut adalah contoh pengunaan `Http Request` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

**REGULER HTTP REQUEST**

```javascript
// http request cara kesatu 
const ajax = new XMLHttpRequest;

ajax.onreadystatechange = () => {
  
    if(ajax.readyState === 4 && ajax.status === 200) {
      
        const jsonData = JSON.parse(ajax.response);
        const result = jsonData;
        console.log(result);
    }
}

const url = 'https://jsonplaceholder.typicode.com/users';
ajax.open('GET', url, true);
ajax.send();


// http request cara kedua
const headers = new Headers({
  
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
});

ajax.onreadystatechange = () => {
  
    if(ajax.readyState === 4 && ajax.status === 200) {
      
        const jsonData = JSON.parse(ajax.response);
        const result = jsonData;
        console.log(result);
    }
  
};

ajax.open(headers.get('method'), headers.get('url'));
ajax.send();
```

**PROMISE HTTP REQUEST**

```javascript
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url, {
  
    method: 'GET',
    type: 'cors',
})
.then(response => response.json())
.then(result => console.log(result))
.catch(err => console.log(err));

```

**JQUERY HTTP REQUEST**

```javascript
$(() => {
    
    $.ajax({
    
       url: 'https://jsonplaceholder.typicode.com/users',
       method: 'GET',
       contentType: 'json',
       success: ((response) => {
         
          console.log(response);
       })
    });

 });
```

### 11.ERROR HANDLING

`Error Handling` adalah sebuah metode yang digunakan untuk menangkap sebuah error dari nilai yang kita tentukan, yang paling umum error handling digunakan ketika kita ingin melakukan request data mengunakan HTTP Request untuk menangkap sebuah error, berikut adalah contoh pengunaan `Error Handling` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

* `Try` adalah sebuah method yang biasa digunakan untuk menangkap sebuah pesan error dari sebuah nilai yang kita tentukan.

* `Catch` adalah sebuah method yang biasa digunakan untuk menerima pesan error yang dikirim dari block try.

* `Throw` adalah sebuah method yang biasa digunakan untuk melempar sebuah pesan error dan pesannya bisa kita custom sesuai kengininan.

* `Finally` adalah sebuah method yang biasa digunakan untuk memberi sebuah pesan akhir bawah sebuah nilai telah berhasil di eksekusi baik itu true atau false.

```javascript
try {
  
  const alertBox = prompt('Masukan Angka sesuka anda ?', '');
    
    if(alertBox < 20) {
    
      throw 'Terlalu Kecil'

    } else {
    
        console.log('Terlalu Besar');
    }

} catch(err) {
 
   const error = new Error(err);
   console.log(error);

} finally {

   console.log('data berhasil di eksekusi');  
}
```