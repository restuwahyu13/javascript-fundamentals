// berikut adalah contoh pengunaan function pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];

//REGULAR FUNCTION
function allDaysReg() {
  
   for(let i of days) {
     
     console.log(i)
   }
  
}
//init function
allDaysReg();


//EXPRESION FUNCTION
const allDaysExp = function() {

	 for(let i of days) {
     
     console.log(i)
   }

}
//init function
allDaysExp();


//INVOKED FUNCITION (self function)
(function () {
 
 const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
  
   for(let i of days) {
     
     console.log(i)
   }
  
}());


//ARROW FUNCTION
const allDaysArrw = () => {

	 for(let i of days) {
     
     console.log(i)
   }

}
//init function
allDaysArrw()


//ASYNC FUNCTION (bisa mengunakan cara reguler function / exp function)
const allDaysAsync = async () => {

	 for(let i of days) {
     
     await console.log(i)
   }

}
//init function
allDaysAsync();


//FUNCTION CONSTRUCTOR (bisa reguler or exp)
function person(name, age, fak) {
  
   this.name = name;
   this.age = age;
   this.fak = fak;
}


const result = new person('Restu Wahyu',23,'Tehnik Informatika');
console.log(result);


//parsing data di function

function parsingData (name, age) {
   return {

     name: name,
     age: age
   }
}

const data = parsingData('Restu Wahyu Saputra', 23);