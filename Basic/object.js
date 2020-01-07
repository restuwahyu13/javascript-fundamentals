// berikut adalah contoh pengunaan object pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

//NOTE: perlu diingat OBJECT terdiri dari 2 bulah nilai yaitu key dan value dan sedangkan diarray itu index dan value

//REGULER OBJECT ONE
const person = {

	name: 'Restu Wahyu Saputra',
	age: 23,
	fak: 'Tehnik Informatika'
}

//OBJECT CONSTRUCTOR
const person = new Object;
person.name = 'Restu Wahyu Saputra'; || person['name']: 'Restu Wahyu Saputra'; 
person.age = 23; || person['age'] = 23;
person.fak = 'Tehnik Informatika' || person['fak'] = 'Tehnik Informatika'


//cara mencetak sebuah object bisa mengunakan 2 cara yaitu:
person.name || person['name'];


//ARRAY OBJECT
const person = [{

	name: 'Restu Wahyu Saputra',
	age: 23,
	fak: 'Tehnik Informatika'
},

{
	name: 'Bagus Budiawan',
	age: 33,
	fak: 'Tehnik Informatika'
},

{
	name: 'Muhammad Ashari',
	age: 35,
	fak: 'Tehnik Informatika'
}];

//cara mencetak sebuah array object bisa mengunakan 2 cara yaitu:
person[0].name || bisa mengunakan loop dengan forin untuk mengambil semua data