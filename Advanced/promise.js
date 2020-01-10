//Promise adalah sebuah metode yang digunakan untuk menangani operasi asyncronus dalam JavaScript.
//Mereka mudah digunakan ketika berhadapan dengan beberapa operasi asyncronus di mana panggilan
//balik dapat membuat panggilan balik yang mengarah ke kode yang tidak dapat dikelola.

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

//Promise resolve adalah sebuah metode yang digunakan untuk menangani sebuah tugas asyncronus untuk mengembalikan sebuah nilai
//jika nilai tersebut memenuhi keriteria yaitu sebagai array, array object dan object akan menolak jika nilai 
//tersebut tidak memenuhi keriteria

//Promise reject adalah sebuah metode yang digunakan untuk menghentikan sebuah tugas dalam bentuk 
//asyncronus dengan sebuah pesan yang diberikan.

//Promise all adalah sebuah metode yang digunakan untuk menangani sebuah tugas asyncronus untuk mengembalikan sebuah nilai secara serentak, 
//jika nilai tersebut memenuhi keriteria yaitu sebagai array atau array object dan aka menolak jika nilai 
//tersebut tidak memenuhi keriteria

//Promise race adalah sebuah metode yang digunakan untuk menangani tugas asyncronus untuk mengembalikan sebuah nilai yang hanya
//memenuhi keriteria saja, dalam contoh kasus jika kita mempunyai sebuah 3 data masing - masing data memeliki waktu yang berbeda, maka waktu
//yang hanya memenuhi keriteria saja yang akan dieksekusi yaitu yang tercepat.



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



// multiple promise all
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


//mutiple promise all with callback cara kesatu
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


// mutiple promise all with callback cara kedua
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

====================================

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


====================================

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


=======================================

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
});