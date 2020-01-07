// berikut adalah contoh pengunaan perulangan pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
 
//FOR LOOP  
for(let i = 0; i < days.length; i++) {
  
   console.log(days[i]);
}

//WHILE LOOP
let i = 0;
while(i < days.length) {
  
  console.log(days[i]);
  i++;
}

//DO WHILE LOPP
let i = 0;    
do{
  
  console.log(days[i]);
  i++;
  
}while (i < days.length);


// berikut adalah contoh pengunaan perulangan pada JavaScript ES6 yang bisa digunakan 


//LOPP ARRAY ITERATOR (bisa digunakan untuk melooping array tetapi tidak untuk array object)
for(let i of days) {
  
   console.log(i);
}


//LOOP ARRAY ITERATOR OBJECT dan ARRAY (bisa digunakan untuk melooping array dan array object)
const person = [{name: 'restu', fak: 'tehnik informatika'}, { name: 'bagus budiawan', fak: 'sastra inggris' }]

for(let i in person) {
  
   console.log(person[i]);
}