//spread operator adalah dimana sebuah metode untuk memecah sebuah bilangan array atau object menjadi bagian - bagian terkecil


const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
console.log(...days);

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
