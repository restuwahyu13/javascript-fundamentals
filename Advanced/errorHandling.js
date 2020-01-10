//Error Handling adalah sebuah metode yang biasa digunakan untuk menangkap sebuah error dari nilai yang kita tentukan, yang paling umum adalah 
//error handling digunakan ketika kita melakukan request data mengunakan HTTP Request, 
//berikut adalah contoh pengunaan `Erro Handling` pada `JavaScript` yang bisa digunakan dan berikut adalah contoh pengunaanya.

try {
  
  const alertBox = prompt('Masukan Angka sesuka anda ?', '');
    
    if(alertBox < 20) {
    
    	throw 'Terlalu Kecil'

    } else {
    
        console.log('Terlalu Besar');
    }

} catch(err) {
 
   console.log(err);
}