//Inheritance adalah suatu metode yang digunakan untuk mewarisi sifat asli dari sebuah nilai yang dimiliki oleh parent class yang 
//kemudian diwariskan ke child class, berikut adalah contoh Pewarisan (Inheritance) pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

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
 