// Class adalah biasa disebut juga sebagai blue print atau parent dimana sebuah metode yang digunakan untuk menciptakan suatu 
//instant dari object dan Class juga merupakan grup suatu object dengan kemiripan attributes/properties, method dan bisa berelasi 
//ke object turunannya, berikut adalah contoh pengunaan Class pada JavaScript yang bisa digunakan dan berikut adalah contoh pengunaanya

// class tanpa constructor
class Person {
  
  name = 'Restu Wahyu Saputra';
  age = 23
  
}
console.log(Person.name);


//class dengan constructor
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


//class constructor dengan sebuah method
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


//class dengan static (moditifier) method
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