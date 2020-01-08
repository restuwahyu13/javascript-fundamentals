//Callback adalah sebuah metode untuk melakukan sebuah panggilan balik dari sebuah function, berikut adalah contoh pengunaan function pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

//REGULER CALLBACK
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

//CALLBACK HELL
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