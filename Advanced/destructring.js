 Destructuring adalah sebuah metode ekspresi javascript yang memungkinkan anda untuk membagi 
 atau memecah sebuah nilai dari sebuah Array atau Object ke dalam variabel yang berbeda


//array tanpa destructring
const days = ['senin','selasa','rabu'];
console.log(days[0]);

//array dengan destructring
const days = ['senin','selasa','rabu'];
const [senin, selasa, rabu] = days;

console.log(selasa);


//object tanpa destructring
const person = {
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}

console.log(`Nama Saya: ${person.name}\n Umur Saya: ${person.age}\n Alamat: ${person.alamat}\n Kota: ${person.kota}\n Provinsi ${person.prov}`)

//object dengan destructring
const person = {
  
   name: 'Restu Wahyu Saputra',
   age: 23,
   alamat: 'Jl.program V',
   kota: 'Depok',
   prov: 'Jawa Barat'
}

const {name, age, alamat, kota, prov} = person;
console.log(`Nama Saya: ${name}\n Umur Saya: ${age}\n Alamat: ${alamat}\n Kota: ${kota}\n Provinsi ${prov}`)