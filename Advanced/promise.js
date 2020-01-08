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
