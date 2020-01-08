//High Order Func adalah sebuah metode yang digunakan untuk mengambil sebuah fungsi lain sebagai argumen dan 
//mengembalikan fungsi tersebut sebagai hasilnya.


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


mahasiswa.filter((data) => {
  
     (data.age < 24) ? console.log(data) : '';
});


mahasiswa.forEach((value, index) => {
  
    console.log(value);
});

mahasiswa.reduce((x, y) => {
  
    console.log(x.age + y.age);
});
